import {useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import * as React from "react";
import s from "./SearchForm.module.css"

export const SearchForm = () => {
  const [params] = useSearchParams();
  const query = params.get("query") ?? "";
  const [value, setValue] = useState(query);
  const navigate = useNavigate();

  const submitHandler =(e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?query=${encodeURIComponent(value)}&page=1`);
  }

  return (
    <form className={s.searchForm} onSubmit={submitHandler}>
      <input className={s.searchInput} type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Search" />
      <button className={s.searchButton} disabled={!value}>Поиск</button>
    </form>
  );
};
