import {useSelector} from "react-redux";
import type {RootState} from "@/app/providers/store/store.ts";
import {initialFiltersState} from "@/entities/movie/model/filtersSlice";

export const useFiltersClean = () => {
  return useSelector((state: RootState) => {
    const filters = state.filters;

    return (
      filters.sortBy === initialFiltersState.sortBy &&
      filters.page === initialFiltersState.page &&
      filters.rating[0] === initialFiltersState.rating[0] &&
      filters.rating[1] === initialFiltersState.rating[1] &&
      filters.genres.length === 0
    )
  });
}