import { useSelector } from "react-redux";
import {useDiscoverMoviesQuery} from "@/entities/movie/api/filtersApi/filtersApi.ts";
import type {RootState} from "@/app/providers/store/store.ts";
import s from "@/app/styles/SectionsStyles.module.css";
import sf from "./FilteredMoviesPage.module.css"
import sAll from "@/pages/MoviesPages/PopularPage/PopularPage.module.css";
import {MoviesList} from "@/entities/ui/MoviesList/MoviesList.tsx";
import {Pagination} from "@/features/pagination/Pagination.tsx";
import {useSearchParams} from "react-router-dom";
import {FiltersBlock} from "@/features/filters/FiltersBlock/FiltersBlock.tsx";

export const FilteredMoviesPage = () => {

  // const dispatch = useDispatch();

  const { sortBy, rating, genres } = useSelector((state: RootState) => state.filters);

  const favorites = useSelector((state: RootState) => state.favorites.movies);

  const [params, setParams] = useSearchParams();
  const currentPage = Number(params.get("currentPage") ?? 1);

  const { data, isLoading } = useDiscoverMoviesQuery({
    sortBy,
    ratingGte: rating[0],
    ratingLte: rating[1],
    genres,
    page: currentPage,
  })

  const handlePageChange = (newPage: number) => {
    setParams({currentPage: newPage.toString()});
  }

  if (isLoading) {
    return <div>Загрузка</div>
  }

  console.log(data);

  return (
    <div className={s.container}>
      <h2>Фильтрация</h2>
      <div className={sf.filtersPageInner}>
        <FiltersBlock />
        <div className={`${sAll.moviesWrapper} ${sAll.allMoviesWrapper}`}>
          {data?.results?.map((movie) => {

            const isFavorite = favorites.some(item => item.id === movie.id);

            return (
              <MoviesList key={movie.id} movie={movie} isFavorite={isFavorite} />
            )
          })}
        </div>
      </div>
        <Pagination currentPage={currentPage} totalPages={data?.total_pages || 1} onPageChange={handlePageChange} />
    </div>
  );
};