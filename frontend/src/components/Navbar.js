import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/Navbar.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export default function Navbar({ page, setPage }) {

  return (
    <>
      <div
        onClick={() => setPage('Locations')}
        className={cx(styles.button, {
          active: page === 'Locations'
        })}
      >
        Locations
      </div>

      <div
        onClick={() => setPage('EarthQuakes')}
        className={cx(styles.button, {
          active: page === 'EarthQuakes'
        })}
      >
        EarthQuakes
      </div>

      <div
        onClick={() => setPage('Loans')}
        className={cx(styles.button, {
          active: page === 'Loans'
        })}
      >
        Loans
      </div>
    </>
  )
};

Navbar.propTypes = {
  page: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired
};
