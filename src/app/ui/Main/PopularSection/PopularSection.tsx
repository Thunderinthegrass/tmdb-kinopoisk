import {useFetchPopularMoviesQuery} from "@/features/api/popularApi/popularApi.ts";
import s from "@/app/ui/Main/SectionsStyles.module.css";
import {useSelector} from "react-redux";
import type {RootState} from "@/app/model/store.ts";
import {MoviesList} from "@/common/components/MoviesList/MoviesList.tsx";
import {ShowMoreBtn} from "@/common/components/ShowMoreBtn/ShowMoreBtn.tsx";

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