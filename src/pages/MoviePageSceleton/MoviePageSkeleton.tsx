import s from "../MoviePage/MoviePage.module.css"
import {SimilarSkeleton} from "@/features/Similar/SimilarSkeleton.tsx";

export const MoviePageSkeleton = () => {
  return (
    <div className={s.movie}>
      <div className={s.container}>
        <div className={s.movieContent}>
          <div className={`${s.movieImg} ${s.skeleton}`} />

          <div className={s.movieInfo}>
            <div className={`${s.skeleton} ${s.skeletonTitle}`} />
            <div className={`${s.skeleton} ${s.skeletonMeta}`} />
            <div className={`${s.skeleton} ${s.skeletonText}`} />
            <div className={`${s.skeleton} ${s.skeletonText}`} />

            <div className={s.genres}>
              <div className={`${s.skeleton} ${s.skeletonSubtitle}`} />
              <div className={s.genresList}>
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className={`${s.skeleton} ${s.skeletonTag}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={`${s.skeleton} ${s.sceletonCastTitle}`} />
        <div className={s.castBlock}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className={`${s.skeleton} ${s.skeletonCard}`} />
          ))}
        </div>
        <SimilarSkeleton />
      </div>
    </div>
  );
};