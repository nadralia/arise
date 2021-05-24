import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// AIzaSyAArBzVCXw8OSDV3GNDtoKLzcGCasWGaUQ

const containerStyle = {
  maxWidth: '1400px',
  height: '600px',
};

const center = {
  lat: 0.322985114134563,
  lng: 32.57803308928811,
};

function MapComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAArBzVCXw8OSDV3GNDtoKLzcGCasWGaUQ">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        {/* Child components, such as markers, info windows, etc. */}
        <Marker position={{ lat: 0.322985114134563, lng: 32.57803308928811 }} />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MapComponent);
