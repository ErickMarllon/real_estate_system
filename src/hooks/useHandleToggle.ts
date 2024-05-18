import { useState } from 'react';
interface IToggle {
  [key: string]: boolean;
}

const useHandleToggle = () => {
  const [isToggleOpen, setIsToggleOpen] = useState<IToggle>({});

  const handleToggle = (key: string) => {
    setIsToggleOpen((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return {
    isToggleOpen,
    handleToggle,
  };
};

export default useHandleToggle;
