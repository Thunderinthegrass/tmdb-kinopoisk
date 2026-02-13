import {useDispatch} from "react-redux";
import {resetFilters} from "@/entities/movie/model/filtersSlice.ts";
import s from "./ResetFilters.module.css";
import {useFiltersClean} from "@/entities/movie/model/selectors.ts";

export const ResetFiltersBtn = () => {

  const dispatch = useDispatch();

  const isClean = useFiltersClean();

  return (
    <button disabled={isClean} className={s.resetFiltersBtn} onClick={() => dispatch(resetFilters())}>
      Сбросить фильтры
    </button>
  );
};