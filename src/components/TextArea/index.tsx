import { FC, TextareaHTMLAttributes } from 'react';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: string;
  error?: {
    hasError?: boolean;
    message?: string;
    path?: string;
  };
  success?: boolean;
  disabled?: boolean;
  hidden?: boolean;
  additionalclass?: string;
}
const TextArea: FC<Props> = ({ variant = 'default', ...props }) => {
  return <textarea name={props.id} {...props} />;
};
export default TextArea;
