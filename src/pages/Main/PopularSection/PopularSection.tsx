import {useFetchPopularMoviesQuery} from "@/entities/movie/api/popularApi/popularApi.ts";
import s from "@/app/styles/SectionsStyles.module.css";
import {useSelector} from "react-redux";
import type {RootState} from "@/app/providers/store/store.ts";
import {MoviesList} from "@/entities/ui/MoviesList/MoviesList.tsx";
import {ShowMoreBtn} from "@/widgets/ShowMoreBtn/ShowMoreBtn.tsx";

export const PopularSection = () => {

  const {data, isLoading} = useFetchPopularMoviesQuery();

  const favorites = useSelector((state: RootState) => state.favorites.movies);

  {
    if (isLoading || !data) return "Крутилка"
  }
  // console.log(data)

  return (
    <div className={s.section}>
      <div className={s.container}>
        <h2>Popular Movies</h2>
        <ShowMoreBtn path={"popular"} />
        <div className={s.moviesWrapper}>
          {data?.results?.map((movie) => {

            const isFavorite = favorites.some(item => item.id === movie.id);

            return (
              <MoviesList key={movie.id} movie={movie} isFavorite={isFavorite} />
            )
          })}
        </div>
      </div>
    </div>
  );
};