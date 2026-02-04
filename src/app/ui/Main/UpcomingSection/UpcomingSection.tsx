import {useFetchUpcomingMoviesQuery} from "@/features/api/upcomingApi/upcomingApi.ts";
import s from "@/app/ui/Main/SectionsStyles.module.css";
import {useSelector} from "react-redux";
import type {RootState} from "@/app/model/store.ts";
import {ShowMoreBtn} from "@/common/components/ShowMoreBtn/ShowMoreBtn.tsx";
import {MoviesList} from "@/common/components/MoviesList/MoviesList.tsx";

export const UpcomingSection = () => {

  const { data, isLoading } = useFetchUpcomingMoviesQuery()

  const favorites = useSelector((state: RootState) => state.favorites.movies)

  if (isLoading) {
    return <div>Загрузка происходит...</div>;
  }

  console.log(data)
  return (
    <div className={s.section}>
      <div className={s.container}>
        <h2>Upcoming Movies</h2>
        <ShowMoreBtn path={"upcoming"} />
        <div className={s.moviesWrapper}>
          {
            data?.results?.map((movie) => {
              const isFavorite = favorites.some(item => item.id === movie.id);

              return (
                <MoviesList key={movie.id} movie={movie} isFavorite={isFavorite} />
              )
            })
          }
        </div>
      </div>
    </div>
  );
};