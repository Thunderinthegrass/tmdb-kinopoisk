import {useGetSimilarMoviesQuery} from "@/entities/movie/api/searchApi/searchApi.ts";
import s from "./Similar.module.css"
import {MoviesList} from "@/entities/ui/MoviesList/MoviesList.tsx";
import {useSelector} from "react-redux";
import type {RootState} from "@/app/providers/store/store.ts";

type SimilarProps = {
  movieId: number;
}

export const Similar = ({movieId}: SimilarProps) => {

  const favorites = useSelector((state: RootState) => state.favorites.movies);

  const {data, isLoading} = useGetSimilarMoviesQuery(movieId);

  if (isLoading || !data) return <div>...Ждите!!!</div>

  console.log(data)

  if (!data?.results?.length) return null;

  return (
    <div className={s.similar}>
      <h2 className={s.similarTitle}>Похожие фильмы:</h2>
      <div className={s.similarInner}>
        {
          data.results.map((movie) => {

            const isFavorite = favorites.some(item => item.id === movie.id);

            return <MoviesList key={movie.id} movie={movie} isFavorite={isFavorite} />
          })
        }
      </div>
    </div>
  );
};