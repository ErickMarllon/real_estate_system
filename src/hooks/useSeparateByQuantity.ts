import { useMemo, useState } from 'react';

type PaginationData<T> = {
  data: T[];
  pageSize?: number;
};

export default function useSeparateByQuantity<T>({
  data,
  pageSize = 10,
}: PaginationData<T>) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalNumberLists = Math.ceil(
    data ? Object.keys(data).length / pageSize : 0,
  );

  const currentData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return data.slice(startIndex, endIndex);
  }, [currentPage, data, pageSize]);

  return { currentData, setCurrentPage, currentPage, totalNumberLists };
}
