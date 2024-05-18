import { IFormData } from './interfaces';

export const initialData: { [key: string]: IFormData } = {
  login: {
    email: '',
    password: '',
  },
  register: {
    phoneNumber: '',
    name: '',
    email: '',
    password: '',
  },
};
