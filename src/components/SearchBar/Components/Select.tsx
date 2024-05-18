import React, { ChangeEvent } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

interface Option {
  value: string;
  label: string;
}

interface SelectComponentProps {
  label: string;
  id: string;
  name: string;
  options: Option[];
  handleInputChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectComponentProps> = ({
  label,
  id,
  name,
  options,
  handleInputChange,
}) => {
  return (
    <div className="w-48 sm:w-44 h-16 ">
      <label
        htmlFor={id}
        className="block font-semibold text-zinc-800/90 text-left"
      >
        {label}
      </label>
      <div className="inline-flex items-center justify-center relative w-40">
        <div className="absolute order-2 inline-flex w-6 justify-between -right-0 z-0">
          <span className="bg-zinc-800/50 w-[1px] h-4 " />
          <IoIosArrowDown size={15} className="text-zinc-800/50" />
        </div>
        <select
          id={id}
          name={name}
          className="appearance-none cursor-pointer z-10 pl-2  -ml-2 bg-transparent w-full pr-6 whitespace-nowrap text-ellipsis"
          onChange={handleInputChange}
        >
          <option defaultValue="" hidden>
            Selecione...
          </option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
