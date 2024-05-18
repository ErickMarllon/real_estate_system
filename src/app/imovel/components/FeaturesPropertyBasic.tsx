import icon_bathrooms from '@/assets/icons/propertyFeaturesBasic/icon_bathrooms.svg';
import icon_bedrooms from '@/assets/icons/propertyFeaturesBasic/icon_bedrooms.svg';
import icon_buildingArea from '@/assets/icons/propertyFeaturesBasic/icon_buildingArea.svg';
import icon_garagesSpaces from '@/assets/icons/propertyFeaturesBasic/icon_garagesSpaces.svg';

import Image from 'next/image';

interface IProps {
  area: number;
  bathrooms: number;
  bedrooms: number;
  garagesSpaces: number;
}
const FeaturesPropertyBasic: React.FC<IProps> = ({ ...props }) => {
  return (
    <div>
      <h2
        className="text-lg font-semibold text-zinc-700
       mb-6"
      >
        Detalhes
      </h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 text-sm gap-4">
        {props?.area && (
          <li className="flex min-h-16 sm:min-h-10 bg-blue-400/10 rounded-3xl">
            <Image
              className="mx-2"
              src={icon_buildingArea}
              alt="Picture of the author"
              width={0}
              height={0}
              sizes="15px"
            />
            <div className="flex flex-col h-full justify-center text-xs ">
              <p>Área construída</p>
              <p className="text-sm">
                {props.area}m<sup>2</sup>
              </p>
            </div>
          </li>
        )}
        {props?.bedrooms && (
          <li className="flex min-h-16 sm:min-h-10 bg-blue-400/10 rounded-3xl">
            <Image
              className="mx-2"
              src={icon_bedrooms}
              alt="Picture of the author"
              width={0}
              height={0}
              sizes="15px"
            />
            <div className="flex flex-col h-full justify-center text-xs ">
              <p>Quartos</p>
              <p className="text-sm">{props.bedrooms}</p>
            </div>
          </li>
        )}
        {props?.bathrooms && (
          <li className="flex min-h-16 sm:min-h-10 bg-blue-400/10 rounded-3xl">
            <Image
              className="mx-2"
              src={icon_bathrooms}
              alt="Picture of the author"
              width={0}
              height={0}
              sizes="15px"
            />
            <div className="flex flex-col h-full justify-center text-xs ">
              <p>Banheiros</p>
              <p className="text-sm">{props.bedrooms}</p>
            </div>
          </li>
        )}
        {props.garagesSpaces > 0 && (
          <li className="flex min-h-16 sm:min-h-10 bg-blue-400/10 rounded-3xl">
            <Image
              className="mx-2"
              src={icon_garagesSpaces}
              alt="Picture of the author"
              width={0}
              height={0}
              sizes="15px"
            />
            <div className="flex flex-col h-full justify-center text-xs ">
              <p>Vagas na garagem</p>
              <p className="text-sm">{props.garagesSpaces}</p>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
};

export default FeaturesPropertyBasic;
