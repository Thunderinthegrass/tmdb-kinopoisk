import s from "./FiltersBlock.module.css";
import {Genres} from "@/features/filters/Genres/Genres.tsx";
import {RatingFilter} from "@/features/filters/RatingFilter/RatingFilter.tsx";
import {SortDropdown} from "@/features/filters/SortFilter/SortDropdown.tsx";
import {ResetFiltersBtn} from "@/features/filters/ResetFiltersBtn/ResetFiltersBtn.tsx";

export const FiltersBlock = () => {
  return (
    <div className={s.filtersBlock}>
      <RatingFilter />
      <SortDropdown />
      <Genres />
      <ResetFiltersBtn />
    </div>
  );
};