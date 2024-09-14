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

import { debounce } from '@opt/helpers';
import { useMapControls } from '@opt/integration/hooks/TripHooks';
import { useRouter } from '@opt/navigations';
import { fetchPlaceDetails, fetchPlacePredictions } from '@opt/utils';
import { ActionButton, Card, InputField } from '@repo/ui';
import { useMap, useMapsLibrary } from '@vis.gl/react-google-maps';

export function CustomMapControl() {
  const map = useMap();
  const placesLibrary = useMapsLibrary('places');
  const router = useRouter();

  const { addMarker, adjustZoom, toggleMapType } = useMapControls(map);

  const [mapType, setMapType] = useState<google.maps.MapTypeId>(
    google.maps.MapTypeId.ROADMAP,
  );
  const [placeInfo, setPlaceInfo] =
    useState<google.maps.places.PlaceResult | null>(null);
  const [searchInput, setSearchInput] = useState('');
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

  const handleSearch = () => {
    if (autocompleteService && placesService && searchInput) {
      fetchPlaceDetails(
        placesService,
        predictions[0]?.place_id || '',
        setPlaceInfo,
      );
    }
  };

  const handlePredictionClick = (description: string) => {
    setSearchInput(description);
    handleSearch();
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
          handleSubmit={handleSearch}
        >
          <ActionButton type="icon" onClick={handleSearch}>
            <Search />
          </ActionButton>
        </InputField>
      </div>
      {predictions.length > 0 && (
        <div className="border rounded-md p-2">
          <h5>Related locations</h5>
          {predictions.map((prediction) => (
            <p
              onClick={() => handlePredictionClick(prediction.description)}
              key={prediction.place_id}
            >
              {prediction.description}
            </p>
          ))}
        </div>
      )}
      <div className="flex justify-between">
        <ActionButton
          type="icon"
          onClick={() =>
            addMarker(map?.getCenter()?.toJSON() || { lat: 0, lng: 0 })
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
          {mapType === google.maps.MapTypeId.ROADMAP ? <Globe /> : <Map />}
        </ActionButton>
      </div>
      {placeInfo && (
        <div className="mt-2 p-2 bg-muted rounded-md">
          <h3 className="font-semibold flex items-center">
            <ActionButton type="icon">
              <Info />
            </ActionButton>
            Información del lugar
          </h3>
          <p className="text-sm">{placeInfo.name}</p>
          <p className="text-sm">{placeInfo.formatted_address}</p>
          {placeInfo.rating && (
            <p className="text-sm">Rating: {placeInfo.rating} / 5</p>
          )}
          {placeInfo.photos && (
            <div style={{ position: 'relative', height: '200px' }}>
              <Image
                className="w-full h-auto object-cover"
                src={placeInfo.photos[0]?.getUrl()}
                alt={placeInfo.name!}
                sizes="(max-width: 480px)"
                quality={80}
                style={{ objectFit: 'cover' }}
                loading="lazy"
                fill
              />
            </div>
          )}
        </div>
      )}
    </Card>
  );
}
