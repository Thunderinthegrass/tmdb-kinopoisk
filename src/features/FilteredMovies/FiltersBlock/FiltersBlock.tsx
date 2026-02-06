import s from "./FiltersBlock.module.css";
import {Genres} from "@/features/FilteredMovies/Genres/Genres.tsx";

export const FiltersBlock = () => {
  return (
    <div className={s.filtersBlock}>
      <Genres />
    </div>
  );
};