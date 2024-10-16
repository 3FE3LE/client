// utils/mappers/destinyMapper.ts
import { Destiny } from '@opt/core/interfaces';

export const destinyMapper = (
  destiny: google.maps.places.PlaceResult,
): Destiny => {
  return {
    name: destiny?.name!,
    description: destiny.types?.join(','),
    placeId: destiny.place_id!,
    address: destiny?.formatted_address!,
    city:
      destiny?.address_components?.find(
        (component: any) =>
          component.types[0] === 'administrative_area_level_2',
      )?.long_name ||
      destiny?.address_components?.find(
        (component: any) => component.types[0] === 'locality',
      )?.long_name,
    state: destiny?.address_components?.find(
      (component: any) => component.types[0] === 'administrative_area_level_1',
    )?.long_name,
    country: destiny?.address_components?.find(
      (component: any) => component.types[0] === 'country',
    )?.long_name,
    countryCode: destiny?.address_components?.find(
      (component: any) => component.types[0] === 'country',
    )?.short_name,
    continent: destiny?.address_components?.find(
      (component: any) => component.types[0] === 'country',
    )?.long_name,
    latitude: destiny?.geometry?.location?.lat() || 0,
    longitude: destiny?.geometry?.location?.lng() || 0,
  };
};
