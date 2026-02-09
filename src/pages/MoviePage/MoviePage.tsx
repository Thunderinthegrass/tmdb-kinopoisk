import {useParams} from "react-router-dom";
import {useGetMovieQuery} from "@/entities/movie/api/searchApi/searchApi.ts";
import s from "./MoviePage.module.css"
import {RatingBadge} from "@/entities/ui/RatingBadge/RatingBadge.tsx";
// import noImage from "@/shared/assets/no-image.png";

export const MoviePage = () => {
  const { id } = useParams();
  const movieId = Number(id);
  const { data, isLoading } = useGetMovieQuery(movieId, { skip: !movieId })
  console.log(data)

  if (isLoading || !data) return <p>Загрузка...</p>;

  const cast = data.credits.cast.slice(0, 6);

  return (
    <div className={s.movie}>
      <div className={s.container}>
        <div className={s.movieContent}>
          <div className={s.movieImgWrapper}>
            <img src={`https://image.tmdb.org/t/p/original${data.poster_path}`} className={s.movieImg}
                 alt={data.title} />
          </div>
          <div className={s.movieInfo}>
            <h2 className={s.movieTitle}>{data.title}</h2>
            <div className={s.movieMeta}>
              <p>{data.year}</p>
              <RatingBadge rating={data.vote_average} />
              <p>
                {data.runtime}
              </p>
            </div>
            <p className={s.movieOverview}>
              {data.overview}
            </p>
            <ul className={s.genresList}>
              {data.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={s.cast}>
          <h2>В фильме снимались:</h2>
          {cast.map((actor) => (
            <div key={actor.id}>
              <p>{actor.name}</p>
              <img className={s.movieImg} src={`https://image.tmdb.org/t/p/original${actor.profile_path}`} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};