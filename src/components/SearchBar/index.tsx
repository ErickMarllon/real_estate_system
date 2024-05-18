import useHandleToggle from '@/hooks/useHandleToggle';
import { FC } from 'react';
import { IoIosRemove, IoMdAdd } from 'react-icons/io';
import SearchBarDetailed from './SearchBarDetailed';
import SearchBarSimple from './SearchBarSimple';

const SearchBar: FC = () => {
  const { isToggleOpen, handleToggle } = useHandleToggle();

  return (
    <div className="px-4 w-full flex flex-col items-center max-w-screen-md">
      <div className="flex relative w-full max-w-64">
        <button
          type="button"
          className={` text-base relative  max-w-32 w-full
          ${
            !isToggleOpen?.isRent &&
            'before:-bottom-[5px] before:w-full before:h-[4px] before:absolute before:rounded-lg before:bg-blue-400 before:z-2'
          }`}
          onClick={() => handleToggle('isRent')}
        >
          Comprar
        </button>
        <button
          type="button"
          className={` text-base relative  max-w-32 w-full 
            ${
              isToggleOpen?.isRent &&
              'before:-bottom-[5px] before:w-full before:h-[4px] before:absolute before:rounded-lg before:bg-blue-400 before:z-2'
            }`}
          onClick={() => handleToggle('isRent')}
        >
          Alugar
        </button>
        <span className="text-base absolute -bottom-1 w-full h-[2px] rounded-lg bg-zinc-400 -px-4 z-1" />
      </div>
      <div className="w-full mt-4 flex">
        {isToggleOpen?.isSearchBarSimple ? (
          <>
            <SearchBarSimple />
          </>
        ) : (
          <SearchBarDetailed
            moreDetails={isToggleOpen?.moreDetails}
            isRent={isToggleOpen?.isRent}
          />
        )}
      </div>
      <div className="flex relative w-full max-w-64 mt-2 justify-center">
        {!isToggleOpen?.isSearchBarSimple && (
          <button
            type="button"
            className=" text-base relative  max-w-32 w-full "
            onClick={() => handleToggle('moreDetails')}
          >
            Detalhes
            {!isToggleOpen?.moreDetails ? (
              <IoMdAdd className="ml-1" />
            ) : (
              <IoIosRemove className="ml-1" />
            )}
          </button>
        )}
        <button
          type="button"
          onClick={() => handleToggle('isSearchBarSimple')}
          className=" text-base relative  max-w-32 w-full sm:whitespace-nowrap"
        >
          {!isToggleOpen?.isSearchBarSimple
            ? 'Buscar por código'
            : 'Detalhes +'}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
