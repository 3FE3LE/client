export interface Destiny {
  id?: string;
  name: string;
  description?: string;
  placeId?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  countryCode?: string;
  continent?: string;
  latitude: number;
  longitude: number;
  createdAt?: Date;
  // No incluimos trips ni activities aquí para evitar referencias circulares
}
