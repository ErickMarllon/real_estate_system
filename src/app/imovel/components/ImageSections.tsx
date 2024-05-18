import Image from 'next/image';

interface IProps {
  imgs: {
    id: number | string;
    src: string;
    alt: string;
  }[];
}
const ImageSections: React.FC<IProps> = ({ ...props }) => {
  const fiveFirstImg = props.imgs.slice(0, 5);
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-2">
      {fiveFirstImg.map((img, index) => (
        <div
          key={index}
          className={`overflow-hidden aspect-square ${
            index === 0
              ? 'row-span-2 col-span-2 rounded-s-3xl'
              : index === 2
              ? 'rounded-tr-3xl'
              : index === 4
              ? 'rounded-br-3xl'
              : ''
          }`}
        >
          <Image
            className="w-full h-full object-cover hover:scale-110 duration-500"
            src={img.src}
            alt={img.alt}
            width={0}
            height={0}
            sizes="100%"
            quality={100}
            priority
          />
        </div>
      ))}
      {/* <div className="row-span-2 col-span-2 rounded-s-3xl overflow-hidden aspect-square">
        <Image
          className="w-full h-full object-cover hover:scale-110 duration-500"
          src={fiveFirstImg[0].src}
          alt={fiveFirstImg[0].alt}
          width={0}
          height={0}
          sizes="100"
          quality={100}
          priority
        />
      </div>
      <div className="overflow-hidden aspect-square">
        <Image
          className="w-full h-full object-cover hover:scale-110 duration-500"
          src={fiveFirstImg[1].src}
          alt={fiveFirstImg[1].alt}
          width={0}
          height={0}
          sizes="100"
          quality={100}
          priority
        />
      </div>
      <div className="rounded-tr-3xl overflow-hidden aspect-square">
        <Image
          className="w-full h-full object-cover hover:scale-110 duration-500"
          src={fiveFirstImg[2].src}
          alt={fiveFirstImg[2].alt}
          width={0}
          height={0}
          sizes="100"
          quality={100}
          priority
        />
      </div>
      <div className="overflow-hidden aspect-square">
        <Image
          className="w-full h-full object-cover hover:scale-110 duration-500"
          src={fiveFirstImg[3].src}
          alt={fiveFirstImg[3].alt}
          width={0}
          height={0}
          sizes="100"
          quality={100}
          priority
        />
      </div>
      <div className="rounded-br-3xl overflow-hidden aspect-square">
        <Image
          className="w-full h-full object-cover hover:scale-110 duration-500"
          src={fiveFirstImg[4].src}
          alt={fiveFirstImg[4].alt}
          width={0}
          height={0}
          sizes="100"
          quality={100}
          priority
        />
      </div> */}
    </div>
  );
};

export default ImageSections;
