import { IFormConfigurations } from './interfaces';

export const AuthActionTypes = {
  login: 'login',
  register: 'register',
};

export const FormConfigurations: IFormConfigurations = {
  login: {
    type: 'login',
    title: 'Acessar',
    textFooter: 'Não tem uma conta?',
    textButton: 'Inscrever-se',
  },
  register: {
    type: 'register',
    title: 'Registre-se',
    textFooter: 'Já tem uma conta?',
    textButton: 'Conecte-se',
  },
};
