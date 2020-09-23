import React from 'react';

import Locations from './components/Locations';
import EarthQuakes from './components/EarthQuakes';
import Loans from './components/Loans';

function App() {
  return (
    <div className="App">
      <Locations />
      <EarthQuakes />
      <Loans />
    </div>
  );
}

export default App;
