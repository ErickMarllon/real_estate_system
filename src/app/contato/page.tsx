'use client';

import iconContact from '@/assets/icons/contact/icon_contact.svg';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Label from '@/components/Label';
import TextArea from '@/components/TextArea';
import { useHandleInputChange } from '@/hooks/useHandleInputChange';
import Image from 'next/image';
import Link from 'next/link';

const initialData = {
  name: '',
  subject: '',
  message: '',
};
const error = { hasError: false };

export default function Contato() {
  const { formData, handleInputChange } = useHandleInputChange(initialData);
  return (
    <main className="bg-blue-50 px-2 sm:px-8 py-12">
      <div className="max-w-screen-xl mt-24  px-4 sm:px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gradient-blue   rounded-lg shadow-custom">
        <div className="flex flex-col justify-between">
          <div className="text-cyan-950">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ">
              Vamos conversar?
            </h2>
            <div className="mt-8 flex flex-col">
              <p>Não gosta de Fomulários? </p>
              <p>
                Envie-nos um
                <strong className="ml-1 hover:underline hover:text-cyan-600 whitespace-nowrap">
                  <Link href="mailto:seuemail@example.com?subject=Gostaria%20de%20conhecer%20seus%20trabalhos">
                    E-mail
                  </Link>
                </strong>
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Image
              src={iconContact}
              alt="Incone"
              sizes="100%"
              quality={100}
              priority
            />
          </div>
        </div>
        <form className="space-y-4" action="#" method="POST">
          <div>
            <Label id="name" label="Nome Completo" size="md" />
            <Input
              id="name"
              type="text"
              className={`default focus:ring-blue-400 ${
                error.hasError ? 'ring-red-500' : 'ring-neutral-300'
              }`}
              placeholder="Nome Completo"
              maxLength={50}
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label id="subject" label="Assunto" size="md" />
            <Input
              id="subject"
              type="text"
              className={`default focus:ring-blue-400 ${
                error.hasError ? 'ring-red-500' : 'ring-neutral-300'
              }`}
              placeholder="Assunto"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label id="message" label="Menssagem" size="md" />
            <TextArea
              id="message"
              className={`input-default w-full h-36 sm:h-44 ring-neutral-300 ${
                error?.hasError ? 'focus:ring-red-500' : 'focus:ring-blue-400'
              }`}
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className=" flex">
            <Button
              type="submit"
              className="btn-primary py-3 whitespace-nowrap"
              onClick={() =>
                console.log('pagina de contato - Enviar Menssagem')
              }
            >
              Enviar Menssagem
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
