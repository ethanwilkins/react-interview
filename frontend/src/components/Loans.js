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
         setLoans(response.data)
       })
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
