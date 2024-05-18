import FormatPhoneNumber from '@/app/functions/FormatPhoneNumber';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { useHandleInputChange } from '@/hooks/useHandleInputChange';
import { IoLogoWhatsapp } from 'react-icons/io5';
const initialData = {
  name: '',
  email: '',
  phoneNumber: '',
};
const WhatsappForm = () => {
  const { formData, handleInputChange } = useHandleInputChange(initialData);

  const error = { hasError: false };

  return (
    <div className="w-full h-[550px] lg:w-96 shadow-custom">
      <div className="flex items-center justify-center h-20 bg-gradient-ctt-immobile">
        <h2 className="text-white font-light flex flex-col text-center">
          Interessado neste imóvel?
          <strong className="font-semibold">Fale conosco!</strong>
        </h2>
      </div>
      <div className="flex flex-col p-8 items-center bg-gradient-blue ">
        <div className="w-full flex justify-center border-b-[1px] pb-7 border-slate-700/20">
          <div className="flex items-end space-x-2">
            <p className="text-sm inline-flex items-center">
              <IoLogoWhatsapp className="text-zinc-500 mr-1" />
              vendas:
            </p>
            <p className="whitespace-nowrap">
              21
              <strong className="text-3xl font-normal ml-2 text-zinc-800/90">
                98682-8876
              </strong>
            </p>
          </div>
        </div>
        <form action="" className="w-full space-y-4 pt-8">
          <div className="flex flex-col">
            <label
              className="text-xs font-semibold text-zinc-800/90 pb-2"
              htmlFor="name"
            >
              NOME
            </label>
            <Input
              id="name"
              type="text"
              className={`default focus:ring-blue-400 indent-2 ${
                error.hasError ? 'ring-red-500' : 'ring-neutral-300'
              }`}
              placeholder="Nome Completo"
              maxLength={50}
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-xs font-semibold text-zinc-800/90 pb-2"
              htmlFor="email"
            >
              E-MAIL
            </label>
            <Input
              id="email"
              type="email"
              className={`default focus:ring-blue-400  indent-2 ${
                error.hasError ? 'ring-red-500' : 'ring-neutral-300'
              }`}
              placeholder="Nome Completo"
              maxLength={50}
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-xs font-semibold text-zinc-800/90 pb-2"
              htmlFor="phoneNumber"
            >
              TELEFONE
            </label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              className={`default focus:ring-blue-400 indent-2 mb-6  ${
                error.hasError ? 'ring-red-500' : 'ring-neutral-300'
              }`}
              placeholder="( )"
              maxLength={15}
              value={FormatPhoneNumber(formData.phoneNumber)}
              onChange={handleInputChange}
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full py-3 bg-gradient-ctt-immobile"
          >
            ESTOU INTERESSADODD
          </Button>
        </form>
      </div>
    </div>
  );
};

export default WhatsappForm;
