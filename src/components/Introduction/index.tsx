import { StaticImageData } from 'next/image';
import { FC, HTMLAttributes } from 'react';
import SearchBar from '../SearchBar';

interface Props extends HTMLAttributes<HTMLDivElement> {
  variant?: string;
  src: StaticImageData;
  alt: string;
  title?: string;
  subtitle?: string;
  hasSearch: boolean;
  searchDetailed?: boolean;
  bgFilter?: string;
}
const Introduction: FC<Props> = ({ ...props }) => {
  return (
    <section
      className={`
    w-full relative flex flex-col justify-center items-center  
 min-h-[100dvh] sm:min-h-[90dvh] h-auto bg-after bg-cover bg-bottom bg-no-repeat
    before:absolute before:w-full before:h-full before:z-1 before:content-center
    ${props.bgFilter && props.bgFilter} 
  `}
      style={{
        backgroundImage: `url(${props.src.src})`,
      }}
    >
      <div className="flex flex-col px-4 my-[40dvh] smm:my-[20dvh] z-10 items-center w-full">
        <h1 className="text-white text-title text-center font-semibold">
          {props.title}
        </h1>
        {props.subtitle && (
          <p className="text-neutral-200 text-sm text-center -mt-2 mb-3 font-semibold">
            {props.subtitle}
          </p>
        )}
        {props.hasSearch && <SearchBar />}
      </div>
    </section>
  );
};

export default Introduction;
