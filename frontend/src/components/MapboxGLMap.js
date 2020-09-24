import React from "react";
import PropTypes from 'prop-types';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
  // Ensure that you've set an environment variable for your access token in order to use mapbox
  accessToken: process.env.REACT_APP_MAPBOX_KEY
});

const MapboxGLMap = ({ locations }) => {
  
  return (
    <Map
      style="mapbox://styles/forrestwilkins/ckfg22k601swx19pe8dz99ujc"
      containerStyle={{
        height: '80vh',
        width: '100%'
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

MapboxGLMap.propTypes = {
  page: PropTypes.array.isRequired
};

export default MapboxGLMap;



