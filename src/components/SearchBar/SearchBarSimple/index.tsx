import Input from '@/components/Input';
import { useHandleInputChange } from '@/hooks/useHandleInputChange';
import { TbHomeSearch } from 'react-icons/tb';

const initialData = {
  search: '',
};

const SearchBarSimple: React.FC = () => {
  const { formData, handleInputChange } = useHandleInputChange(initialData);

  const handleSubmit = () => {
    console.log('search');
  };
  return (
    <form className="bg-white w-full rounded-3xl flex flex-col p-4 relative">
      <div className="w-full flex flex-col items-center justify-center ">
        <label htmlFor="search" className="hidden" />
        <Input
          id="search"
          name="search"
          placeholder="Código do imóvel"
          className="w-full h-6"
          value={formData.search}
          onChange={handleInputChange}
          required
        />
        <button
          type="button"
          className="absolute -right-1 rounded-e-3xl p-[13.5px] bg-blue-600 hover:bg-blue-500 flex justify-center items-center"
          onClick={handleSubmit}
        >
          <p className="hidden sm:block text-base mr-2">Buscar imóvel</p>
          <TbHomeSearch size={30} />
        </button>
      </div>
    </form>
  );
};

export default SearchBarSimple;
