import React, { Component } from "react";
import TankListContainer from "./TankListContainer";
import TankDetailsContainer from "./TankDetailsContainer";
import { Route } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

export default class Home extends Component {
  render() {
    return (
      <div>
        <header>
        <Typography variant="h3" gutterBottom>
          Welcome to Tanks API
        </Typography>
        </header>
        <main>
            <Route path="/" exact component={TankListContainer} />
            <Route path="/tanks/:id" component={TankDetailsContainer} />
        </main>
        <footer className="footer"></footer>
      </div>
    );
  }
}
