import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'react-bootstrap';

const style = {
  width: '100%',
  marginBottom: '2vh'
}

export default function Navbar({ page, setPage }) {

  return (
    <>
      <ButtonGroup size="lg" style={style}>
        <Button
          onClick={() => setPage('Locations')}
          variant={page === 'Locations' ? 'primary' : 'secondary'}
        >
          Lowe's Stores
        </Button>
        <Button
          onClick={() => setPage('EarthQuakes')}
          variant={page === 'EarthQuakes' ? 'primary' : 'secondary'}
        >
          Earth Quakes
        </Button>
        <Button
          onClick={() => setPage('Loans')}
          variant={page === 'Loans' ? 'primary' : 'secondary'}
        >
          Loans
        </Button>
      </ButtonGroup>
    </>
  )
};

Navbar.propTypes = {
  page: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired
};
