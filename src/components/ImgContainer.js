import React from 'react';
import logo from '../logo.svg';



function ImgContainer(props) {
  return (
    <div id="img-container">
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  )
};

export default ImgContainer;