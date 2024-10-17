import { GoogleMaps } from '@opt/components/trips';

export default function MapPage() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  return <GoogleMaps apiKey={apiKey!} />;
}
