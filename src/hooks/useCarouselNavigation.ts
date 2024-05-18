import { useRef, useState } from 'react';

const useCarouselNavigation = () => {
  const carouselRef = useRef<any>(null);
  const [currentItem, setCurrentItem] = useState<number>(0);

  const handlePrevClick = () => {
    carouselRef.current &&
      (carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth);
  };

  const handleNextClick = () => {
    carouselRef.current &&
      (carouselRef.current.scrollLeft += carouselRef.current.offsetWidth);
  };

  const handleCurrentClick = (index: number) => {
    carouselRef.current &&
      (carouselRef.current.scrollTo({
        left: index * (carouselRef.current.offsetWidth || 0),
      }),
      setCurrentItem(index));
  };

  return {
    carouselRef,
    currentItem,
    handlePrevClick,
    handleNextClick,
    handleCurrentClick,
  };
};

export default useCarouselNavigation;
