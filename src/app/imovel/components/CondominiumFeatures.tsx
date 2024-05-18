import icon_academy from '@/assets/icons/condominiumFeatures/icon_academy.svg';
import icon_electronicGate from '@/assets/icons/condominiumFeatures/icon_electronicGate.svg';
import icon_gatedCommunity from '@/assets/icons/condominiumFeatures/icon_gatedCommunity.svg';
import icon_petsAllowed from '@/assets/icons/condominiumFeatures/icon_petsAllowed.svg';
import icon_pool from '@/assets/icons/condominiumFeatures/icon_pool.svg';
import icon_security from '@/assets/icons/condominiumFeatures/icon_security.svg';
import icon_walledArea from '@/assets/icons/condominiumFeatures/icon_walledArea.svg';
import Image from 'next/image';

interface IProps {
  academy: boolean;
  electronicGate: boolean;
  gatedCommunity: boolean;
  petsAllowed: boolean;
  pool: boolean;
  security: boolean;
  walledArea: boolean;
}
const CondominiumFeatures: React.FC<IProps> = ({ ...props }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-cyan-950 mb-6">
        Características do condomínio
      </h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 text-sm gap-4">
        {props?.security && (
          <li className="flex min-h-16 sm:min-h-10 bg-blue-400/10 rounded-3xl">
            <p className="flex items-center px-2 py-2  text-sm ">
              <Image
                className="mr-2"
                src={icon_security}
                alt="Picture of the author"
                width={0}
                height={0}
                sizes="15px"
              />
              Segurança 24h
            </p>
          </li>
        )}
        {props?.walledArea && (
          <li className="flex min-h-16 sm:min-h-10 bg-blue-400/10 rounded-3xl">
            <p className="flex items-center px-2 py-2  text-sm ">
              <Image
                className="mr-2"
                src={icon_walledArea}
                alt="Picture of the author"
                width={0}
                height={0}
                sizes="15px"
              />
              Área murada
            </p>
          </li>
        )}
        {props?.gatedCommunity && (
          <li className="flex min-h-16 sm:min-h-10 bg-blue-400/10 rounded-3xl">
            <p className="flex items-center px-2 py-2  text-sm ">
              <Image
                className="mr-2"
                src={icon_gatedCommunity}
                alt="Picture of the author"
                width={0}
                height={0}
                sizes="15px"
              />
              Condomínio fechado
            </p>
          </li>
        )}
        {props?.electronicGate && (
          <li className="flex min-h-16 sm:min-h-10 bg-blue-400/10 rounded-3xl">
            <p className="flex items-center px-2 py-2  text-sm ">
              <Image
                className="mr-2"
                src={icon_electronicGate}
                alt="Picture of the author"
                width={0}
                height={0}
                sizes="15px"
              />
              Portão eletrônico
            </p>
          </li>
        )}
        {props?.petsAllowed && (
          <li className="flex min-h-16 sm:min-h-10 bg-blue-400/10 rounded-3xl">
            <p className="flex items-center px-2 py-2  text-sm ">
              <Image
                className="mr-2"
                src={icon_petsAllowed}
                alt="Picture of the author"
                width={0}
                height={0}
                sizes="15px"
              />
              Permitido animais
            </p>
          </li>
        )}
        {props?.academy && (
          <li className="flex min-h-16 sm:min-h-10 bg-blue-400/10 rounded-3xl">
            <p className="flex items-center px-2 py-2 text-sm ">
              <Image
                className="mr-2"
                src={icon_academy}
                alt="Picture of the author"
                width={0}
                height={0}
                sizes="15px"
              />
              Academia
            </p>
          </li>
        )}
        {props?.pool && (
          <li className="flex min-h-16 sm:min-h-10 bg-blue-400/10 rounded-3xl">
            <p className="flex items-center px-2 py-2  text-sm ">
              <Image
                className="mr-2"
                src={icon_pool}
                alt="Picture of the author"
                width={0}
                height={0}
                sizes="15px"
              />
              Piscina
            </p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default CondominiumFeatures;
