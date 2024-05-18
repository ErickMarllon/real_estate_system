export interface IProperty {
  id: number;
  slug: string;
  typeProperty: string;
  price: number;
  prevPrice?: number;
  title: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  garagesSpaces: number;
  area: number;
  propertyFeatures: {
    airConditioning: boolean;
    serviceArea: boolean;
    cabinetsKitchen: boolean;
    closetsBedroom: boolean;
    grill: boolean;
    furnished: boolean;
    serviceRoom: boolean;
    balcony: boolean;
    pool: boolean;
  };
  condominiumFeatures: {
    academy: boolean;
    electronicGate: boolean;
    gatedCommunity: boolean;
    petsAllowed: boolean;
    pool: boolean;
    security: boolean;
    walledArea: boolean;
  };
  address: {
    street: string;
    streetNumber?: string;
    cep?: string;
    city?: string;
    uf?: string;
    neighborhood?: string;
    complement?: string;
  };
  images: {
    id: string;
    src: string;
    alt: string;
  }[];
}

export interface IPropertyList {
  properties: IProperty[];
}
export interface IPropertyCardProps {
  property: IProperty;
}
