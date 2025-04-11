export type PropertyType = 'house' | 'apartment' | 'condo' | 'townhouse' | 'land' | 'commercial' | 'industrial';

export type ListingType = 'sale' | 'rent';

export type Amenity = {
  id: string;
  name: string;
  icon?: string;
};

export type PropertyImage = {
  id: string;
  url: string;
  alt: string;
  isPrimary?: boolean;
};

export type Property = {
  id: string;
  title: string;
  description: string;
  price: number;
  previousPrice?: number;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    latitude?: number;
    longitude?: number;
  };
  bedrooms: number;
  bathrooms: number;
  area: number; // in square meters/feet
  propertyType: PropertyType;
  listingType: ListingType;
  images: PropertyImage[];
  amenities: Amenity[];
  featured?: boolean;
  isNew?: boolean;
  yearBuilt?: number;
  garage?: number;
  agentId?: string;
  createdAt: Date;
  updatedAt: Date;
}; 