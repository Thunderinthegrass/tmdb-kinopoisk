import {useGetGenresQuery} from "@/features/api/filtersApi/filtersApi.ts";
import s from "./Genres.module.css"
import {useDispatch, useSelector} from "react-redux";
import {toggleGenre} from "@/app/model/filtersSlice.ts";
import type {RootState} from "@/app/model/store.ts";

export const Genres = () => {

  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.filters);

  const {data, isLoading} = useGetGenresQuery();

  if (isLoading) {
    return <div>Загрузка</div>
  }

  // console.log(data);
  // console.log(filters)

  return (
    <div className={s.genresBlock}>

      {data.genres.map((genre, index) => {

        const isActive = filters.genres.includes(genre.id);
        console.log(isActive);

        return (
          <button key={genre.id}
                  className={isActive ? `${s.genreBtn} ${s.genreBtnActive}` : s.genreBtn}
                  onClick={() => dispatch(toggleGenre(genre.id))}>{genre.name}
          </button>
        )
      })}
    </div>
  );
};