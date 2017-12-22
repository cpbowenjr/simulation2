import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import routes from './routes';
import image1 from './images/houserlogo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="root">
        <div className="box1">
        <img src={image1} className="image1" alt="logo" />
        <span className="username">Username</span>
        <input className="input1" />
        <span className="password">Password</span>
        <input className="input1" />

        <div className="buttonbox">
          <button className="loginbutton">Login</button>
          <button className="registerbutton">Register</button>

        </div>
      </div>
        
      </div>
    );
  }
}

export default App;
