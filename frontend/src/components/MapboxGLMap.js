import React, { useEffect } from "react";
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
  accessToken:
    process.env.REACT_APP_MAPBOX_KEY
});

const MapboxGLMap = ({ locations }) => {

  
  return (
    <Map
      style="mapbox://styles/forrestwilkins/ckfg22k601swx19pe8dz99ujc"
      containerStyle={{
        height: '50vh',
        width: '50vw'
      }}
      center={[-98.5795, 39.8283]}
      zoom={[3]}
    >
      <Layer type="symbol" id="marker" layout={{ 'icon-image': 'Google_Maps_pin' }}>
        {
          locations.map((location, key) =>
            <Feature
              key={key}
              coordinates={[location.geometry.location.lng, location.geometry.location.lat]}
            />
          )
        }
      </Layer>
    </Map>
  )
};

export default MapboxGLMap;



