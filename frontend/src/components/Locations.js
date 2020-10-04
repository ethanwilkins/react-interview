import React, { useState, useEffect } from 'react';
import axios from "axios";

import { Spinner } from 'react-bootstrap';
import MapboxGLMap from './MapboxGLMap';

export default function Locations() {

  const [locations, setLocations ] = useState(null);
  
  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = () => {
    axios
      .get("http://127.0.0.1:12059/react-interview/getLowesStores")
      .then(response => {
         setLocations(response.data)
       })
      .catch(err => alert(err));
  };
  
  return (
    <>
      {!locations &&
        <Spinner animation="border" variant="success" size="sm" />
      }
      {locations &&
        <MapboxGLMap locations={locations} />
      }
    </>
  );
};
