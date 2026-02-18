import { useSearchMoviesQuery } from "@/entities/movie/api/searchApi/searchApi.ts";
import {useSearchParams} from "react-router-dom";
import {SearchForm} from "@/pages/Search/SearchForm/SearchForm.tsx";
import s from "./Search.module.css"
import {MoviesList} from "@/entities/ui/MoviesList/MoviesList.tsx";
import {useSelector} from "react-redux";
import type {RootState} from "@/app/providers/store/store.ts";
import {MoviesPageSkeleton} from "@/pages/MoviesPageSceleton/MoviesPageSkeleton.tsx";
import {Pagination} from "@/features/pagination/Pagination.tsx";

export const Search = () => {

  const [params, setParams] = useSearchParams();
  const query = params.get("query") ?? "";
  const page = Number(params.get("page") ?? 1);

  const handlePageChange = (page: number) => {
    setParams({
      query,
      page: page.toString()
    });
  }

  // console.log(params)

  const favorites = useSelector((state: RootState) => state.favorites.movies);
  const {
    data,
    isLoading,
    isFetching,
    isUninitialized,
    isError,
  } = useSearchMoviesQuery({ query, page }, { skip: !query });
  console.log(data)

  return (
    <div className={s.searchPage}>
      <div className={s.container}>
        <h2>Search results</h2>
        <SearchForm />

        {isError && <p>Ошибка загрузки данных</p>}

        {!isLoading && query && !data?.results?.length && (
          <p>Фильмы не найдены</p>
        )}

        {isFetching && !isLoading && (
          <div className={s.fetchingOverlay}>Обновляются данные, немножко надо подождать...</div>
        )}

        {isUninitialized &&
          <p>
          Введите какое-нибудь название фильма и нажмите кнопку "Поиск", либо Enter на клавиатуре
        </p>}

        <div className={s.movieContainer}>
          {query && !data && <MoviesPageSkeleton />}

          {data?.results?.map((movie) => {
            const isFavorite = favorites.some(item => item.id === movie.id);

            return (
              <MoviesList key={movie.id} movie={movie} isFavorite={isFavorite} />
            );
          })}
        </div>
        {query && !isLoading && data && data?.results?.length > 0 && (
          <Pagination
            currentPage={page}
            totalPages={data.total_pages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};