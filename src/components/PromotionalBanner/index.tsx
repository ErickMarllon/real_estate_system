import promotionalBannerOne from '@/assets/promotional_banner_one.jpg';
import promotionalBannerTwo from '@/assets/promotional_banner_two.jpg';
import Image from 'next/image';
import { FC } from 'react';

const PromotionalBanner: FC = () => {
  return (
    <section className="bg-gradient-blue pt-10 pb-32 w-full justify-center items-center flex">
      <div className="grid gap-10 relative justify-items-center  justify-center content-center sm:grid-cols-2">
        <div className="flex relative min-w-300px max-w-300px w-full  justify-center items-center">
          <Image
            className="h-[300px] flex min-w-[200px] max-w-[230px] sm:max-w-[250px]  w-full object-cover bg-cover rounded-md"
            src={promotionalBannerOne}
            alt="icone de segurança"
            sizes="100%"
            quality={100}
            priority
          />
          <Image
            className="w-[200px] absolute z-10 -bottom-8 -right-3 sm:-right-8  border-4 rounded-sm border-white"
            src={promotionalBannerTwo}
            alt="icone de segurança"
            sizes="100%"
            quality={100}
            priority
          />
        </div>
        <div className="max-w-[250px] w-full sm:max-w-[303px] ">
          <h2 className="text-cyan-600 font-semibold text-4xl sm:text-5xl text-center sm:text-start">
            se você está <br />
            <strong className="text-cyan-950 font-semibold">
              comprando, vendendo ou alugando. <br />
            </strong>
            podemos
            <strong className="text-cyan-950 font-semibold"> ajudá-lo</strong>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanner;
