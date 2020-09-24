import React, { useState } from 'react';

import Navbar from './Navbar';
import Locations from './Locations';
import EarthQuakes from './EarthQuakes';
import Loans from './Loans';

const style = {
  width: '70vw',
  margin: '0 auto',
  marginTop: '2vh'
}

function App() {
  const [page, setPage] = useState('Locations')
  return (
    <div style={style}>
      <Navbar page={page} setPage={setPage} />

      {page === 'Locations' &&
        <Locations />
      }
      
      {page === 'EarthQuakes' &&
        <EarthQuakes />
      }
      
      {page === 'Loans' &&
        <Loans />
      }
    </div>
  );
}

export default App;
