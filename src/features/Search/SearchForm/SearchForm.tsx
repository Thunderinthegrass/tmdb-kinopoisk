import {useState} from "react";
import {useNavigate} from "react-router";
import * as React from "react";

export const SearchForm = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const submitHandler =(e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?query=${encodeURIComponent(value)}&page=1`);
  }

  return (
    <form onSubmit={submitHandler}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button>Поиск</button>
    </form>
  );
};