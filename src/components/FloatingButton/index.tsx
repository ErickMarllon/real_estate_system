import Link from 'next/link';
import { ButtonHTMLAttributes, FC } from 'react';
import { IoLogoWhatsapp } from 'react-icons/io5';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  additionalclass?: string;
}

const FloatingButton: FC<ButtonProps> = () => {
  return (
    <button className="w-16 h-16 flex justify-center items-center fixed bottom-8 right-8 rounded-full z-[999] bg-green-500 animate-pulse">
      <Link
        href="https://wa.me/5521986828876?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20seus%20projetos."
        target="_blank"
        className="w-full h-full"
      >
        <IoLogoWhatsapp className="w-full h-full p-2" />
      </Link>
    </button>
  );
};

export default FloatingButton;
