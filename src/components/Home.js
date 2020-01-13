import React, { Component } from "react";
import TankListContainer from "./TankListContainer";

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
          <TankListContainer />
        </main>
      </div>
    );
  }
}
