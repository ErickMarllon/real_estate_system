'use client';

import img from '@/assets/bg_immobile.jpg';
import Introduction from '@/components/Introduction';
import Loading from '@/components/Loading';
import { redirect, useParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const validSlugs = ['casas', 'apartamentos'];

  useEffect(() => {
    if (params && params.slug && !validSlugs.includes(`${params.slug}`)) {
      redirect('/404');
    }
  }, [params]);

  return (
    <main className="flex min-h-screen h-full flex-col items-center ">
      <Suspense fallback={<Loading />}>
        <Introduction
          src={img}
          alt="imagem de fundo da section"
          title="A realização do seu sonho está aqui!"
          hasSearch
          searchDetailed={true}
          bgFilter="before:bg-blue-500/20"
        />
        {children}
      </Suspense>
    </main>
  );
}
