/**
|--------------------------------------------------
| Home Component. Wraps all other components on the home page
|--------------------------------------------------
*/
import React, { Component } from 'react';

// Import Child components
import Navbar from './Home/Navbar.jsx';
import Jumbotron from './Home/Jumbotron.jsx';
import About from './Home/About.jsx';
import Login from './Login.jsx';


// ***** Might change this to Stateless *****

export default class Home extends Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    // stickybits('.navbar');
  }

  render() {
    return (
      <div className="home" id="home">

        {/* Write code here */}  
        <Navbar />
        <Jumbotron />
        <About />

      </div>
    );
  }
};
