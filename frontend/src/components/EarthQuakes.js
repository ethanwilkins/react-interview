import React, { useState, useEffect } from 'react';
import axios from "axios";

import { Spinner } from 'react-bootstrap';

import { CsvToHtmlTable } from 'react-csv-to-table';

import styles from '../styles/EarthQuakes.module.scss';

export default function EarthQuakes(props) {

  const [earthQuakes, setEarthQuakes ] = useState(null);
  
  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = () => {
    axios
      .get("http://localhost:12059/react-interview/getEarthQuakes")
      .then(response => {

         console.log('response',response.data)

         setEarthQuakes(response.data)
       }) // you have array in your response.data so add your data here
      .catch(err => alert(err));
  };
  
  return (
    <>
      {!earthQuakes &&
        <Spinner animation="border" variant="success" size="sm" />
      }
      {earthQuakes &&
        <CsvToHtmlTable
          data={earthQuakes}
          csvDelimiter=","
          tableClassName="table table-striped table-hover table-sm"
        />
      }
    </>
  );
};
