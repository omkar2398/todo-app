import React from 'react';

function About() {
  return (
    <React.Fragment>
      <h1 style={aboutStyle}>ABOUT</h1>
      <p style={aboutStyle}>This is a personal diary app version 1.0.0</p>
    </React.Fragment>
  );
}

const aboutStyle = {
  textAlign: 'center',
  margin: '10px',
  fontFamily: 'Brush Script MT, Brush Script Std, cursive',
};

export default About;
