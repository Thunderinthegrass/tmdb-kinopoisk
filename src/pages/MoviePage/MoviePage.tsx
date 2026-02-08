import {useParams} from "react-router-dom";
import {useGetMovieQuery} from "@/entities/movie/api/searchApi/searchApi.ts";
import s from "./MoviePage.module.css"
import {RatingBadge} from "@/entities/ui/RatingBadge/RatingBadge.tsx";

export const MoviePage = () => {
  const { id } = useParams();
  const movieId = Number(id);
  const { data, isLoading } = useGetMovieQuery(movieId, { skip: !movieId })
  console.log(data)

  if (isLoading) return <p>Загрузка...</p>;

  return (
    <div className={s.movie}>
      <div className={s.container}>
        <div className={s.movieContent}>
          <div className={s.movieImgWrapper}>
            <img src={`https://image.tmdb.org/t/p/original${data?.poster_path}`} className={s.movieImg}
                 alt={data?.title} />
          </div>
          <div className={s.movieInfo}>
            <h2 className={s.movieTitle}>{data?.title}</h2>
            <div className={s.movieMeta}>
              <p>{data?.year}</p>
            </div>
            <RatingBadge rating={data?.vote_average} />
            <p>
              {data?.runtime}
            </p>
            <p className={s.movieOverview}>
              {data?.overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};