import icon_airConditioning from '@/assets/icons/propertyFeatures/icon_airConditioning.svg';
import icon_balcony from '@/assets/icons/propertyFeatures/icon_balcony.svg';
import icon_cabinetsKitchen from '@/assets/icons/propertyFeatures/icon_cabinetsKitchen.svg';
import icon_closetsBedroom from '@/assets/icons/propertyFeatures/icon_closetsBedroom.svg';
import icon_furnished from '@/assets/icons/propertyFeatures/icon_furnished.svg';
import icon_grill from '@/assets/icons/propertyFeatures/icon_grill.svg';
import icon_pool from '@/assets/icons/propertyFeatures/icon_pool.svg';
import icon_serviceArea from '@/assets/icons/propertyFeatures/icon_serviceArea.svg';
import icon_serviceRoom from '@/assets/icons/propertyFeatures/icon_serviceRoom.svg';
import Image from 'next/image';

interface IProps {
  airConditioning: boolean;
  serviceArea: boolean;
  cabinetsKitchen: boolean;
  closetsBedroom: boolean;
  grill: boolean;
  furnished: boolean;
  serviceRoom: boolean;
  balcony: boolean;
  pool: boolean;
}
const PropertyFeatures: React.FC<IProps> = ({ ...props }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-cyan-950 mb-6">
        Características do imóvel
      </h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 text-sm gap-4">
        {props?.airConditioning && (
          <li className="flex min-h-16 sm:min-h-10 bg-blue-400/10 rounded-3xl">
            <p className="flex items-center px-2 py-2 text-sm ">
              <Image
                className="mr-2"
                src={icon_airConditioning}
                alt="Picture of the author"
                width={0}
                height={0}
                sizes="15px"
              />
              Ar condicionado
            </p>
          </li>
        )}
        {props?.serviceArea && (
          <li className="flex min-h-16 sm:min-h-10 bg-blue-400/10 rounded-3xl">
            <p className="flex items-center px-2 py-2  text-sm ">
              <Image
                className="mr-2"
                src={icon_serviceArea}
                alt="Picture of the author"
                width={0}
                height={0}
                sizes="15px"
              />
              Área de serviço
            </p>
          </li>
        )}
        {props?.cabinetsKitchen && (
          <li className="flex min-h-16 sm:min-h-10 bg-blue-400/10 rounded-3xl">
            <p className="flex items-center px-2 py-2  text-sm ">
              <Image
                className="mr-2"
                src={icon_cabinetsKitchen}
                alt="Picture of the author"
                width={0}
                height={0}
                sizes="15px"
              />
              Armário(s) na cozinha
            </p>
          </li>
        )}
        {props?.closetsBedroom && (
          <li className="flex min-h-16 sm:min-h-10 bg-blue-400/10 rounded-3xl">
            <p className="flex items-center px-2 py-2  text-sm ">
              <Image
                className="mr-2"
                src={icon_closetsBedroom}
                alt="Picture of the author"
                width={0}
                height={0}
                sizes="15px"
              />
              Armário(s) no quarto
            </p>
          </li>
        )}
        {props?.grill && (
          <li className="flex min-h-16 sm:min-h-10 bg-blue-400/10 rounded-3xl">
            <p className="flex items-center px-2 py-2  text-sm ">
              <Image
                className="mr-2"
                src={icon_grill}
                alt="Picture of the author"
                width={0}
                height={0}
                sizes="15px"
              />
              Churrasqueira
            </p>
          </li>
        )}
        {props?.furnished && (
          <li className="flex min-h-16 sm:min-h-10 bg-blue-400/10 rounded-3xl">
            <p className="flex items-center px-2 py-2  text-sm ">
              <Image
                className="mr-2"
                src={icon_furnished}
                alt="Picture of the author"
                width={0}
                height={0}
                sizes="15px"
              />
              Mobilado
            </p>
          </li>
        )}
        {props?.serviceRoom && (
          <li className="flex min-h-16 sm:min-h-10 bg-blue-400/10 rounded-3xl">
            <p className="flex items-center px-2 py-2  text-sm ">
              <Image
                className="mr-2"
                src={icon_serviceRoom}
                alt="Picture of the author"
                width={0}
                height={0}
                sizes="15px"
              />
              Quarto de serviço
            </p>
          </li>
        )}
        {props?.balcony && (
          <li className="flex min-h-16 sm:min-h-10 bg-blue-400/10 rounded-3xl">
            <p className="flex items-center px-2 py-2 text-sm ">
              <Image
                className="mr-2"
                src={icon_balcony}
                alt="Picture of the author"
                width={0}
                height={0}
                sizes="15px"
              />
              Varanda
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

export default PropertyFeatures;
