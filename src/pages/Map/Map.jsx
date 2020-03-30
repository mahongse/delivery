import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import Grid from '@material-ui/core/Grid';
import PinkPin from '../../assets/pin-pink.png';
import BluePin from '../../assets/pin-blue.png';
import BlackPin from '../../assets/pin-black.png';
import styles from '../../mapStyles';

const mapStyles = {
  height: "100vh",
  width: "100vw"
};

const defaultCenter = { lat: 40.179188, lng: 44.499104 };

const Map = ({ data }) => {
  const [selectedAddress, setSelectedAddress] = useState(null);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <LoadScript
        googleMapsApiKey='AIzaSyD96_6J_OqRG6t_GpMuHnCQG-A6dGe8sdE'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
          options={{
            styles: styles,
          }}
        >
          {data.map(item => (
            <Marker
              key={item.id}
              position={item.address.position}
              icon={{
                url: `${item.status ? PinkPin : item.done ? BluePin : BlackPin}`,
                scaledSize: { height: 30, width: 30 },
                style: { color: '#000' }
              }}
              onClick={() => setSelectedAddress(item)}
            />
          ))}

          {selectedAddress && (
            <InfoWindow
              position={selectedAddress.address.position}
              onCloseClick={() => setSelectedAddress(null)}
            >
              <div style={{ color: '#000' }}>
                <h3>{selectedAddress.address.name}</h3>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </Grid>
  )
}

export default Map;