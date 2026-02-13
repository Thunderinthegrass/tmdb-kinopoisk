import {useGetGenresQuery} from "@/entities/movie/api/filtersApi/filtersApi.ts";
import s from "./Genres.module.css"
import {useDispatch, useSelector} from "react-redux";
import {toggleGenre} from "@/entities/movie/model/filtersSlice.ts";
import type {RootState} from "@/app/providers/store/store.ts";

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

      {data?.genres.map((genre) => {

        const isActive = filters.genres.includes(genre.id);

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