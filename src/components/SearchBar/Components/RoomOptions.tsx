import Input from '@/components/Input';
import React, { ChangeEvent } from 'react';

interface RoomOptionProps {
  roomLabel: string;
  optionsQtd: number[];
  formData: { [key: string]: string | number };
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const RoomOptions: React.FC<RoomOptionProps> = ({
  roomLabel,
  optionsQtd,
  formData,
  handleInputChange,
}) => {
  return (
    <div className="w-48 sm:w-44 h-16 ">
      <p className="font-semibold text-zinc-800/90">{roomLabel}</p>
      <div className="flex w-32 justify-between">
        {optionsQtd.map((quantity) => (
          <div
            className="relative flex items-center justify-center size-6"
            key={`${roomLabel}_${quantity}`}
          >
            <label
              htmlFor={`${roomLabel}_${quantity}`}
              className="text-sm font-semibold text-blue-500 z-10 cursor-pointer"
            >
              {quantity}
              {optionsQtd && optionsQtd.length === quantity && '+'}
            </label>
            <Input
              type="radio"
              id={`${roomLabel}_${quantity}`}
              name={roomLabel}
              value={quantity.toString()}
              checked={false}
              className={`radio 
                ${
                  formData[roomLabel] === quantity.toString()
                    ? 'bg-blue-300/70 ring-blue-500 focus:ring-0'
                    : 'bg-blue-300/30'
                } hover:bg-blue-300/70`}
              onChange={handleInputChange}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomOptions;
