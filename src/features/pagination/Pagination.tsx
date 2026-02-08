import {getPaginationRange} from "@/features/pagination/pagination.utils.ts";
import s from "./Pagination.module.css"


type Props = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: Props) => {

  const pages = getPaginationRange(currentPage, totalPages);

  return (
    <div className={s.container}>
      <div className={s.pagination}>
        {pages.map((page, index) => {
          if (typeof page === "string") {
            return (
              <span key={`ellipsis-${index}`} style={{ padding: "6px 10px" }}>
              {page}
            </span>
            )
          }
          return (
            <button key={page} onClick={() => onPageChange(page)} className={currentPage === page ? `${s.paginationBtn} ${s.paginationBtnActive}` : s.paginationBtn}>
              {page}
            </button>
          )
        })}
      </div>
    </div>
  );
};