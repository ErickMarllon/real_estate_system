import useHandleToggle from '@/hooks/useHandleToggle';
import Link from 'next/link';
import { FC } from 'react';
import { IoIosArrowDown, IoIosList } from 'react-icons/io';
import Button from '../Button';
import { ListItensDropdown } from './ListLinks';
import MenuDropdown from './MenuDropdown';

const Navbar: FC = () => {
  const { isToggleOpen, handleToggle } = useHandleToggle();
  return (
    <>
      <div
        className={`hidden md:flex relative items-center top-[10dvh] bg-transparent z-30  md:top-0 order-2`}
      >
        <ul className="flex items-center flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-5 rtl:space-x-reverse">
          <li>
            <Link
              href="/"
              className="text-md text-white  hover:text-blue-600 "
              onClick={() => isToggleOpen.dropdown && handleToggle('dropdown')}
            >
              Início
            </Link>
          </li>
          <li>
            <Button
              type="button"
              className="btn-default"
              onClick={() => handleToggle('dropdown')}
            >
              Imóveis
              <IoIosArrowDown />
            </Button>
            <MenuDropdown
              listItems={ListItensDropdown.imoveis}
              isToggleOpen={isToggleOpen.dropdown}
              handleToggle={() => handleToggle('dropdown')}
            />
          </li>
          <Link
            href="/duvidas"
            className="text-md text-white hover:text-blue-600 "
            onClick={() => isToggleOpen.dropdown && handleToggle('dropdown')}
          >
            Dúvidas
          </Link>
          <Link
            href="/contato"
            className="text-md text-white hover:text-blue-600 "
            onClick={() => isToggleOpen.dropdown && handleToggle('dropdown')}
          >
            Contato
          </Link>
        </ul>
      </div>

      <Button
        type="button"
        className="btn-header-menu z-50"
        onClick={() => handleToggle('menu')}
      >
        <IoIosList className=" w-10 h-10 " />
      </Button>
      <div
        className={`${
          isToggleOpen.menu
            ? ' visible opacity-100 translate-x-0'
            : 'invisible opacity-0 transform -translate-x-3/4 '
        }
      ease duration-500  block top-[10dvh] left-0 z-40 w-full absolute h-screen md:hidden bg-black/60`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/"
                className="text-md text-white hover:text-blue-600 "
                onClick={() => handleToggle('menu')}
              >
                Início
              </Link>
            </li>
            <li>
              <Button
                type="button"
                className="btn-default"
                onClick={() => handleToggle('dropdown')}
              >
                Imóveis
                <IoIosArrowDown />
              </Button>
              <MenuDropdown
                listItems={ListItensDropdown.imoveis}
                isToggleOpen={isToggleOpen.dropdown}
                handleToggle={() => {
                  handleToggle('dropdown'), handleToggle('menu');
                }}
              />
            </li>
            <li>
              <Link
                href="/duvidas"
                className="text-md text-white hover:text-blue-600 "
                onClick={() => handleToggle('menu')}
              >
                Dúvidas
              </Link>
            </li>
            <li>
              <Link
                href="/contato"
                className="text-md text-white hover:text-blue-600 "
                onClick={() => handleToggle('menu')}
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;
