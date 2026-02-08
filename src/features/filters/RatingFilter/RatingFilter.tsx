import {useState, useEffect, useCallback, useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRating } from "@/entities/movie/model/filtersSlice.ts";
import type { RootState } from "@/app/providers/store/store.ts";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import s from "./RatingFilter.module.css";

type RatingRange = [number, number];

export const RatingFilter = () => {
  const dispatch = useDispatch();
  const { rating } = useSelector((state: RootState) => state.filters);

  const [localRating, setLocalRating] = useState<RatingRange>(rating);


  const updateRatingInRedux = useCallback((values: RatingRange) => {
    dispatch(setRating(values));
  }, [dispatch]);


  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleSliderChange = (values: number | number[]) => {
    if (!Array.isArray(values) || values.length !== 2) return;

    const newValues: RatingRange = [values[0], values[1]];
    setLocalRating(newValues);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      updateRatingInRedux(newValues);
    }, 200);
  };

  useEffect(() => {
    setLocalRating(rating);
  }, [rating]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className={s.ratingFilter}>
      <div className={s.ratingHeader}>
        <h3 className={s.ratingTitle}>Рейтинг</h3>
        <span className={s.ratingValue}>
          {localRating?.[0]?.toFixed(1)} - {localRating[1].toFixed(1)}
        </span>
      </div>

      <div className={s.sliderWrapper}>
        <Slider
          range
          min={0}
          max={10}
          step={0.1}
          value={localRating}
          onChange={handleSliderChange}
        />
      </div>
    </div>
  );
};