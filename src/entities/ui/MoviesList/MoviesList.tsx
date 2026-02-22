// import s from "./MoviesList.module.css";
// import { Link } from "react-router-dom";
// import noImage from "@/shared/assets/no-image.png";
// import { RatingBadge } from "@/entities/ui/RatingBadge/RatingBadge";
// import { FavoriteButton } from "@/features/FavoriteButton/FavoriteButton";
// import type { Movie, FavoriteMovie } from "@/entities/movie/model/schema";
//
// type MoviesListProps = {
//   movie: Movie | FavoriteMovie;
//   isFavorite: boolean;
// };
//
// // type guard
// const isMovie = (movie: Movie | FavoriteMovie): movie is Movie => {
//   return (movie as Movie).release_date !== undefined;
// };
//
// export const MoviesList = ({ movie, isFavorite }: MoviesListProps) => {
//   const poster = isMovie(movie) ? movie.poster_path : movie.poster_path;
//   const rating = isMovie(movie) ? movie.vote_average : movie.vote_average;
//   const title = movie.title;
//
//   // FavoriteButton требует полный Movie
//   const movieForButton = isMovie(movie)
//     ? movie
//     : ({
//       id: movie.id,
//       title: movie.title,
//       poster_path: movie.poster_path,
//       vote_average: movie.vote_average,
//       adult: false,
//       backdrop_path: null,
//       original_language: "en",
//       original_title: movie.title,
//       overview: "",
//       popularity: 0,
//       release_date: "",
//       video: false,
//       vote_count: 0,
//     } as Movie);
//
//   return (
//     <div className={s.movie}>
//       <Link to={`/movie/${movie.id}`} className={s.movieLink}>
//         <div className={s.imgWrapper}>
//           {poster ? (
//             <img className={s.movieImg} src={`https://image.tmdb.org/t/p/original${poster}`} alt="" />
//           ) : (
//             <img className={s.movieImg} src={noImage} alt="" />
//           )}
//         </div>
//         <h3 className={s.movieTitle}>{title}</h3>
//         <div className={s.ratingBadgeWrapper}>
//           <RatingBadge rating={rating} />
//         </div>
//       </Link>
//       <FavoriteButton className={s.favoritesBtn} isFavorite={isFavorite} movie={movieForButton} />
//     </div>
//   );
// };

import s from "./MoviesList.module.css";
import { Link } from "react-router-dom";
import noImage from "@/shared/assets/no-image.png";
import { RatingBadge } from "@/entities/ui/RatingBadge/RatingBadge";
import { FavoriteButton } from "@/features/FavoriteButton/FavoriteButton";
import type { Movie, FavoriteMovie } from "@/entities/movie/model/schema";

type MoviesListProps = {
  movie: Movie | FavoriteMovie;
  isFavorite: boolean;
};

export const MoviesList = ({ movie, isFavorite }: MoviesListProps) => {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : noImage;

  return (
    <div className={s.movie}>
      <Link to={`/movie/${movie.id}`} className={s.movieLink}>
        <div className={s.imgWrapper}>
          <img
            className={s.movieImg}
            src={posterUrl}
            alt={movie.title}
            loading="lazy"
          />
        </div>

        <h3 className={s.movieTitle}>{movie.title}</h3>

        <div className={s.ratingBadgeWrapper}>
          <RatingBadge rating={movie.vote_average} />
        </div>
      </Link>

      <FavoriteButton
        className={s.favoritesBtn}
        isFavorite={isFavorite}
        movie={{
          id: movie.id,
          title: movie.title,
          poster_path: movie.poster_path,
          vote_average: movie.vote_average,
        }}
      />
    </div>
  );
};