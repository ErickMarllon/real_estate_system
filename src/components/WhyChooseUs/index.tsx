import iconDocuments from '@/assets/icons/whyChooseUs/icon_documents.png';
import iconHeadphone from '@/assets/icons/whyChooseUs/icon_headphone.png';
import iconMoneyBag from '@/assets/icons/whyChooseUs/icon_money_bag.png';
import iconSecurity from '@/assets/icons/whyChooseUs/icon_security.png';
import Image from 'next/image';
import { FC } from 'react';

const WhyChooseUs: FC = () => {
  return (
    <section className="bg-gradient-blue py-10 w-full justify-center items-center flex flex-col space-y-5">
      <div>
        <h2 className="text-center font-semibold text-4xl text-cyan-600">
          <strong>Prime Immbiles</strong>
        </h2>
        <p className="text-center text-sm font-semibold text-cyan-950/80">
          Alcance seus objetivos com rapidez e segurança conosco
        </p>
        <h2 className="text-center font-semibold text-4xl text-cyan-600 -mt-1">
          Porque nos escolher
        </h2>
      </div>
      <div className="grid justify-center items-center py-5 gap-4 sm:grid-cols-2 md:grid-cols-4">
        <div className="flex items-center text-center w-44 flex-col space-y-2">
          <Image
            src={iconSecurity}
            alt="icone de segurança"
            width={50}
            height={50}
            quality={100}
            priority
          />
          <h4 className="text-md font-semibold text-cyan-800  ">Seguro</h4>
          <p className="text-sm text-cyan-950/80">
            Proteja seu patrimônio com nosso seguro de propriedade confiável.
          </p>
        </div>
        <div className="flex items-center text-center w-44 flex-col space-y-2">
          <Image
            src={iconMoneyBag}
            alt="icone de segurança"
            width={50}
            height={50}
            quality={100}
            priority
          />
          <h4 className="text-md font-semibold text-cyan-800 ">Comissão</h4>
          <p className="text-sm text-cyan-950/80">
            Maximize seus ganhos com as menores taxas disponíveis.
          </p>
        </div>
        <div className="flex items-center text-center w-44 flex-col space-y-2">
          <Image
            src={iconDocuments}
            alt="icone de segurança"
            width={50}
            height={50}
            quality={100}
            priority
          />
          <h4 className="text-md font-semibold text-cyan-800 ">Documentação</h4>
          <p className="text-sm text-cyan-950/80">
            Agilidade no processo de documentação garantindo eficiência e
            rapidez.
          </p>
        </div>
        <div className="flex items-center text-center w-44 flex-col space-y-2">
          <Image
            src={iconHeadphone}
            alt="icone de segurança"
            width={50}
            height={50}
            quality={100}
            priority
          />
          <h4 className="text-md font-semibold text-cyan-800 ">Assistência</h4>
          <p className="text-sm text-cyan-950/80">
            Serviço de assistência técnica 24 horas para sua tranquilidade e
            segurança.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
