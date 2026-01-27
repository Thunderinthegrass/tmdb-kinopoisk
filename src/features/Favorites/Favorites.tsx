import {useSelector} from "react-redux";
import {Link} from "react-router";
import s from "@/app/ui/Main/SectionsStyles.module.css";
import noImage from "@/assets/no-image.png";
import {RatingBadge} from "@/common/components/RatingBadge/RatingBadge.tsx";

export const Favorites = () => {

  const favorites = useSelector(state => state.favorites.movies)

  return (
    <div className={s.container}>
      <div className={s.moviesWrapper}>
        {favorites.map(movie => (
          <div key={movie.id} className={s.movie}>
            <Link key={movie.id} to={`/movie/${movie.id}`} className={s.movieLink}>
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
          </div>
        ))}
      </div>
    </div>
  );
};