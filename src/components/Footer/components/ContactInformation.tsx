import Link from 'next/link';
import { FC } from 'react';
import { BsPhoneFill } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';
import { IoLocation, IoLogoWhatsapp } from 'react-icons/io5';

const ContactInformation: FC = () => {
  return (
    <div className="text-neutral-400 text-sm flex flex-col w-full pl-2 items-start font-medium space-y-1 pb-1 pt-16">
      <address className="flex items-center hover:text-neutral-200">
        <IoLocation className="mr-1" />
        Rua Desenvolvedor, 00000-000
      </address>
      <Link
        href="tel:+5521986828876"
        className="flex items-center hover:text-neutral-200"
      >
        <BsPhoneFill className="mr-1" />
        +55 21 98682-8876
      </Link>
      <Link
        href="https://wa.me/5521986828876?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20seus%20projetos."
        target="_blank"
        className="flex items-center hover:text-neutral-200"
      >
        <IoLogoWhatsapp className="mr-1" />
        +55 21 98682-8876
      </Link>

      <Link
        href="mailto:seuemail@example.com?subject=Gostaria%20de%20conhecer%20seus%20trabalhos"
        className="flex items-center hover:text-neutral-200"
      >
        <HiMail className="mr-1" />
        erick.marllon@outlook.com.br
      </Link>
    </div>
  );
};

export default ContactInformation;
