'use client';
import {
  Globe,
  Info,
  Map,
  MapPin,
  Search,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

import { ActionButton, Card, InputField } from '@repo/ui';
import { useMap, useMapsLibrary } from '@vis.gl/react-google-maps';

export function CustomMapControl() {
  const map = useMap();
  const placesLibrary = useMapsLibrary('places');

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

  // Debounce function to delay the search
  const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  // Inicializa los servicios de Google Places cuando estén disponibles
  useEffect(() => {
    if (placesLibrary && map) {
      setAutocompleteService(new placesLibrary.AutocompleteService());
      setPlacesService(new placesLibrary.PlacesService(map));
    }
  }, [placesLibrary, map]);

  // Función para realizar la búsqueda con debounce
  const debouncedSearch = useCallback(
    debounce((input: string) => {
      if (autocompleteService && input) {
        autocompleteService.getPlacePredictions(
          { input },
          (predictions, status) => {
            if (status === 'OK') setPredictions(predictions!);
          },
        );
      } else {
        setPredictions([]);
      }
    }, 500), // 500ms de delay
    [autocompleteService],
  );

  // Actualiza las predicciones de búsqueda cuando cambia el input
  useEffect(() => {
    if (searchInput) {
      debouncedSearch(searchInput);
    }
  }, [searchInput, debouncedSearch]);

  // Agrega un marcador en el mapa
  const addMarker = useCallback(
    (position: google.maps.LatLngLiteral, title: string = 'Nuevo destino') => {
      map?.setCenter(position);
      new google.maps.Marker({
        position,
        map,
        title,
      });
    },
    [map],
  );

  // Ajusta el zoom del mapa
  const adjustZoom = useCallback(
    (direction: 'in' | 'out') => {
      if (map) {
        const zoom = map.getZoom() || 0;
        map.setZoom(direction === 'in' ? zoom + 1 : zoom - 1);
      }
    },
    [map],
  );

  // Alterna entre el mapa de carretera y satélite
  const toggleMapType = useCallback(() => {
    if (map) {
      const newType =
        mapType === google.maps.MapTypeId.ROADMAP
          ? google.maps.MapTypeId.SATELLITE
          : google.maps.MapTypeId.ROADMAP;
      map.setMapTypeId(newType);
      setMapType(newType);
    }
  }, [map, mapType]);

  // Maneja la selección de un lugar en el mapa
  const handlePlaceSelect = (place: google.maps.places.PlaceResult) => {
    if (place.geometry?.location) {
      map?.panTo(place.geometry.location);
      map?.setZoom(15);
      addMarker(place.geometry.location.toJSON(), place.name || 'Seleccionado');
      setPlaceInfo(place);
      console.log(placeInfo);
    }
  };

  // Maneja la búsqueda en el input
  const handleSearch = () => {
    if (autocompleteService && placesService)
      autocompleteService.getPlacePredictions(
        { input: searchInput },
        (predictions, status) => {
          if (
            status === google.maps.places.PlacesServiceStatus.OK &&
            predictions?.length
          )
            placesService.getDetails(
              { placeId: predictions[0].place_id },
              (place, detailStatus) => {
                if (
                  detailStatus === google.maps.places.PlacesServiceStatus.OK &&
                  place
                )
                  handlePlaceSelect(place);
              },
            );
        },
      );
  };

  // Maneja el click en una predicción del autocompletado
  const handlePredictionClick = (description: string) => {
    setSearchInput(description);
    handleSearch();
  };

  return (
    <Card>
      <div className="p-4">
        <div className="flex flex-col space-y-2">
          <div className="flex space-x-2">
            <InputField
              name="Search"
              placeholder="your destination"
              value={searchInput}
              handleChange={setSearchInput}
              handleSubmit={handleSearch}
            >
              <ActionButton onClick={handleSearch}>
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
              onClick={() =>
                addMarker(map?.getCenter()?.toJSON() || { lat: 0, lng: 0 })
              }
            >
              <MapPin />
            </ActionButton>
            <ActionButton onClick={() => adjustZoom('in')}>
              <ZoomIn />
            </ActionButton>
            <ActionButton onClick={() => adjustZoom('out')}>
              <ZoomOut />
            </ActionButton>
            <ActionButton onClick={toggleMapType}>
              {mapType === google.maps.MapTypeId.ROADMAP ? <Globe /> : <Map />}
            </ActionButton>
          </div>
          {placeInfo && (
            <div className="mt-2 p-2 bg-muted rounded-md">
              <h3 className="font-semibold flex items-center">
                <ActionButton>
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
                    // width={350}
                    // height={350}
                    sizes="(max-width: 480px) "
                    quality={80}
                    // placeholder="blur"
                    style={{ objectFit: 'cover' }}
                    loading="lazy"
                    fill
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
