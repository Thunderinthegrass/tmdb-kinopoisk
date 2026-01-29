import {useParams} from "react-router-dom";
import {useGetMovieQuery} from "@/features/api/searchApi/searchApi.ts";
import s from "./Movie.module.css"

export const Movie = () => {
  const { id } = useParams();
  const movieId = Number(id);
  const { data, isLoading } = useGetMovieQuery(movieId, { skip: !movieId })
  console.log(data)

  if (isLoading) return <p>Загрузка...</p>;

  return (
    <div className={s.movie}>
      <div className={s.container}></div>
      <div className={s.movieImgWrapper}>
        <img src={`https://image.tmdb.org/t/p/original${data?.poster_path}`} className={s.movieImg}
             alt="" />
      </div>
      <div className={s.movieInfo}>
        {/*<h2 className={s.movieTitle}>{data.original_title}</h2>*/}
        <h2 className={s.movieTitle}>{data?.title}</h2>
        <p className={s.movieOverview}>
          {data?.overview}
        </p>
      </div>
    </div>
  );
};