import { IAuthFormFields } from './interfaces';

const sharedFields = {
  email: {
    label: 'E-mail:',
    id: 'email',
    type: 'email',
    placeholder: 'exemplo@exemplo.com',
    maxLength: 30,
  },
  password: {
    label: 'Senha:',
    id: 'password',
    type: 'password',
    placeholder: 'Digite sua senha',
    maxLength: 20,
  },
};

export const AuthFormFields: IAuthFormFields = {
  login: [sharedFields.email, sharedFields.password],
  register: [
    {
      label: 'Name:',
      id: 'name',
      type: 'text',
      placeholder: 'Nome Completo',
      maxLength: 20,
    },
    {
      label: 'Telefone:',
      id: 'phoneNumber',
      type: 'text',
      placeholder: '(00) 00000-0000',
      maxLength: 11,
    },
    sharedFields.email,
    sharedFields.password,
  ],
};
