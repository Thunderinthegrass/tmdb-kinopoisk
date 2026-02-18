import s from "./Similar.module.css"



export const SimilarSkeleton = () => {

  return (
    <div className={s.similar}>
      <div className={`${s.similarTitleSceleton} ${s.sceleton}`}></div>
      <div className={s.similarInner}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className={`${s.skeletonCard} ${s.sceleton}`} />
        ))}
      </div>
    </div>
  );
};