import { useHandleInputChange } from '@/hooks/useHandleInputChange';
import { FC, useEffect, useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import Label from '../Label';
import { AuthFormFields } from './AuthFormFields';
import { AuthActionTypes, FormConfigurations } from './constants';
import { initialData } from './initialData';
import { IFormField } from './interfaces';

const AuthForm: FC = () => {
  const { login, register } = AuthActionTypes;
  const [currentType, setCurrentType] = useState<string>(login);
  const { formData, setFormData, handleInputChange } = useHandleInputChange(
    initialData[login],
  );

  const handleAuth = () => {
    setCurrentType(currentType === login ? register : login);
  };

  useEffect(() => {
    setFormData(initialData[currentType]);
  }, [currentType]);
  const error = { hasError: false };
  return (
    <div className="flex min-h-full flex-1 flex-col w-5/12 justify-center items-center px-6 py-12 lg:px-8">
      <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-cyan-950">
        {FormConfigurations[currentType].title}
      </h2>
      <form className="space-y-1" action="#" method="POST">
        {AuthFormFields[currentType].map((field: IFormField) => (
          <div key={field.id}>
            <Label id={field.id} label={field.label} />
            <Input
              id={field.id}
              type={field.type}
              className={`default ${
                error.hasError ? 'ring-red-500' : 'ring-neutral-300'
              }`}
              placeholder={field.placeholder}
              maxLength={field.maxLength}
              value={formData[field.id]}
              onChange={handleInputChange}
              required
            />
          </div>
        ))}
        <div className="py-2">
          <Button
            type="submit"
            className="btn-primary py-2"
            onClick={() => console.log('enviar')}
          >
            {FormConfigurations[currentType].textButton}
          </Button>
        </div>
      </form>
      <p className="mt-3 text-center text-sm font-semibold text-neutral-300">
        {FormConfigurations[currentType].textFooter}

        <Button
          type="button"
          className="btn-auth-footer py-2"
          onClick={handleAuth}
        >
          {FormConfigurations[currentType].textButton}
        </Button>
      </p>
    </div>
  );
};
export default AuthForm;
