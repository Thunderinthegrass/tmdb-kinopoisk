import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

export const usePageNavigation = () => {
  const [params, setParams] = useSearchParams();
  const page = Number(params.get("page") ?? 1);

  const goToPage = (newPage: number) => {
    if (newPage > 500) {
      toast.error("Нельзя перейти на страницу выше 500");
      return;
    }
    setParams({ page: newPage.toString() });
  };

  return { page, goToPage };
};