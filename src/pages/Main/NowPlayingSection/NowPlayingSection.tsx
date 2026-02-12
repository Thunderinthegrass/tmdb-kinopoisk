import s from "@/app/styles/SectionsStyles.module.css";
import {useSelector} from "react-redux";
import type {RootState} from "@/app/providers/store/store.ts";
import {useFetchNowPlayingMoviesQuery} from "@/entities/movie/api/nowPlayingApi/nowPlayingApi.ts";
import {ShowMoreBtn} from "@/widgets/ShowMoreBtn/ShowMoreBtn.tsx";
import {MoviesList} from "@/entities/ui/MoviesList/MoviesList.tsx";
import {MoviesSectionSkeleton} from "@/pages/Main/MoviesSectionSkeleton/MoviesSectionSkeleton.tsx";

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
          {isLoading ? (
            <MoviesSectionSkeleton />
          ) : (
            data?.results?.map((movie) => {

              const isFavorite = favorites.some(item => item.id === movie.id);

              return (
                <MoviesList key={movie.id} movie={movie} isFavorite={isFavorite} />
              )
            })
          )}
        </div>
      </div>
    </div>
  );
};