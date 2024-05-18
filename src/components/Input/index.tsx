import { FC, InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  // passar as props caso necessário
  // variant?: string;
  // additionalClass?: string;
  // error?: {
  //   hasError?: boolean;
  //   message?: string;
  //   path?: string;
  // };
  // success?: boolean;
  // disabled?: boolean;
  // hidden?: boolean;
}
const Input: FC<Props> = ({ ...props }) => {
  return <input name={props.id} {...props} />;
};
export default Input;
