import {useSelector} from "react-redux";
import s from "./Favorites.module.css";
import type {RootState} from "@/app/providers/store/store.ts";
import {MoviesList} from "@/entities/ui/MoviesList/MoviesList.tsx";

export const Favorites = () => {

  const favorites = useSelector((state: RootState) => state.favorites.movies);

  return (
    <div className={s.container}>
      <div className={s.moviesWrapper}>
        {favorites.map(movie => {
          const isFavorite = favorites.some(item => item.id === movie.id);

          return <MoviesList movie={movie}
                      isFavorite={isFavorite} />
        })}
      </div>
    </div>
  );
};