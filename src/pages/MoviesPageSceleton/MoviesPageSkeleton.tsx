import s from "./MoviesPageSkeleton.module.css"

export const MoviesPageSkeleton = () => {
  return (
    <>
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className={s.skeletonCard} />
      ))}
    </>
  );
};