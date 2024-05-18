'use client';
import img from '@/assets/banner_faq.jpg';

import Image from 'next/image';
export default function CookiesPolicy() {
  return (
    <main className="policy bg-blue-50 min-h-screen py-[10dvh] relative">
      <section className="w-full relative flex justify-center lg:justify-normal items-center h-[20dvh] sm:h-[40dvh] mb-24">
        <div className=" px-4 space-y-4 z-50 md:w-1/2 left-0 flex items-center justify-center flex-col">
          <h1 className="text-zinc-800 text-3xl sm:text-5xl text-center font-semibold sm:whitespace-nowrap">
            Dúvidas
          </h1>
        </div>
        <div className=" overflow-hidden absolute w-full min-w-lg lg:w-1/2  right-0 h-full">
          <span className="bg-black/10 absolute z-10 w-full h-full" />
          <Image
            className="w-full h-full object-cover object-center bg-no-repeat absolute md:relative z-0 "
            src={img}
            alt={'imagem de pessoa fazendo anotação.'}
            width={0}
            height={0}
            sizes="100%"
            quality={100}
            priority
          />
        </div>
      </section>
    </main>
  );
}
