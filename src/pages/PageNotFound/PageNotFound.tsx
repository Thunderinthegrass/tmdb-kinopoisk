import s from "./PageNotFound.module.css"
import {Link} from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div className={s.pageNotFound}>
      <p className={s.fourZeroFour}>404</p>
      <p>Страница такая не найдена нами</p>
      <Link to={"/"} className={s.toMainLink}>На главную</Link>
    </div>
  );
};