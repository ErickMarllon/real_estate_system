import useCarouselNavigation from '@/hooks/useCarouselNavigation';
import customerTestimonialsMock from '@/mocks/customerTestimonialsMock';
import Image from 'next/image';
import { FC, useEffect } from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Button from '../Button';
const CustomerTestimonials: FC = () => {
  const totalItens = customerTestimonialsMock.length;
  const { carouselRef, currentItem, handleCurrentClick } =
    useCarouselNavigation();

  useEffect(() => {
    const totalItens = customerTestimonialsMock.length;

    const interval = setInterval(() => {
      handleCurrentClick(
        currentItem < totalItens ? currentItem + 1 : currentItem * 0,
      );
    }, 12000);

    return () => clearInterval(interval);
  }, [customerTestimonialsMock, currentItem]);

  return (
    <section className="bg-gradient-blue py-10 w-full justify-center items-center flex flex-col">
      <h2 className="text-cyan-600 font-semibold text-4xl text-center px-4">
        O que nossos clientes têm a dizer
      </h2>
      <div
        className="flex h-[300px] w-full  overflow-hidden items-center scroll-smooth"
        ref={carouselRef}
      >
        {customerTestimonialsMock &&
          customerTestimonialsMock.map((cTestimony) => (
            <div
              key={cTestimony.id}
              className="min-w-full flex justify-center items-center "
            >
              <div className="flex flex-col items-center justify-center min-w-1/3 max-w-[350px] sm:max-w-[500px] h-[300px] space-y-4">
                <Image
                  className="w-24 h-24 rounded-full object-cover shadow-lg"
                  src={cTestimony.image.src}
                  alt={cTestimony.image.alt}
                  width={80}
                  height={80}
                  quality={100}
                  priority
                />
                <blockquote className="text-center w-full flex flex-col">
                  <p className="px-4 inline-flex text-xs h-30 sm:h-14 ">
                    <span>
                      <FaQuoteLeft className="text-cyan-600 text-md mr-1" />
                    </span>
                    {cTestimony.testimony}
                    <span>
                      <FaQuoteRight className="text-cyan-600 text-md ml-1" />
                    </span>
                  </p>
                  <cite className="font-semibold text-cyan-800">
                    {cTestimony.name}
                  </cite>
                </blockquote>
              </div>
            </div>
          ))}
      </div>
      <div className=" relative py-10 bottom-0 flex w-full items-center justify-center space-x-3">
        {Array(totalItens)
          .fill(null)
          .map((_, index) => (
            <Button
              key={index}
              type="button"
              className={`btn-carousel-item hover:bg-cyan-950
              ${currentItem === index ? 'bg-cyan-950' : 'bg-cyan-950/50'}
              `}
              onClick={() => handleCurrentClick(index)}
            />
          ))}
      </div>
    </section>
  );
};

export default CustomerTestimonials;
