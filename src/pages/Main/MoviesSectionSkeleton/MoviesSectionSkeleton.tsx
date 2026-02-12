import s from "./MoviesSectionSkeleton.module.css"

export const MoviesSectionSkeleton = () => {
  return (
    <>
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className={s.skeletonCard} />
      ))}
    </>
  );
};