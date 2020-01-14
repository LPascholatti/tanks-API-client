import React, { Component } from "react";
import TankListContainer from "./TankListContainer";
import TankDetailsContainer from './TankDetailsContainer';
import { Route } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Welcome to Tanks API</h1>
        </header>
        <main>
          <h2>
            <strong>List of tanks:</strong>
          </h2>
          <Route path='/' exact component={TankListContainer}/>
          <Route path='/tanks/:id' component={TankDetailsContainer}/>
        </main>
      </div>
    );
  }
}
