import React from 'react';
import PropTypes from 'prop-types';

import { Button, ButtonGroup } from 'react-bootstrap';

import styles from '../styles/Navbar.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export default function Navbar({ page, setPage }) {

  return (
    <>
      <ButtonGroup>
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
