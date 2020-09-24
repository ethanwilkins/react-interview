import React, { useState } from 'react';

import Navbar from './components/Navbar';
import Locations from './components/Locations';
import EarthQuakes from './components/EarthQuakes';
import Loans from './components/Loans';

import styles from './styles/App.module.scss';

function App() {
  const [page, setPage] = useState('Locations')
  return (
    <div className={styles.app}>
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
