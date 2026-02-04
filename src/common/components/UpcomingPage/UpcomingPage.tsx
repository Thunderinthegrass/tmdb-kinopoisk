import {useSearchParams} from "react-router-dom";
import {useSelector} from "react-redux";
import type {RootState} from "@/app/model/store.ts";
import {useFetchAllUpcomingMoviesQuery} from "@/features/api/upcomingApi/upcomingApi.ts";
import s from "@/app/ui/Main/SectionsStyles.module.css";
import sAll from "@/common/components/PopularPage/PopularPage.module.css";
import {MoviesList} from "@/common/components/MoviesList/MoviesList.tsx";
import {Pagination} from "@/common/components/Pagination/Pagination.tsx";

export const UpcomingPage = () => {
  const [params, setParams] = useSearchParams();
  const page = Number(params.get("page") ?? 1);

  const handlePageChange = (newPage: number) => {
    setParams(prev => {
      const next = new URLSearchParams(prev);
      next.set("page", newPage.toString());
      return next;
    });
  };

  const {data, isLoading} = useFetchAllUpcomingMoviesQuery(page);

  const favorites = useSelector((state: RootState) => state.favorites.movies);

  {
    if (isLoading || !data) return <div>"Крутилка"</div>
  }
  // console.log(data)
  return (
    <div className={s.container}>
      <h2>Предстоящие фильмы</h2>
      <div className={`${sAll.moviesWrapper} ${sAll.allMoviesWrapper}`}>
        {data?.results?.map((movie) => {

          const isFavorite = favorites.some(item => item.id === movie.id);

          return (
            <MoviesList key={movie.id} movie={movie} isFavorite={isFavorite} />
          )
        })}
      </div>
      <Pagination currentPage={page} totalPages={data.total_pages} onPageChange={handlePageChange} />
    </div>
  );
};