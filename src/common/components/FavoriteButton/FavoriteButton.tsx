import s from "@/app/ui/Main/SectionsStyles.module.css";
import heartIconActive from "@/assets/heart-icon-active.svg";
import heartIcon from "@/assets/heart-icon.svg";
import type {Movie} from "@/features/api/popularApi/popularApi.types.ts";
import {addToFavorites, removeFromFavorites} from "@/app/model/favoritesSlice.ts";
import {useDispatch} from "react-redux";

type FavoriteButtonProps = {
  isFavorite: boolean;
  movie: Movie;
};

export const FavoriteButton = ({isFavorite, movie}: FavoriteButtonProps) => {
  const dispatch = useDispatch();

  const addtoFavoritesHandler = (isFavorite: boolean, movie: Movie) => {
    // isFavorite ? dispatch(removeFromFavorites(movie)) : dispatch(addToFavorites(movie));
    if (isFavorite) {
      dispatch(removeFromFavorites(movie))
    }
    else {
      dispatch(addToFavorites(movie))
    }
  }

  return (
    <button className={isFavorite ? `${s.favoritesBtn} ${s.favoritesBtnActive}` : s.favoritesBtn} onClick={() => addtoFavoritesHandler(isFavorite, movie)}>
      <img src={isFavorite ? heartIconActive : heartIcon }
           alt="" />
    </button>
  );
};