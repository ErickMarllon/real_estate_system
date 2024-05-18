'use client';
import Pagination from '@/components/Pagination';
import PropertyList from '@/components/PropertyList';
import useSeparateByQuantity from '@/hooks/useSeparateByQuantity';
import listPropertiesData from '@/mocks/listPropertiesMock.json';
import { useEffect, useRef } from 'react';
export default function Imoveis() {
  const { currentData, setCurrentPage, currentPage, totalNumberLists } =
    useSeparateByQuantity({
      data: listPropertiesData,
    });

  const propertiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (propertiesRef.current && currentPage > 1) {
      propertiesRef.current.style.scrollMarginTop = '13dvh';
      propertiesRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'center',
      });
    }
  }, [currentPage, propertiesRef]);

  return (
    <div
      ref={propertiesRef}
      id="properties"
      className="flex flex-col w-full items-center justify-center py-10 bg-gradient-blue"
    >
      <PropertyList properties={currentData} />
      {totalNumberLists > 1 && (
        <Pagination
          currentPage={currentPage}
          setPage={setCurrentPage}
          totalPageCount={totalNumberLists}
        />
      )}
    </div>
  );
}
