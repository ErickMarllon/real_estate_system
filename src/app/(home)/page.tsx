'use client';
import img from '@/assets/bg_home.jpg';
import CustomerTestimonials from '@/components/CustomerTestimonials/CustomerTestimonials';
import Introduction from '@/components/Introduction';
import PromotionalBanner from '@/components/PromotionalBanner';
import RandomProperties from '@/components/RandomProperties/RandomProperties';
import WhyChooseUs from '@/components/WhyChooseUs';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <Introduction
        src={img}
        alt="imagem de fundo da section"
        title="A realização do seu sonho está aqui!"
        hasSearch
        searchDetailed={true}
        bgFilter="before:bg-black/30"
      />
      <WhyChooseUs />
      <PromotionalBanner />
      <div className="flex flex-col items-center w-full space-y-5  pb-32">
        <RandomProperties />
        <div className=" flex justify-center w-32">
          <Link
            href="/imoveis"
            className="btn-primary rounded-md text-center font-semibold text-white p-2"
          >
            Ver Imóveis
          </Link>
        </div>
      </div>
      <CustomerTestimonials />
    </main>
  );
}
