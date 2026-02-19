import s from "@/entities/ui/MoviesList/MoviesList.module.css";
import heartIconActive from "@/shared/assets/heart-icon-active.svg";
import heartIcon from "@/shared/assets/heart-icon.svg";
import { addToFavorites, removeFromFavorites } from "@/entities/movie/model/favoritesSlice";
import { useDispatch } from "react-redux";
import type { Movie } from "@/entities/movie/model/schema";

type FavoriteButtonProps = {
  isFavorite: boolean;
  movie: Movie;
  className?: string;
};

export const FavoriteButton = ({ isFavorite, movie }: FavoriteButtonProps) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (isFavorite) dispatch(removeFromFavorites(movie));
    else dispatch(addToFavorites(movie));
  };

  return (
    <button
      className={`${s.favoritesBtn} ${isFavorite ? s.favoritesBtnActive : ""}`}
      onClick={handleClick}
    >
      <img src={isFavorite ? heartIconActive : heartIcon} alt="" />
    </button>
  );
};