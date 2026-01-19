import { useSearchMoviesQuery } from "@/features/api/searchApi/searchApi.ts";
import {useSearchParams} from "react-router";
import {SearchForm} from "@/features/Search/SearchForm/SearchForm.tsx";

export const Search = () => {

  // const { data, isLoading } = useSearchMoviesQuery("Bingo Bongo")
  // const { data, isLoading } = useSearchMoviesQuery("Predator: Badlands")
  const [params, setParams] = useSearchParams();

  const query = params.get("query") ?? "";
  const page = Number(params.get("page") ?? 1);

  const { data, isLoading } = useSearchMoviesQuery({query, page})
  // console.log(data)

  if (isLoading) return <p>Загрузка...</p>;
  if (!data?.results?.length) return <p>Фильмы не найдены</p>;

  // console.log(data.results)
  return (
    <div>
      Поиск
      <SearchForm />
      {
        data.results.map((item) => (
          <img width={300} src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="" />
        ))
      }

      <div className="pagination">
        <button disabled={page === 1}
                onClick={() => setParams({ query, page: String(page - 1) })}
        >
          ← Назад
        </button>

        <span>{page} / {data.total_pages}</span>

        <button disabled={page === data.total_pages}
                onClick={() => setParams({ query, page: String(page + 1) })}
        >
          Вперёд →
        </button>
      </div>


    </div>
  );
};