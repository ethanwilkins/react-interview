import React, { useState, useEffect } from 'react';
import axios from "axios";

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
      {locations ? locations.map((item,i) => <li key={i}>{JSON.stringify(item)}</li>) : 'Loading...'}
    </>
  );
};
