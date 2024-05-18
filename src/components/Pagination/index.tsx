import usePagination, { DOTS } from '@/hooks/usePagination';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { MdKeyboardArrowLeft } from 'react-icons/md';
interface IPagination {
  currentPage: number;
  totalPageCount: number;
  totalButtons?: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}
const Pagination: React.FC<IPagination> = ({
  currentPage,
  totalPageCount,
  setPage,
}) => {
  const { paginationRange } = usePagination({
    totalCount: totalPageCount,
    currentPage,
  });

  return (
    <nav className="my-8 w-full flex justify-center">
      <ul className="flex  items-center justify-between text-sm w-full max-w-[300px] sm:max-w-[300px]">
        <li>
          <button
            className={`flex items-center justify-center  text-zinc-800 hover:text-cyan-800 ${
              currentPage === 1 ? 'disabled opacity-50 ' : ''
            }`}
            type="button"
            disabled={currentPage === 1}
            onClick={() => setPage(currentPage - 1)}
          >
            <MdKeyboardArrowLeft size={30} />
          </button>
        </li>

        {paginationRange?.map((pageNumber, index) => {
          if (pageNumber === DOTS && index) {
            return <span key={index}>{DOTS}</span>;
          }

          return (
            <li key={index}>
              <button
                className={`${
                  currentPage === pageNumber
                    ? 'border-cyan-700/50 text-cyan-800'
                    : 'text-zinc-800 border-zinc-800/50'
                } flex items-center justify-center h-8 w-8 border rounded-full hover:border-cyan-700/50 hover:text-cyan-800`}
                type="button"
                onClick={() => setPage(Number(pageNumber))}
              >
                {pageNumber}
              </button>
            </li>
          );
        })}

        <li>
          <button
            className={`flex items-center justify-center text-zinc-800 hover:text-cyan-800 ${
              currentPage === totalPageCount && 'disabled opacity-50 '
            }`}
            type="button"
            disabled={currentPage === totalPageCount}
            onClick={() => setPage(currentPage + 1)}
          >
            <IoIosArrowForward size={22} />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
