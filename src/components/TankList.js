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

      // By Country
      const filterUsa = tanks.filter(tanks => tanks.country === "USA");
      console.log("filterUsa", filterUsa);
      const filterUssr = tanks.filter(tanks => tanks.country === "USSR");
      console.log("filterUssr", filterUssr);
      const filterUk = tanks.filter(tanks => tanks.country === "UK");
      console.log("filterUk", filterUk);

      // By type
      const filterHeavy = tanks.filter(tanks => tanks.type === "heavy")
      console.log("filterHeavy", filterHeavy)
      const filterMedium = tanks.filter(tanks => tanks.type === "medium")
      console.log("filterMedium", filterMedium)
      const filterLight = tanks.filter(tanks => tanks.type === "light")
      console.log("filterLight", filterLight)

      const mapTanks = tanks.map(this.renderTanks);
      console.log("mapTanks", mapTanks);
      const mapNames = tanks.map(tanks => tanks.name)
      console.log("mapNames", mapNames)

      const filterByName = (name) => {
        let filterName = tanks.filter(tanks => tanks.name === name)
        return filterName.map(this.renderTanks)
      }

      switch (value) {
        case "USA":
          return filterUsa.map(this.renderTanks);
        case "USSR":
          return filterUssr.map(this.renderTanks);
        case "UK":
          return filterUk.map(this.renderTanks);
        case "heavy":
          return filterHeavy.map(this.renderTanks)
        case "medium":
          return filterMedium.map(this.renderTanks)
        case "light":
          return filterLight.map(this.renderTanks)
        case "NAME":
          return filterByName(value)
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
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="">ALL</option>
              <option value="USA">USA</option>
              <option value="USSR">USSR</option>
              <option value="UK">UK</option>
            </select>
          </form>
          <form onSubmit={this.handleSubmit}>
            Filter Tank By Type:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="">ALL</option>
              <option value="heavy">HEAVY</option>
              <option value="medium">MEDIUM</option>
              <option value="light">LIGHT</option>
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
