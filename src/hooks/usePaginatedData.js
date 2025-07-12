import { useMemo, useEffect } from "react";

export function usePaginatedData({
  data,
  filterKey = null,
  filterValue = null,
  itemsPerPage = 10,
  currentPage,
  setPage,
}) {
  // Фильтрация (если нужно)
  const filteredData = useMemo(() => {
    if (!filterKey || !filterValue) return data;
    return data.filter((item) => item[filterKey] === filterValue);
  }, [data, filterKey, filterValue]);

  // Кол-во страниц
  const totalPages = useMemo(() => {
    return Math.ceil(filteredData.length / itemsPerPage);
  }, [filteredData.length, itemsPerPage]);

  // Текущая страница, сброс если фильтр изменился и страница невалидна
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setPage(totalPages);
    } else if (currentPage < 1) {
      setPage(1);
    }
  }, [currentPage, totalPages, setPage]);

  // Данные для текущей страницы
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredData, currentPage, itemsPerPage]);

  // Для фильтра — список уникальных значений
  const filterOptions = useMemo(() => {
    if (!filterKey) return [];
    const set = new Set(data.map((item) => item[filterKey]));
    return Array.from(set);
  }, [data, filterKey]);

  return {
    filteredData,
    paginatedData,
    totalPages,
    filterOptions,
  };
}
