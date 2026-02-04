import {useFetchAllPopularMoviesQuery} from "@/features/api/popularApi/popularApi.ts";
import s from "@/app/ui/Main/SectionsStyles.module.css";
import sAll from "./PopularPage.module.css"
import {useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";
import type {RootState} from "@/app/model/store.ts";
import {Pagination} from "@/common/components/Pagination/Pagination.tsx";
import {MoviesList} from "@/common/components/MoviesList/MoviesList.tsx";

export const PopularPage = () => {

  const [params, setParams] = useSearchParams();
  const page = Number(params.get("page") ?? 1);

  const handlePageChange = (page: number) => {
    setParams({page: page.toString()});
  }

  const {data, isLoading} = useFetchAllPopularMoviesQuery(page);

  const favorites = useSelector((state: RootState) => state.favorites.movies);

  {
    if (isLoading || !data) return "Крутилка"
  }
  // console.log(data)

  return (
    <div>
      <div className={s.container}>
        <h2>Популярные фильмы</h2>
        <div className={`${sAll.moviesWrapper} ${sAll.allMoviesWrapper}`}>
          {data?.results?.map((movie) => {
            const isFavorite = favorites.some(item => item.id === movie.id);

            return (
              <MoviesList movie={movie} isFavorite={isFavorite} />
            )
          })}
        </div>
        <Pagination currentPage={page} totalPages={data.total_pages} onPageChange={handlePageChange} />
      </div>
    </div>
  );
};