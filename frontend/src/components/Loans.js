import React, { useState, useEffect } from 'react';
import axios from "axios";

import { Spinner } from 'react-bootstrap';
import { CsvToHtmlTable } from 'react-csv-to-table';

export default function Loans() {

  const [loans, setLoans ] = useState(null);
  
  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = () => {
    axios
      .get("http://localhost:12059/react-interview/getLoanData")
      .then(response => {

         console.log('response',response.data)

         setLoans(response.data)
       }) // you have array in your response.data so add your data here
      .catch(err => alert(err));
  };
  
  return (
    <>
      {!loans &&
        <Spinner animation="border" variant="success" size="sm" />
      }
      {loans &&
        <CsvToHtmlTable
          data={loans}
          csvDelimiter=","
          tableClassName="table table-striped table-hover table-sm"
        />
      }
    </>
  );
};
