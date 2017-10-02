/**
|--------------------------------------------------
| Main Component. Wraps all other components
|--------------------------------------------------
*/
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Import Child components
import Home from './Children/Home.jsx'

// ***** Might change this to Stateless *****
export default class Main extends Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    // stickybits('.navbar');
  }

  render() {
    return (
      <div className="container-fluid nopadding">
        {/* Write code here */}
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route component={ Home } />
        </Switch>
      </div>
    );
  }
};
