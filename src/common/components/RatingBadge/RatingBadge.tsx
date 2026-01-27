import s from "@/app/ui/Main/SectionsStyles.module.css";

type RatingBadgeProps = {
  rating: number;
}

export const RatingBadge = ({rating}: RatingBadgeProps) => {

  rating = Math.round(rating * 10) / 10;
  const isPositiveRating = rating > 7 ? s.positiveRating : s.negativeRating;

  return (
    <span className={`${s.ratingBadge} ${isPositiveRating}`}>{rating}</span>
  );
};