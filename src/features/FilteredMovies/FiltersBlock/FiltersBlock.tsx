import s from "./FiltersBlock.module.css";
import {Genres} from "@/features/FilteredMovies/Genres/Genres.tsx";
import {RatingFilter} from "@/features/FilteredMovies/RatingFilter/RatingFilter.tsx";
import {SortDropdown} from "@/features/FilteredMovies/SortFilter/SortDropdown.tsx";

export const FiltersBlock = () => {
  return (
    <div className={s.filtersBlock}>
      <RatingFilter />
      <SortDropdown />
      <Genres />
    </div>
  );
};