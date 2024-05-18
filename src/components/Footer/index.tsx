import brand from '@/assets/brand_white.jpg';
import Image from 'next/image';
import { FC } from 'react';
import ContactInformation from './components/ContactInformation';
import Copyright from './components/Copyright';
import FooterNavigation from './components/FooterNavigation';
import SocialMedia from './components/SocialMedia';

const Footer: FC = () => {
  return (
    <footer className="py-10 z-0 relative w-full overflow-hidden bg-footer-bg bg-cover bg-center flex justify-center items-center space-y-10 flex-col bg-after after:bg-black after:bg-opacity-70 after:backdrop-filter after:backdrop-blur-sm">
      <div className=" z-20 grid lg:grid-cols-3">
        <FooterNavigation />
        <div className="relative flex flex-col col-span-1 ml-2  lg:ml-8">
          <Image
            className="absolute -top-6 -left-2"
            src={brand}
            alt="Logo Marca"
            width={280}
            quality={100}
          />
          <ContactInformation />
          <SocialMedia />
        </div>
      </div>
      <div className=" py-6 z-20 w-full md:flex md:items-center md:justify-between">
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
