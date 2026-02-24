import s from "./RatingBadge.module.css"

type RatingBadgeProps = {
  rating: number;
}

export const RatingBadge = ({rating}: RatingBadgeProps) => {

  const ratingRound = Math.round(rating * 10) / 10;
  const classRating = rating > 7 ? s.positiveRating : rating > 5 ? s.middleRating : s.negativeRating;

  return (
    <span className={`${s.ratingBadge} ${classRating}`}>{ratingRound}</span>
  );
};