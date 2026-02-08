import {useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";
import type {RootState} from "@/app/providers/store/store.ts";
import {useFetchAllTopRatedMoviesQuery} from "@/entities/movie/api/topRatedApi/topRatedApi.ts";
import sAll from "@/pages/MoviesPages/PopularPage/PopularPage.module.css";
import {MoviesList} from "@/entities/ui/MoviesList/MoviesList.tsx";
import {Pagination} from "@/features/pagination/Pagination.tsx";
import s from "@/app/styles/SectionsStyles.module.css";

export const TopRatedPage = () => {
  const [params, setParams] = useSearchParams();
  const page = Number(params.get("page") ?? 1);

  const handlePageChange = (newPage: number) => {
    setParams(prev => {
      const next = new URLSearchParams(prev);
      next.set("page", newPage.toString());
      return next;
    });
  };

  const {data, isLoading} = useFetchAllTopRatedMoviesQuery(page);

  const favorites = useSelector((state: RootState) => state.favorites.movies);

  {
    if (isLoading || !data) return <div>"Крутилка"</div>
  }
  // console.log(data)
  return (
    <div className={s.container}>
      <h2>Фильмы с лучшим рейтингом</h2>
      <div className={`${sAll.moviesWrapper} ${sAll.allMoviesWrapper}`}>
        {data?.results?.map((movie) => {
          const isFavorite = favorites.some(item => item.id === movie.id);

          return (
            <MoviesList key={movie.id} movie={movie} isFavorite={isFavorite} />
          )
        })}
      </div>
      <Pagination currentPage={page} totalPages={data.total_pages} onPageChange={handlePageChange} />
    </div>
  );
};