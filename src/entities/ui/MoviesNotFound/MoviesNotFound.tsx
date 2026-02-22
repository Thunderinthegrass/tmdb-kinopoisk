import s from "./MoviesNotFound.module.css";

export const MoviesNotFound = () => {
  return (
    <div className={s.container}>
      <h2>Такой категории нет</h2>
      <p>Выберите из тех, что есть</p>
    </div>
  );
}