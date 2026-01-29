import {useFetchTopRatedMoviesQuery} from "@/features/api/topRatedApi/topRatedApi.ts";
import s from "@/app/ui/Main/SectionsStyles.module.css";
import {Link} from "react-router-dom";
import noImage from "@/assets/no-image.png";
import {RatingBadge} from "@/common/components/RatingBadge/RatingBadge.tsx";
import { useSelector } from "react-redux";
import type {RootState} from "@/app/model/store.ts";
import {FavoriteButton} from "@/common/components/FavoriteButton/FavoriteButton.tsx";

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
          <div className={s.moviesWrapper}>
            {data?.results?.map((movie) => {

              const isFavorite = favorites.some(item => item.id === movie.id);
              // console.log(isFavorite)

              return (
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
                  <FavoriteButton isFavorite={isFavorite} movie={movie} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};