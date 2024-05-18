export interface IFormField {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  maxLength: number;
}

export interface IAuthFormFields {
  [key: string]: IFormField[];
}

export interface IFormData {
  [key: string]: string;
}

export interface IFormConfigurations {
  [key: string]: {
    title: string;
    type: string;
    textFooter: string;
    textButton: string;
  };
}
