import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div style={navStyle}>
      <h1>Personal Diary</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>{' '}
      |{' '}
      <Link style={linkStyle} to="/about">
        About
      </Link>
    </div>
  );
}

const navStyle = {
  background: '#fcec05',
  color: '#000',
  fontFamily: 'Courier New monospace',
  textAlign: 'center',
  padding: '10px',
};

const linkStyle = {
  color: '#000',
  fontFamily: 'proxima-nova-condensed, Helvetica, arial, sans-serif',
};

export default Navbar;
