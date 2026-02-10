import {useGetSimilarMoviesQuery} from "@/entities/movie/api/searchApi/searchApi.ts";
// import s from "@/entities/ui/MoviesList/MoviesList.module.css";
import s from "./Similar.module.css"
import {MoviesList} from "@/entities/ui/MoviesList/MoviesList.tsx";
import {useSelector} from "react-redux";
import type {RootState} from "@/app/providers/store/store.ts";
// import type {Movie} from "@/entities/movie/model/types.ts";

type SimilarProps = {
  movieId: number;
}

export const Similar = ({movieId}: SimilarProps) => {

  const favorites = useSelector((state: RootState) => state.favorites.movies);

  const {data, isLoading} = useGetSimilarMoviesQuery(movieId);

  if (isLoading || !data) return <div>...Ждите!!!</div>

  console.log(data)

  return (
    <div className={s.similar}>
      {
        data.results.map((movie) => {

          const isFavorite = favorites.some(item => item.id === movie.id);

          return <MoviesList key={movie.id} movie={movie} isFavorite={isFavorite} />
        })
      }
    </div>
  );
};