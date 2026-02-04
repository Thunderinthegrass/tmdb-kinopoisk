import s from "@/app/ui/Main/SectionsStyles.module.css";
import {Link} from "react-router-dom";
import noImage from "@/assets/no-image.png";
import {RatingBadge} from "@/common/components/RatingBadge/RatingBadge.tsx";
import {FavoriteButton} from "@/common/components/FavoriteButton/FavoriteButton.tsx";
import type {Movie} from "@/features/api/popularApi/popularApi.types.ts";

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
        <RatingBadge rating={movie.vote_average} />
      </Link>
      <FavoriteButton isFavorite={isFavorite} movie={movie} />
    </div>
  )
};