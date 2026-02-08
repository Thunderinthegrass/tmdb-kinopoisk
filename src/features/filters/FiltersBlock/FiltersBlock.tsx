import s from "./FiltersBlock.module.css";
import {Genres} from "@/features/filters/Genres/Genres.tsx";
import {RatingFilter} from "@/features/filters/RatingFilter/RatingFilter.tsx";
import {SortDropdown} from "@/features/filters/SortFilter/SortDropdown.tsx";

export const FiltersBlock = () => {
  return (
    <div className={s.filtersBlock}>
      <RatingFilter />
      <SortDropdown />
      <Genres />
    </div>
  );
};