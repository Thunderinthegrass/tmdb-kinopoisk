import {Link} from "react-router-dom";
import s from "./ShowMoreBtn.module.css";

interface ShowMoreBtnProps {
  path: string;
}

export const ShowMoreBtn = ({path}: ShowMoreBtnProps) => {
  return (
    <Link
      to={`/movies/${path}`}
      className={s.allMoviesLink}
    >
      Показать больше
    </Link>
  );
};