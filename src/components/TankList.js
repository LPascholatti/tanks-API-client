import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TankList extends Component {
  renderTanks(tanks) {
    const { id, type, country, name, img, ammunition } = tanks;

    const ammoString = ammunition.toString();

    console.log("tanks", tanks);
    console.log("ammunition", ammunition);
    console.log("ammunition to string", ammunition.toString());

    return (
      <li key={id}>
        <h3>{`${name}: ${type} tank from ${country}`}</h3>
        <img className="tanks-images" alt={id} src={img} />
        <p>{`Ammunition equiped: ${ammoString}`}</p>
        <Link to={`tanks/${id}`}>
          <button>Details</button>
        </Link>
        <br />
        <hr />
      </li>
    );
  }

  render() {
    const { tanks } = this.props;

    return (
      <div className="tanks-list">
        <main>
          <h2>
            <strong>List of tanks:</strong>
          </h2>
          {!tanks && "Loading..."}
          {tanks && (
            <ul className="tanks-list">{tanks.map(this.renderTanks)}</ul>
          )}
        </main>
      </div>
    );
  }
}
