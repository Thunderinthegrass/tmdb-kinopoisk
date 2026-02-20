import {useSelector} from "react-redux";
import type {RootState} from "@/app/providers/store/store.ts";
import {useFetchAllUpcomingMoviesQuery} from "@/entities/movie/api/upcomingApi/upcomingApi.ts";
import s from "@/app/styles/SectionsStyles.module.css";
import {MoviesList} from "@/entities/ui/MoviesList/MoviesList.tsx";
import {Pagination} from "@/features/pagination/Pagination.tsx";
import {MoviesPageSkeleton} from "@/pages/MoviesPageSceleton/MoviesPageSkeleton.tsx";
import {usePageNavigation} from "@/shared/hooks/usePageNavigation.ts";

export const UpcomingPage = () => {
  const { page, goToPage } = usePageNavigation();

  const {data, isLoading} = useFetchAllUpcomingMoviesQuery(page);

  const favorites = useSelector((state: RootState) => state.favorites.movies);

  const showSkeleton = isLoading && !data;

  // console.log(data)
  return (
    <div className={s.container}>
      <h2>Предстоящие фильмы</h2>
      <div className={`${s.moviesWrapper} ${s.allMoviesWrapper}`}>
        {showSkeleton ? (
          <MoviesPageSkeleton />
        ) : (
          data?.results?.map((movie) => {

            const isFavorite = favorites.some(item => item.id === movie.id);

            return (
              <MoviesList key={movie.id} movie={movie} isFavorite={isFavorite} />
            )
          })
        )}
      </div>
      {!isLoading && data && (
        <Pagination currentPage={page} totalPages={data.total_pages} onPageChange={goToPage} />
      )}
    </div>
  );
};