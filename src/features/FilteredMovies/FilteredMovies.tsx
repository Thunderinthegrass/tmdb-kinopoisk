import { useDispatch, useSelector } from "react-redux";
import {useDiscoverMoviesQuery} from "@/features/api/filtersApi/filtersApi.ts";

export const FilteredMovies = () => {

  const dispatch = useDispatch();

  const { sortBy, rating, genres, page } = useSelector(state => state.filters);

  const { data, isLoading } = useDiscoverMoviesQuery({
    sortBy,
    ratingGte: rating[0],
    ratingLte: rating[1],
    genres,
    page,
  })

  if (isLoading) {
    return <div>Загрузка</div>
  }

  console.log(data);
  return (
    <div>
      Фильтрация

    </div>
  );
};