import { useDispatch, useSelector } from "react-redux";
import {useDiscoverMoviesQuery} from "@/features/api/filtersApi/filtersApi.ts";
import type {RootState} from "@/app/model/store.ts";
import s from "@/app/ui/Main/SectionsStyles.module.css";
import sAll from "@/common/components/PopularPage/PopularPage.module.css";
import {MoviesList} from "@/common/components/MoviesList/MoviesList.tsx";
import {Pagination} from "@/common/components/Pagination/Pagination.tsx";
import {useSearchParams} from "react-router-dom";
import {Genres} from "@/features/FilteredMovies/Genres/Genres.tsx";

export const FilteredMovies = () => {

  const dispatch = useDispatch();

  const { sortBy, rating, genres, page } = useSelector(state => state.filters);

  const { data, isLoading } = useDiscoverMoviesQuery({
    sortBy,
    ratingGte: rating[0],
    ratingLte: rating[1],
    genres,
    page,
  })

  const favorites = useSelector((state: RootState) => state.favorites.movies);

  const [params, setParams] = useSearchParams();
  const currentPage = Number(params.get("page") ?? 1);

  const handlePageChange = (page: number) => {
    setParams({currentPage: currentPage.toString()});
  }

  if (isLoading) {
    return <div>Загрузка</div>
  }

  // console.log(data);

  return (
    <div className={s.container}>
      <h2>Фильтрация</h2>
      <div className={`${sAll.moviesWrapper} ${sAll.allMoviesWrapper}`}>
        {data?.results?.map((movie) => {

          const isFavorite = favorites.some(item => item.id === movie.id);

          return (
            <MoviesList key={movie.id} movie={movie} isFavorite={isFavorite} />
          )
        })}
      </div>
      <div>
        <h3>Жанры</h3>
        <Genres />
      </div>
      <Pagination currentPage={currentPage} totalPages={data.total_pages} onPageChange={handlePageChange} />
    </div>
  );
};