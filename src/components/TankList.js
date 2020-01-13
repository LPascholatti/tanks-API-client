import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TankList extends Component {
  renderTanks(tanks) {
    const { id, type, country, name, img } = tanks;

    return (
      <li key={id}>
        <img className="tanks-images" alt={id} src={img} />
        <Link to={`tanks/${id}`}>
          <p>{`${name}: ${type} tank from ${country}`}</p>
        </Link>
      </li>
    );
  }

  render() {
    const { tanks } = this.props;

    return (
      <div className="tanks-list">
        <main>
          {!tanks && "Loading..."}
          {tanks && <ul>{tanks.map(this.renderTanks)}</ul>}
        </main>
      </div>
    );
  }
}
