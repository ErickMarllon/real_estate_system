import { FC, LabelHTMLAttributes } from 'react';

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
  variant?: string;
  disabled?: boolean;
  label?: string;
  size?: string;
}

const Label: FC<Props> = ({ size = 'sm', ...props }) => {
  return (
    <label
      htmlFor={props.id}
      className={`block text-${size} font-semibold leading-6 text-cyan-950`}
    >
      {props.label}
    </label>
  );
};
export default Label;
