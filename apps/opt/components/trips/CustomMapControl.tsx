'use client';
import {
  ArrowLeft,
  Globe,
  Info,
  Map,
  MapPin,
  Search,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

import { Destiny } from '@opt/core/interfaces';
import { debounce } from '@opt/helpers';
import { updateTrip } from '@opt/integration/actions/TripActions';
import { createGlobalHooks } from '@opt/integration/hooks';
import { useMapControls } from '@opt/integration/hooks/TripHooks';
import { destinyMapper } from '@opt/mappings';
import { useRouter } from '@opt/navigations';
import { useDestinyStore, useTripStore } from '@opt/store';
import { fetchPlaceDetails, fetchPlacePredictions } from '@opt/utils';
import { ActionButton, Card, InputField } from '@repo/ui';
import { useMap, useMapsLibrary } from '@vis.gl/react-google-maps';

export function CustomMapControl() {
  const map = useMap();
  const placesLibrary = useMapsLibrary('places');
  const router = useRouter();
  const { destiny, setDestiny, searchInput, setSearchInput, reset } =
    useDestinyStore();
  const { trip } = useTripStore();
  const { useAction: action } = createGlobalHooks('/trips');

  const { addMarker, adjustZoom, toggleMapType } = useMapControls(map);

  const [predictions, setPredictions] = useState<
    google.maps.places.AutocompletePrediction[]
  >([]);
  const [autocompleteService, setAutocompleteService] =
    useState<google.maps.places.AutocompleteService | null>(null);
  const [placesService, setPlacesService] =
    useState<google.maps.places.PlacesService | null>(null);

  useEffect(() => {
    if (placesLibrary && map) {
      setAutocompleteService(new placesLibrary.AutocompleteService());
      setPlacesService(new placesLibrary.PlacesService(map));
    }
  }, [placesLibrary, map]);

  const debouncedSearch = debounce((input: string) => {
    fetchPlacePredictions(autocompleteService, input, setPredictions);
  }, 500);

  useEffect(() => {
    if (searchInput) {
      debouncedSearch(searchInput);
    }
  }, [searchInput, debouncedSearch]);

  const handleSearch = (placeId: string) => {
    if (autocompleteService && placesService && placeId) {
      fetchPlaceDetails(placesService, placeId, (placeDetails) => {
        setDestiny(placeDetails);
        // Centramos el mapa en la ubicación obtenida
        if (placeDetails.geometry?.location) {
          const location = placeDetails.geometry.location;
          map?.panTo(location);
          addMarker(location.toJSON(), placeDetails.name!);
        }
      });
    }
  };

  const handlePredictionClick = (placeId: string) => {
    handleSearch(placeId); // Llamamos a handleSearch pasando el ID de la predicción seleccionada
  };

  const handleSaveDestiny = async () => {
    toast.loading('Saving destiny...');
    const newDestiny: Destiny = destinyMapper(destiny!);
    const { isError } = await action(updateTrip, [
      trip.id,
      { ...trip, destinies: [...trip.destinies!, newDestiny] },
    ]);
    if (isError) {
      toast.error(isError);
      return;
    }
    toast.success('Destiny saved successfully!');
    reset();
    router.back();
  };

  return (
    <Card>
      <ActionButton type="icon" onClick={() => router.back()}>
        <ArrowLeft />
      </ActionButton>
      <div className="flex space-x-2">
        <InputField
          name="Search"
          placeholder="your destiny"
          value={searchInput}
          handleChange={setSearchInput}
          handleSubmit={() => handleSearch(predictions[0]?.place_id || '')}
        >
          <ActionButton
            type="icon"
            onClick={() => handleSearch(predictions[0]?.place_id || '')}
          >
            <Search />
          </ActionButton>
        </InputField>
      </div>
      {predictions.length > 0 && (
        <div className="border rounded-md p-2">
          <h5>Related locations</h5>
          <ul>
            {predictions.map((prediction) => (
              <li
                key={prediction.place_id}
                onClick={() => handlePredictionClick(prediction.place_id)}
              >
                {prediction.description}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="flex justify-between">
        <ActionButton
          type="icon"
          onClick={() =>
            addMarker(
              destiny?.geometry?.location?.toJSON() || { lat: 0, lng: 0 },
              destiny?.name!,
            )
          }
        >
          <MapPin />
        </ActionButton>
        <ActionButton type="icon" onClick={() => adjustZoom('in')}>
          <ZoomIn />
        </ActionButton>
        <ActionButton type="icon" onClick={() => adjustZoom('out')}>
          <ZoomOut />
        </ActionButton>
        <ActionButton type="icon" onClick={toggleMapType}>
          {google.maps.MapTypeId.ROADMAP === map?.getMapTypeId() ? (
            <Map />
          ) : (
            <Globe />
          )}
        </ActionButton>
      </div>
      {destiny && (
        <div className="mt-2 p-2 bg-muted rounded-md">
          <h3 className="font-semibold flex items-center">
            <ActionButton type="icon">
              <Info />
            </ActionButton>
            Información del lugar
          </h3>
          <p className="text-sm">{destiny.name}</p>
          <p className="text-sm">{destiny.formatted_address}</p>
          {destiny.rating && (
            <p className="text-sm">Rating: {destiny.rating} / 5</p>
          )}
          {destiny.photos && (
            <div style={{ position: 'relative', height: '200px' }}>
              <Image
                className="w-full h-auto object-cover"
                src={destiny.photos[0]?.getUrl()}
                alt={destiny.name!}
                sizes="(max-width: 480px)"
                quality={80}
                style={{ objectFit: 'cover' }}
                loading="lazy"
                fill
              />
            </div>
          )}
          <ActionButton
            variant="primary"
            size="small"
            onClick={handleSaveDestiny}
          >
            Save Destiny
          </ActionButton>
        </div>
      )}
    </Card>
  );
}
