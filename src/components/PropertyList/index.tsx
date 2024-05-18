import { IPropertyList } from '@/interfaces/IProperties';
import React from 'react';
import PropertyCard from '../PropertyCard';

const PropertyList: React.FC<IPropertyList> = ({ properties }) => {
  return (
    <ul className="flex max-w-screen-xl flex-wrap items-center justify-center gap-6">
      {properties &&
        properties.map((property) => (
          <li key={property.id}>
            <PropertyCard property={property} hasCarousel />
          </li>
        ))}
    </ul>
  );
};

export default PropertyList;
