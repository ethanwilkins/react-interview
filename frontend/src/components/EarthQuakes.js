import React, { useState, useEffect } from 'react';
import axios from "axios";

import { Spinner } from 'react-bootstrap';
import { CsvToHtmlTable } from 'react-csv-to-table';

export default function EarthQuakes() {

  const [earthQuakes, setEarthQuakes ] = useState(null);
  
  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = () => {
    axios
      .get("http://localhost:12059/react-interview/getEarthQuakes")
      .then(response => {
         setEarthQuakes(response.data)
       })
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
