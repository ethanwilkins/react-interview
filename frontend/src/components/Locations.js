import React, { useState, useEffect } from 'react';
import axios from "axios";

import styles from '../styles/Locations.module.scss';
import MapboxGLMap from './MapboxGLMap';

export default function Locations(props) {

  const [locations, setLocations ] = useState(null);
  
  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = () => {
    axios
      .get("http://127.0.0.1:12059/react-interview/getLowesStores")
      .then(response => {

         console.log('response',response.data)

         setLocations(response.data)
       }) // you have array in your response.data so add your data here
      .catch(err => alert(err));
  };
  
  return (
    <>
      {locations ? locations.map((item,i) => <li className={styles.item} key={i}>{JSON.stringify(item)}</li>) : 'Loading...'}
      <MapboxGLMap />
    </>
  );
};
