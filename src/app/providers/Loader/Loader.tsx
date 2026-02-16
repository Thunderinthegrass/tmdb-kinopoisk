import s from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={s.loader}>
      <div className={`${s.item} ${s.item1}`}></div>
      <div className={`${s.item} ${s.item2}`}></div>
    </div>
  );
};