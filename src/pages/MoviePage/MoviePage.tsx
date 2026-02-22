import { useNavigate, useParams} from "react-router-dom";
import {useGetMovieQuery} from "@/entities/movie/api/searchApi/searchApi.ts";
import s from "./MoviePage.module.css"
import noImage from "@/shared/assets/no-image.png";
import {RatingBadge} from "@/entities/ui/RatingBadge/RatingBadge.tsx";
import {Cast} from "@/features/Cast/Cast.tsx";
import {Similar} from "@/features/Similar/Similar.tsx";
import {formatRuntime} from "@/shared/utils/formatRuntime.ts";
import {MoviePageSkeleton} from "@/pages/MoviePageSceleton/MoviePageSkeleton.tsx";

export const MoviePage = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const movieId = Number(id);
  const { data, isLoading } = useGetMovieQuery(movieId, { skip: !movieId })
  // console.log(data)

  if (Number.isNaN(movieId)) {
    return <p>Такой фильм не найден</p>;
  }

  if (isLoading || !data) return <MoviePageSkeleton />;


  const cast = data.credits?.cast.slice(0, 6);

  const posterUrl = data.poster_path ? `https://image.tmdb.org/t/p/original${data.poster_path}` : noImage;

  return (
    <div className={s.movie}>
      <div className={s.container}>
        <button
          className={s.backBtn}
          onClick={() => window.history.length > 1 ?
                    navigate(-1) :
                    navigate("/")
                  }
        >
          Назад
        </button>
        <div className={s.movieContent}>
          <div className={s.movieImgWrapper}>
            <img src={posterUrl} className={s.movieImg}
                 alt={data.title} />
          </div>
          <div className={s.movieInfo}>
            <h2 className={s.movieTitle}>{data.title}</h2>
            <div className={s.movieMeta}>
              <p>Год выпуска: {data.year}</p>
              <RatingBadge rating={data.vote_average} />
              <p>
                Продолжительность: {formatRuntime(data.runtime)}
              </p>
            </div>
            <p className={s.movieOverview}>
              {data.overview}
            </p>
            <div className={s.genres}>
              <h2 className={s.genresTitle}>Жанры</h2>
              <ul className={s.genresList}>
                {data.genres?.map((genre) => (
                  <li key={genre.id} className={s.genresItem}>{genre.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {cast?.length ? (<div className={s.cast}>
          <h2 className={s.castTitle}>В фильме снимались:</h2>
          <div className={s.castBlock}>
            {cast?.map((actor) => (
              <Cast key={actor.id}
                    id={actor.id}
                    name={actor.name}
                    character={actor.character}
                    profilePath={actor.profile_path} />
            ))}
          </div>
        </div>) : null}
        <Similar movieId={movieId} />
      </div>
    </div>
  );
};