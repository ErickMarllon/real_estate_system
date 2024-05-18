import { useState } from 'react';

export function useHandleInputChange<T>(initialData: T) {
  const [formData, setFormData] = useState<T>(initialData);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    const newValue = value.replace(/\s{2,}/g, ' ');

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  return {
    formData,
    setFormData,
    handleInputChange,
  };
}
