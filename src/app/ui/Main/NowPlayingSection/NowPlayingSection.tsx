import s from "@/app/ui/Main/SectionsStyles.module.css";
import {useSelector} from "react-redux";
import type {RootState} from "@/app/model/store.ts";
import {useFetchNowPlayingMoviesQuery} from "@/features/api/nowPlayingApi/nowPlayingApi.ts";
import {ShowMoreBtn} from "@/common/components/ShowMoreBtn/ShowMoreBtn.tsx";
import {MoviesList} from "@/common/components/MoviesList/MoviesList.tsx";

export const NowPlayingSection = () => {

  const {data, isLoading} = useFetchNowPlayingMoviesQuery();

  const favorites = useSelector((state: RootState) => state.favorites.movies);

  {
    if (isLoading || !data) return "Крутилка"
  }
  // console.log(data)

  return (
    <div className={s.section}>
      <div className={s.container}>
        <h2>Now Playing Movies</h2>
        <ShowMoreBtn path={"now-playing"} />
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