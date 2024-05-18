import { useMemo } from 'react';

export const DOTS = '...';

const range = (start: number, end: number) => {
  return Array.from({ length: end - start + 1 }, (_, idx) => idx + start);
};

type PaginationData<T> = {
  sideButtons?: number;
  totalCount: number;
  currentPage: number;
};

export default function usePagination<T>({
  sideButtons = 1,
  totalCount,
  currentPage,
}: PaginationData<T>) {
  const paginationRange = useMemo(() => {
    const firstIndex = 1;
    const rightLeftItemCount = 3 + 2 * sideButtons;
    const leftSiblingIndex = Math.max(currentPage - sideButtons, firstIndex);
    const rightSiblingIndex = Math.min(currentPage + sideButtons, totalCount);
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalCount - 2;

    switch (true) {
      case !shouldShowLeftDots && shouldShowRightDots: {
        const leftRange = range(firstIndex, rightLeftItemCount);
        return [...leftRange, DOTS, totalCount];
      }
      case shouldShowLeftDots && !shouldShowRightDots: {
        const rightRange = range(
          totalCount - rightLeftItemCount + firstIndex,
          totalCount,
        );
        return [firstIndex, DOTS, ...rightRange];
      }
      case shouldShowLeftDots && shouldShowRightDots: {
        const middleRange = range(leftSiblingIndex, rightSiblingIndex);
        return [firstIndex, DOTS, ...middleRange, DOTS, totalCount];
      }
      default:
        return range(firstIndex, totalCount);
    }
  }, [totalCount, sideButtons, currentPage]);

  return { paginationRange };
}
