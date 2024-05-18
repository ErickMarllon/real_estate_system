'use client';
import brand from '@/assets/brand_white.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import Navbar from '../Navbar';
const Header: FC = () => {
  return (
    <header className="bg-black/60 flex flex-col fixed items-center z-20 w-full h-[10dvh]  ">
      <nav className="flex w-full flex-wrap items-center h-full justify-center sm:justify-between relative content-center max-w-screen-xl mx-auto p-4">
        <Link
          href="/"
          className="flex items-center justify-center z-30 order-2 md:order-1 pt-4"
        >
          <Image
            src={brand}
            alt="Logo Marca"
            width={200}
            quality={100}
            priority
          />
        </Link>
        <Navbar />
        <span className=" items-center z-30 order-3 hidden sm:flex space-x-1 md:space-x-2 rtl:space-x-reverse" />
      </nav>
    </header>
  );
};

export default Header;
