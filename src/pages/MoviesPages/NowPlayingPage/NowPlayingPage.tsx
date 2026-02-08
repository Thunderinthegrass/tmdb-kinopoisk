import {useSearchParams} from "react-router-dom";
import {useFetchAllNowPlayingMoviesQuery} from "@/entities/movie/api/nowPlayingApi/nowPlayingApi.ts";
import {useSelector} from "react-redux";
import type {RootState} from "@/app/providers/store/store.ts";
import s from "@/app/styles/SectionsStyles.module.css";
import sAll from "@/pages/MoviesPages/PopularPage/PopularPage.module.css";
import {MoviesList} from "@/entities/ui/MoviesList/MoviesList.tsx";
import {Pagination} from "@/features/pagination/Pagination.tsx";

export const NowPlayingPage = () => {
  const [params, setParams] = useSearchParams();
  const page = Number(params.get("page") ?? 1);

  const handlePageChange = (page: number) => {
    setParams({page: page.toString()});
  }

  const {data, isLoading} = useFetchAllNowPlayingMoviesQuery(page);

  const favorites = useSelector((state: RootState) => state.favorites.movies);

  {
    if (isLoading || !data) return "Крутилка"
  }
  // console.log(data)

  return (
    <div className={s.container}>
      <h2>Фильмы, которые сейчас показывают</h2>
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