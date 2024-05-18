import icon_bathrooms from '@/assets/icons/propertyFeaturesBasic/icon_bathrooms.svg';
import icon_bedrooms from '@/assets/icons/propertyFeaturesBasic/icon_bedrooms.svg';
import icon_buildingArea from '@/assets/icons/propertyFeaturesBasic/icon_buildingArea.svg';
import icon_garagesSpaces from '@/assets/icons/propertyFeaturesBasic/icon_garagesSpaces.svg';
import useCarouselNavigation from '@/hooks/useCarouselNavigation';

import CurrencyFormatter from '@/functions/CurrencyFormatter';
import { IPropertyCardProps } from '@/interfaces/IProperties';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Button from '../Button';

interface IcardProps extends IPropertyCardProps {
  hasCarousel?: boolean;
}

const PropertyCard: React.FC<IcardProps> = ({
  property,
  hasCarousel = false,
}) => {
  const { carouselRef, handlePrevClick, handleNextClick } =
    useCarouselNavigation();
  return (
    <div className="flex flex-col min-w-[200px] h-[320px] shadow-blue p-2 bg-white rounded-secondary duration-700 ease cursor-pointer">
      <div className="flex rounded-primary relative overflow-hidden w-full h-72 object-center">
        {hasCarousel && (
          <>
            <Button
              type="button"
              className="btn-carousel -left-3"
              onClick={handlePrevClick}
            >
              <IoIosArrowBack />
            </Button>

            <Button
              type="button"
              className="btn-carousel -right-3"
              onClick={handleNextClick}
            >
              <IoIosArrowForward />
            </Button>
          </>
        )}
        <Link
          key={property.id}
          ref={carouselRef}
          className={`flex w-[200px] overflow-hidden h-full scroll-smooth items-center absolute`}
          href={`/imovel/${property.slug}`}
        >
          {property?.images.map((el) => (
            <Image
              key={el.id}
              className="hover:scale-110 duration-500 w-full h-full  rounded-primary object-cover object-center"
              src={el.src}
              width={0}
              height={0}
              sizes="100%"
              priority
              alt={el.alt}
            />
          ))}
        </Link>
      </div>
      <div className=" text-sm text-cyan-950 py-2">
        <p className="flex justify-between items-center font-bold">
          {CurrencyFormatter(property.price)}
          {property.prevPrice && property.prevPrice > 0 && (
            <small className=" bg-blue-200/70 text-cyan-950/50 px-2 rounded-full line-through decoration-cyan-950/90">
              R${property.prevPrice}
            </small>
          )}
        </p>
        <p className="font-semibold whitespace-nowrap max-w-36 overflow-hidden text-ellipsis">
          {property.title}
        </p>
        <p className="whitespace-nowrap max-w-36 overflow-hidden text-ellipsis">
          {property.address.street}
        </p>
        <div className="flex space-x-4">
          <p className="flex items-center font-semibold">
            <Image
              className="mr-1"
              src={icon_bedrooms}
              alt="Picture of the author"
              width={15}
              height={15}
            />
            {property.bedrooms}
          </p>
          <p className="flex items-center font-semibold">
            <Image
              className="mr-1"
              src={icon_bathrooms}
              alt="Picture of the author"
              width={15}
              height={15}
            />
            {property.bathrooms}
          </p>
          <p className="flex items-center font-semibold">
            <Image
              className="mr-1"
              src={icon_buildingArea}
              alt="Picture of the author"
              width={15}
              height={15}
            />
            {property.area}
            <sup>2</sup>
          </p>
          {property.garagesSpaces > 0 && (
            <p className="flex items-center font-semibold">
              <Image
                className="mr-1"
                src={icon_garagesSpaces}
                alt="Picture of the author"
                width={15}
                height={15}
              />
              {property.garagesSpaces}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
