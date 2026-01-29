import {useFetchUpcomingMoviesQuery} from "@/features/api/upcomingApi/upcomingApi.ts";
import s from "@/app/ui/Main/SectionsStyles.module.css";
import noImage from "@/assets/no-image.png";
import {Link} from "react-router-dom";
import {RatingBadge} from "@/common/components/RatingBadge/RatingBadge.tsx";
import {useSelector} from "react-redux";
import type {RootState} from "@/app/model/store.ts";
import {FavoriteButton} from "@/common/components/FavoriteButton/FavoriteButton.tsx";

export const UpcomingSection = () => {

  const { data, isLoading } = useFetchUpcomingMoviesQuery()

  const favorites = useSelector((state: RootState) => state.favorites.movies)

  if (isLoading) {
    return <div>Загрузка происходит...</div>;
  }

  console.log(data)
  return (
    <div className={s.section}>
      <div className={s.container}>
        <h2>Upcoming Movies</h2>
        <div className={s.moviesWrapper}>
          {
            data?.results?.map((movie) => {
              const isFavorite = favorites.some(item => item.id === movie.id);

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
            })
          }
        </div>
      </div>
    </div>
  );
};