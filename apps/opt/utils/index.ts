export const getAuthToken = (): string | null => {
  const match = document.cookie.match(new RegExp('(^| )auth_token=([^;]+)'));
  return match ? match[2] : null;
};
// searchUtils.ts
export const fetchPlacePredictions = (
  autocompleteService: google.maps.places.AutocompleteService | null,
  input: string,
  setPredictions: (
    predictions: google.maps.places.AutocompletePrediction[],
  ) => void,
) => {
  if (autocompleteService && input) {
    autocompleteService.getPlacePredictions(
      { input },
      (predictions, status) => {
        if (status === 'OK') setPredictions(predictions || []);
      },
    );
  } else {
    setPredictions([]);
  }
};

export const fetchPlaceDetails = (
  placesService: google.maps.places.PlacesService | null,
  placeId: string,
  handlePlaceSelect: (place: google.maps.places.PlaceResult) => void,
) => {
  if (placesService) {
    placesService.getDetails({ placeId }, (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && place) {
        handlePlaceSelect(place);
      }
    });
  }
};
