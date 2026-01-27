import { useSearchMoviesQuery } from "@/features/api/searchApi/searchApi.ts";
import {Link, useSearchParams} from "react-router";
import {SearchForm} from "@/features/Search/SearchForm/SearchForm.tsx";
import noImage from "@/assets/no-image.png";
import s from "./Search.module.css"

export const Search = () => {

  // const { data, isLoading } = useSearchMoviesQuery("Bingo Bongo")
  // const { data, isLoading } = useSearchMoviesQuery("Predator: Badlands")
  const [params, setParams] = useSearchParams();

  const query = params.get("query") ?? "";
  const page = Number(params.get("page") ?? 1);

  // console.log(params)

  const { data, isLoading, isError } = useSearchMoviesQuery({query, page}, { skip: !query })
  // console.log(data)

  return (
    <div className={s.searchPage}>
      <div className={s.container}>
        <h2>Search results</h2>
        <SearchForm />

        {isError && <p>Ошибка загрузки данных</p>}

        {isLoading && <p>Загрузка...</p>}

        {!isLoading && query && !data?.results?.length && (
          <p>Фильмы не найдены</p>
        )}

        {!data?.results &&
          <p>
          Введите какое-нибудь название фильма и нажмите кнопку "Поиск", либо Enter на клавиатуре
        </p>}

        <div className={s.movieContainer}>
          {
            data?.results?.map((item) => (
              <Link key={item.id} to={`/movie/${item.id}`} className={s.item}>
                {item.poster_path ? (
                  <img className={s.movieImg} src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="" />
                ) : (
                  <img className={s.movieImg} src={noImage} alt="" />
                )}
              </Link>
            ))
          }
        </div>
        {(data?.results && data.page > 1) && (
          <div className={s.pagination}>
            <button className={s.paginationBtn} disabled={isLoading || page === 1}
                    onClick={() => setParams({ query, page: String(page - 1) })}
            >
              Назад
            </button>

            <span>{page} / {data?.total_pages}</span>

            <button className={s.paginationBtn} disabled={isLoading || page === data?.total_pages}
                    onClick={() => setParams({ query, page: String(page + 1) })}
            >
              Вперёд
            </button>
          </div>
        )}
      </div>
    </div>
  );
};