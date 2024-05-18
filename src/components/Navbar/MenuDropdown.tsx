import Link from 'next/link';
import { FC } from 'react';

export interface Ilink {
  label: string;
  href?: string;
  slug?: string;
}

interface Props {
  listItems: Ilink[];
  isToggleOpen?: boolean;
  handleToggle: () => void;
}

const MenuDropdown: FC<Props> = ({ ...props }) => {
  return (
    <>
      {props.listItems && (
        <div
          className={`${
            props.isToggleOpen
              ? 'opacity-100 visible h-[110px] md:h-auto translate-x-0 '
              : 'opacity-0 invisible h-0 md:h-auto -translate-y-1/4'
          } flex top-7 w-full ease duration-500 text-sm md:absolute md:w-auto  md:bg-white  md:border-neutral-100 rounded-lg md:shadow-custom`}
        >
          <div className="p-4 pb-0 md:pb-4 ">
            <ul className="space-y-4 flex flex-col">
              {props.listItems &&
                props.listItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href || ''}
                    className="text-sm text-neutral-200 md:text-neutral-500 font-semibold hover:text-blue-600 "
                    onClick={() => props.handleToggle()}
                  >
                    {item.label}
                  </Link>
                ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuDropdown;
