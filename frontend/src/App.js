import React, { useState } from 'react';

import Navbar from './components/Navbar';
import Locations from './components/Locations';
import EarthQuakes from './components/EarthQuakes';
import Loans from './components/Loans';

function App() {
  const [page, setPage] = useState('Locations')
  return (
    <>
      <Navbar page={page} setPage={setPage} />

      {page === 'Locations' &&
        <Locations page={page} />
      }
      
      {page === 'EarthQuakes' &&
        <EarthQuakes page={page} />
      }
      
      {page === 'Loans' &&
        <Loans page={page} />
      }
    </>
  );
}

export default App;
