import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TankList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = (event, value) => {
    this.setState({ value: value });
    console.log("state", this.state.value);
    event.preventDefault();
  };

  renderTanks(tanks) {
    const { id, type, country, name, img, ammunition } = tanks;

    const ammoString = ammunition.toString();

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

    // Filter By Country Function
    const filterMain = value => {
      const filterUsa = tanks.filter(tanks => tanks.country === "USA");
      console.log("filterUsa", filterUsa);
      const filterUssr = tanks.filter(tanks => tanks.country === "USSR");
      console.log("filterUssr", filterUssr);
      const filterUk = tanks.filter(tanks => tanks.country === "UK");
      console.log("filterUk", filterUk);

      const mapTanks = tanks.map(this.renderTanks);
      console.log("mapTanks", mapTanks);

      switch (value) {
        case "USA":
          return filterUsa.map(this.renderTanks);
        case "USSR":
          return filterUssr.map(this.renderTanks);
        case "UK":
          return filterUk.map(this.renderTanks);
        default:
          return mapTanks;
      }
    };

    return (
      <div className="tanks-list">
        <main>
          <h2>
            <strong>List of tanks:</strong>
          </h2>
          <form onSubmit={this.handleSubmit}>
            Filter Tank By Country:
            <select value={this.state.country} onChange={this.handleChange}>
              <option value="">ALL</option>
              <option value="USA">USA</option>
              <option value="USSR">USSR</option>
              <option value="UK">UK</option>
            </select>
          </form>
          {!tanks && "Loading..."}
          {tanks && (
            <ul className="tanks-list">
              {filterMain(this.state.value)}
            </ul>
          )}
        </main>
      </div>
    );
  }
}
