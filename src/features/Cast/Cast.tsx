import s from "./Cast.module.css";
import noImage from "@/shared/assets/no-image.png";

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
        <img className={s.movieImg} src={profilePath ? `https://image.tmdb.org/t/p/original${profilePath}` : noImage} alt="" />
      </div>
      <p>{name}</p>
      <p>{character}</p>
    </div>
  );
}