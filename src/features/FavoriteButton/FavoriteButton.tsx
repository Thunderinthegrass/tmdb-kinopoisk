// import s from "@/app/styles/SectionsStyles.module.css";
import s from "@/entities/ui/MoviesList/MoviesList.module.css";
import heartIconActive from "@/shared/assets/heart-icon-active.svg";
import heartIcon from "@/shared/assets/heart-icon.svg";
import type {Movie} from "@/entities/movie/model/types.ts";
import {addToFavorites, removeFromFavorites} from "@/entities/movie/model/favoritesSlice.ts";
import {useDispatch} from "react-redux";

type FavoriteButtonProps = {
  isFavorite: boolean;
  movie: Movie;
  className?: string;
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