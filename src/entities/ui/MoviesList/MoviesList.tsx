import s from "./MoviesList.module.css"
import {Link} from "react-router-dom";
import noImage from "@/shared/assets/no-image.png";
import {RatingBadge} from "@/entities/ui/RatingBadge/RatingBadge.tsx";
import {FavoriteButton} from "@/features/FavoriteButton/FavoriteButton.tsx";
import type {Movie} from "@/entities/movie/model/types.ts";

type MoviesListProps = {
  movie: Movie;
  isFavorite: boolean;
};

export const MoviesList = ({movie, isFavorite}: MoviesListProps) => {
  return (
    <div className={s.movie} key={movie.id}>
      <Link to={`/movie/${movie.id}`} className={s.movieLink}>
        <div className={s.imgWrapper}>
          {movie.poster_path ? (
            <img className={s.movieImg} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
          ) : (
            <img className={s.movieImg} src={noImage} alt="" />
          )}
        </div>
        <h3 className={s.movieTitle}>{movie.title}</h3>
        <div className={s.ratingBadgeWrapper}>
          <RatingBadge rating={movie.vote_average} />
        </div>
      </Link>
      <FavoriteButton className={s.favoritesBtn} isFavorite={isFavorite} movie={movie} />
    </div>
  )
};