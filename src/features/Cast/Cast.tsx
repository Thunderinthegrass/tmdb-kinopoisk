import s from "./Cast.module.css";

type CastProps = {
  id: number;
  name: string;
  character: string;
  profilePath: string | null;
}

export const Cast = ({id, name, profilePath, character}: CastProps) => {
  return (
    <div className={s.castItem} key={id}>
      <div className={s.movieImgWrapper}>
        <img className={s.movieImg} src={`https://image.tmdb.org/t/p/original${profilePath}`} alt="" />
      </div>
      <p>{name}</p>
      <p>{character}</p>
    </div>
  );
}