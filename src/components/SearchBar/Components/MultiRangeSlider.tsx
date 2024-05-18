import CurrencyFormatter from '@/functions/CurrencyFormatter';
import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';

interface MultiRangeSliderProps {
  min: number;
  max: number;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
const MultiRangeSlider: FC<MultiRangeSliderProps> = ({
  min,
  max,
  handleInputChange,
}) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);
  const discount = max / 10;
  const getPercent = (value: number) =>
    Math.round(((value - min) / (max - min)) * 100);

  useEffect(() => {
    setMinVal(0);
    setMaxVal(max);
  }, [min, max]);

  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxVal);

    range.current &&
      ((range.current.style.left = `${minPercent}%`),
      (range.current.style.width = `${maxPercent - minPercent}%`));
  }, [minVal, maxVal, max]);

  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    name === 'priceMin'
      ? setMinVal(Math.min(+value, maxVal - discount))
      : setMaxVal(Math.max(+value, minVal + discount));
    handleInputChange(e);
  };

  return (
    <div className="w-48 sm:w-44 h-16 ">
      <p className="block font-semibold text-zinc-800/90 ">Preço</p>
      <div className="flex items-center justify-center mt-2">
        <label htmlFor="priceMin" className="hidden" />
        <input
          type="range"
          id="priceMin"
          name="priceMin"
          min={min}
          max={max}
          step={1000}
          value={minVal}
          ref={minValRef}
          onChange={handleSliderChange}
          className="thumb"
        />
        <label htmlFor="priceMax" className="hidden" />
        <input
          type="range"
          id="priceMax"
          name="priceMax"
          min={min}
          max={max}
          step={1000}
          value={maxVal}
          ref={maxValRef}
          onChange={handleSliderChange}
          className="thumb"
        />
        <div className="relative w-[180px]">
          <div className="absolute h-1 rounded-sm w-full z-1 bg-zinc-400/50" />
          <div
            ref={range}
            className="absolute h-1 rounded-sm w-full z-2 bg-blue-300"
          />
          <div className="absolute text-zinc-400 text-[0.7rem] mt-3">
            {CurrencyFormatter(minVal)}
          </div>
          <div className="absolute text-zinc-400 text-[0.7rem] mt-3 right-1">
            {CurrencyFormatter(maxVal)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiRangeSlider;
