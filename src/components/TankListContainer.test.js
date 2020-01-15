import React from "react";
import ReactDOM from "react-dom";
import TankListContainer from "./TankDetailsContainer";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <TankListContainer />
      </BrowserRouter>
    </Provider>,
    div
  );
});
