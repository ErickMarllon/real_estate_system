import useCarouselNavigation from '@/hooks/useCarouselNavigation';
import listPropertiesData from '@/mocks/listPropertiesMock.json';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Button from '../Button';
import PropertyCard from '../PropertyCard';

const RandomProperties = () => {
  const { carouselRef, handlePrevClick, handleNextClick } =
    useCarouselNavigation();

  return (
    <div className="w-full flex justify-center ">
      <div
        className={`relative flex items-center w-[100%] sm:w-[90%] md:w-[80%]  xl:w-[50%]`}
      >
        <div
          className={`flex overflow-hidden items-center space-x-8 scroll-smooth h-[350px] `}
          ref={carouselRef}
        >
          {listPropertiesData?.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        <Button
          type="button"
          className="btn-carousel left-0 -top-8"
          onClick={handlePrevClick}
        >
          <IoIosArrowBack />
        </Button>

        <Button
          type="button"
          className="btn-carousel right-0 -top-8"
          onClick={handleNextClick}
        >
          <IoIosArrowForward />
        </Button>
      </div>
    </div>
  );
};

export default RandomProperties;
