import {useFetchTopRatedMoviesQuery} from "@/features/api/topRatedApi/topRatedApi.ts";
import s from "@/app/ui/Main/SectionsStyles.module.css";
import { useSelector } from "react-redux";
import type {RootState} from "@/app/model/store.ts";
import {ShowMoreBtn} from "@/common/components/ShowMoreBtn/ShowMoreBtn.tsx";
import {MoviesList} from "@/common/components/MoviesList/MoviesList.tsx";

export const TopRatedSection = () => {

  const {data, isLoading} = useFetchTopRatedMoviesQuery()

  const favorites = useSelector((state: RootState) => state.favorites.movies)
  // console.log("favorites - ",favorites)

  if (isLoading || !data) {
    return <div>'Ждите...'</div>
  }
  // console.log(data)

  return (
    <div>
      <div className={s.section}>
        <div className={s.container}>
          <h2>Top Rated Movies</h2>
          <ShowMoreBtn path={"top-rated"} />
          <div className={s.moviesWrapper}>
            {data?.results?.map((movie) => {

              const isFavorite = favorites.some(item => item.id === movie.id);
              // console.log(isFavorite)

              return (
                <MoviesList key={movie.id} movie={movie} isFavorite={isFavorite} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};