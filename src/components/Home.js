import React, { Component } from "react";
import TankListContainer from "./TankListContainer";

export default class Home extends Component {
  render() {
    return (
      <div>
        Welcome to Tanks API
        <TankListContainer />
      </div>
    );
  }
}
