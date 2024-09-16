'use client';
import {
  APIProvider,
  ControlPosition,
  Map,
  MapControl,
} from '@vis.gl/react-google-maps';

import { CustomMapControl } from './CustomMapControl';
import { MarkerWithInfoWindow } from './MarkerWithInfoWindow';

export const GoogleMaps = ({ apiKey }: { apiKey: string }) => {
  return (
    <APIProvider apiKey={apiKey}>
      <Map
        style={{
          width: '100vw',
          height: '100vh',
          margin: '-16px',
        }}
        defaultCenter={{ lat: 7.06222, lng: -73.08644 }}
        defaultZoom={13}
        disableDefaultUI={true}
        gestureHandling={'greedy'}
        mapId={'d6e71f13d7bd1b3f'}
      >
        <MapControl position={ControlPosition.LEFT_TOP}>
          <CustomMapControl />
        </MapControl>
        <MarkerWithInfoWindow />
      </Map>
    </APIProvider>
  );
};
