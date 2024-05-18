'use client';

import Pagination from '@/components/Pagination';
import PropertyList from '@/components/PropertyList';
import useSeparateByQuantity from '@/hooks/useSeparateByQuantity';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import listPropertiesData from '../../../Mocks/listPropertiesMock.json';

export default function DynamicPage({ params }: { params: { slug: string } }) {
  const { push } = useRouter();
  params.slug !== 'casas' &&
    params.slug !== 'apartamentos' &&
    push('/not-found');
  const filteredData =
    listPropertiesData && params.slug
      ? listPropertiesData.filter(
          (el) => el.typeProperty === params.slug.slice(0, -1),
        )
      : listPropertiesData;

  const { currentData, setCurrentPage, currentPage, totalNumberLists } =
    useSeparateByQuantity({
      data: filteredData,
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
