import s from "@/pages/MoviePage/MoviePage.module.css";

type CastProps = {
  id: number;
  name: string;
  character: string;
  profilePath: string | null;
}

export const Cast = ({id, name, profilePath, character}: CastProps) => {
  return (
    <div>
      <div key={id}>
        <img className={s.movieImg} src={`https://image.tmdb.org/t/p/original${profilePath}`} alt="" />
        <p>{name}</p>
        <p>{character}</p>
      </div>
    </div>
  );
}