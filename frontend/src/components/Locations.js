import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function Locations(props) {

  const [locations, setLocations ] = useState(null);
  
  useEffect(() => {
    fetchingData();
  }, []);
  
  const fetchingData = () => {
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
      <span>{locations ? JSON.stringify(locations) : "No locations were fetched..."}</span>
    </>
  );
};
