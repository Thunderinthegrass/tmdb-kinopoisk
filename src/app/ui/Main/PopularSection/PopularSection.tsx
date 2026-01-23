import s from "./PopularSection.module.css"
import {useFetchPopularMoviesQuery} from "@/features/api/popularApi/popularApi.ts";
import noImage from "@/assets/no-image.png";
import {Link} from "react-router";

export const PopularSection = () => {

  const {data, isLoading} = useFetchPopularMoviesQuery();
  {
    if (isLoading || !data) return "Крутилка"
  }
  console.log(data)

  return (
    <div className={s.popularSection}>
      <div className={s.container}>
        <h2>Popular Movies</h2>
        <div className={s.popularMoviesWrapper}>
          {data?.results?.map((movie) => (
            <Link key={movie.id} to={`/movie/${movie.id}`} className={s.movie}>
              <div className={s.imgWrapper}>
                {movie.poster_path ? (
                  <img className={s.movieImg} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
                ) : (
                  <img className={s.movieImg} src={noImage} alt="" />
                )}
              </div>
              <p className={s.movieTitle}>{movie.original_title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};