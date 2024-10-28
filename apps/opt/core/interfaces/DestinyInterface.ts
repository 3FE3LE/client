import { UUID } from 'crypto';

export interface Destiny {
  readonly id?: UUID;
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
  readonly createdAt?: Date;
  // No incluimos trips ni activities aquí para evitar referencias circulares
}
