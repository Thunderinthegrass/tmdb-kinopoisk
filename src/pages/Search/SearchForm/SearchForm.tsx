import {useEffect, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import * as React from "react";
import s from "./SearchForm.module.css"

export const SearchForm = () => {
  const [params] = useSearchParams();
  const query = params.get("query") ?? "";
  const [value, setValue] = useState(query || "");
  const navigate = useNavigate();

  useEffect(() => {
    setValue(query);
  }, [query]);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim() === "") {
      navigate(`/search`);
    } else {
      navigate(`/search?query=${encodeURIComponent(value)}&page=1`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);

    if (e.target.value === "") {
      navigate(`/search`);
    }
  };

  return (
    <form className={s.searchForm} onSubmit={submitHandler}>
      <input className={s.searchInput} type="search" value={value} onChange={handleChange} placeholder="Search" />
      <button className={s.searchButton} disabled={!value}>Поиск</button>
    </form>
  );
};
