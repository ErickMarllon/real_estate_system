import cities from '@/Mocks/searchCityListMock.json';
import neighborhood from '@/Mocks/searchNeighborhoodsMock.json';
import propertyType from '@/Mocks/searchPropertyTypeMock.json';
import { useHandleInputChange } from '@/hooks/useHandleInputChange';
import React from 'react';
import { TbHomeSearch } from 'react-icons/tb';
import MultiRangeSlider from '../Components/MultiRangeSlider';
import RoomOptions from '../Components/RoomOptions';
import Select from '../Components/Select';

const initialData = {
  propertyType: '',
  city: '',
  neighborhoods: '',
  Dormitórios: '',
  Suítes: '',
  Banheiros: '',
  Garagem: '',
  priceMin: '',
  priceMax: '',
};
interface IProps {
  moreDetails?: boolean;
  isRent?: boolean;
}
const rooms = [
  { id: 1, label: 'Dormitórios' },
  { id: 2, label: 'Suítes' },
  { id: 3, label: 'Banheiros' },
  { id: 4, label: 'Garagem' },
];
const optionsQtd = Array.from({ length: 4 }, (_, i) => i + 1);

const SearchBarDetailed: React.FC<IProps> = ({ ...props }) => {
  const { formData, handleInputChange } = useHandleInputChange(initialData);

  const neighborhoodsList =
    formData.city !== '' &&
    neighborhood[formData.city as keyof typeof neighborhood];

  return (
    <form className="bg-white w-full space-y-2 rounded-3xl flex justify-center items-center flex-col p-4">
      <div className="flex flex-wrap w-full justify-center items-center">
        <Select
          label="Tipo de Imóvel"
          id="propertyType"
          name="propertyType"
          options={propertyType.map((el) => ({
            value: el.name,
            label: el.name,
          }))}
          handleInputChange={handleInputChange}
        />
        <Select
          label="Cidade"
          id="city"
          name="city"
          options={cities.map((el) => ({
            value: el.abbreviation,
            label: el.name,
          }))}
          handleInputChange={handleInputChange}
        />
        <Select
          label="Bairro"
          id="neighborhoods"
          name="neighborhoods"
          options={
            neighborhoodsList
              ? neighborhoodsList.map((el) => ({
                  value: el.name,
                  label: el.name,
                }))
              : []
          }
          handleInputChange={handleInputChange}
        />
        <MultiRangeSlider
          min={0}
          max={props?.isRent ? 100000 : 1000000}
          handleInputChange={handleInputChange}
        />
      </div>
      {props?.moreDetails && (
        <div className="flex flex-wrap w-full justify-center items-center">
          {rooms.map((room) => (
            <RoomOptions
              key={room.id}
              roomLabel={room.label}
              optionsQtd={optionsQtd}
              formData={formData}
              handleInputChange={handleInputChange}
            />
          ))}
        </div>
      )}

      <div className="w-full flex justify-center">
        <div className="flex justify-center w-full max-w-sm">
          <button
            type="submit"
            className="p-3 text-base bg-blue-600 hover:bg-blue-500 flex justify-center items-center w-full sm:w-60"
            onClick={() => console.log('search')}
          >
            Buscar Imóvel
            <TbHomeSearch size={30} className="ml-2" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBarDetailed;
