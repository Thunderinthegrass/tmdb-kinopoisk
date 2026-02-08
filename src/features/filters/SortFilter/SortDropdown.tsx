import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSort } from "@/entities/movie/model/filtersSlice.ts";
import type {RootState} from "@/app/providers/store/store.ts";

const sortOptions = [
  { label: 'Популярность ↓', value: 'popularity.desc' },
  { label: 'Популярность ↑', value: 'popularity.asc' },
  { label: 'Рейтинг ↓', value: 'vote_average.desc' },
  { label: 'Рейтинг ↑', value: 'vote_average.asc' },
  { label: 'Дата ↓', value: 'primary_release_date.desc' },
  { label: 'Дата ↑', value: 'primary_release_date.asc' },
  { label: 'Название A-Z', value: 'original_title.asc' },
  { label: 'Название Z-A', value: 'original_title.desc' },
]

export const SortDropdown = () => {
  const dispatch = useDispatch()
  const sortBy = useSelector((state: RootState) => state.filters.sortBy)
  const [open, setOpen] = useState(false)

  const active = sortOptions.find(o => o.value === sortBy)

  const select = (value: string) => {
    dispatch(setSort(value))
    setOpen(false)
  }

  return (
    <div className="sort">
      <button onClick={() => setOpen(!open)} className="sort-btn">
        {active?.label}
      </button>

      {open && (
        <div className="sort-menu">
          {sortOptions.map(opt => (
            <div
              key={opt.value}
              onClick={() => select(opt.value)}
              className={`sort-item ${opt.value === sortBy ? 'active' : ''}`}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
