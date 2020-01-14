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
    this.setState({ value: this.state.value });
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
        <p>
          <strong>{"Ammunition equiped: "}</strong>
          {ammoString}
        </p>
        <Link to={`tanks/${id}`}>
          <button>Details</button>
        </Link>
        <br />
        <hr />
      </li>
    );
  }

  renderNameOptions(tanks) {
    const { name } = tanks;
    return <option value={name}>{name}</option>;
  }

  render() {
    const { tanks } = this.props;

    // Filter Main Function
    const filterMain = value => {
      // By Country
      const filterUsa = tanks.filter(tanks => tanks.country === "USA");
      console.log("filterUsa", filterUsa);
      const filterUssr = tanks.filter(tanks => tanks.country === "USSR");
      console.log("filterUssr", filterUssr);
      const filterUk = tanks.filter(tanks => tanks.country === "UK");
      console.log("filterUk", filterUk);

      // By type
      const filterHeavy = tanks.filter(tanks => tanks.type === "heavy");
      console.log("filterHeavy", filterHeavy);
      const filterMedium = tanks.filter(tanks => tanks.type === "medium");
      console.log("filterMedium", filterMedium);
      const filterLight = tanks.filter(tanks => tanks.type === "light");
      console.log("filterLight", filterLight);

      //By name
      const filterT29 = tanks.filter(tanks => tanks.name === "T29");
      console.log("filterT29", filterT29);
      const filterT57 = tanks.filter(tanks => tanks.name === "T57 Heavy Tank");
      console.log("filterT29", filterT57);
      const filterM48A5 = tanks.filter(tanks => tanks.name === "M48A5 Patton");
      console.log("filterM48A5", filterM48A5);
      const filter140 = tanks.filter(tanks => tanks.name === "Object 140");
      console.log("filter140", filter140);
      const filterCromwell = tanks.filter(tanks => tanks.name === "Cromwell");
      console.log("filterCromwell", filterCromwell);
      const filterT54 = tanks.filter(tanks => tanks.name === "T-54 ltwt");
      console.log("filterT54", filterT54);
      const filterT49 = tanks.filter(tanks => tanks.name === "T49");
      console.log("filterT49", filterT49);
      const filterIS7 = tanks.filter(tanks => tanks.name === "IS-7");
      console.log("filterIS7", filterIS7);
      const filterSc = tanks.filter(tanks => tanks.name === "Super Conqueror");
      console.log("filterSc", filterSc);
      const filter907 = tanks.filter(tanks => tanks.name === "Object 907");
      console.log("filter907", filter907);

      //By ammunition - Two Main Types
      const mapAmmoTypes = tanks.map(tanks => tanks.ammunition);
      console.log("mapAmmos", mapAmmoTypes);
      const filterAmmo1 = tanks.filter(
        tanks => tanks.ammunition.toString() === "AP,APCR,HE"
      );
      console.log("filterAmmo1", filterAmmo1);
      const filterAmmo2 = tanks.filter(
        tanks => tanks.ammunition.toString() === "APCR,HEAT,HE"
      );
      console.log("filterAmmo2", filterAmmo2);

      const mapTanks = tanks.map(this.renderTanks);
      console.log("mapTanks", mapTanks);
      const mapNames = tanks.map(tanks => tanks.name);
      console.log("mapNames", mapNames);

      switch (value) {
        case "USA":
          return filterUsa.map(this.renderTanks);
        case "USSR":
          return filterUssr.map(this.renderTanks);
        case "UK":
          return filterUk.map(this.renderTanks);
        case "heavy":
          return filterHeavy.map(this.renderTanks);
        case "medium":
          return filterMedium.map(this.renderTanks);
        case "light":
          return filterLight.map(this.renderTanks);
        case "T29":
          return filterT29.map(this.renderTanks);
        case "T57 Heavy Tank":
          return filterT57.map(this.renderTanks);
        case "M48A5 Patton":
          return filterM48A5.map(this.renderTanks);
        case "Object 140":
          return filter140.map(this.renderTanks);
        case "Cromwell":
          return filterCromwell.map(this.renderTanks);
        case "T-54 ltwt":
          return filterT54.map(this.renderTanks);
        case "T49":
          return filterT49.map(this.renderTanks);
        case "IS-7":
          return filterIS7.map(this.renderTanks);
        case "Super Conqueror":
          return filterSc.map(this.renderTanks);
        case "Object 907":
          return filter907.map(this.renderTanks);
        case "AP,APCR,HE":
          return filterAmmo1.map(this.renderTanks);
        case "APCR,HEAT,HE":
          return filterAmmo2.map(this.renderTanks);
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
          <div className="forms">
            <form onSubmit={this.handleSubmit}>
              {"Filter Tank By Country: "}
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="">ALL</option>
                <option value="USA">USA</option>
                <option value="USSR">USSR</option>
                <option value="UK">UK</option>
              </select>
              <input type="submit" value="Submit" />
            </form>
            <form onSubmit={this.handleSubmit}>
              {"Filter Tank By Type: "}
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="">ALL</option>
                <option value="heavy">HEAVY</option>
                <option value="medium">MEDIUM</option>
                <option value="light">LIGHT</option>
              </select>
              <input type="submit" value="Submit" />
            </form>
            <form onSubmit={this.handleSubmit}>
              {"Filter Tank By Name: "}
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="">ALL</option>
                <option value="T29">T29</option>
                <option value="T57 Heavy Tank">T57 Heavy Tank</option>
                <option value="M48A5 Patton">M48A5 Patton</option>
                <option value="Object 140">Object 140</option>
                <option value="Cromwell">Cromwell</option>
                <option value="T-54 ltwt">T-54 ltwt</option>
                <option value="T49">T49</option>
                <option value="IS-7">IS-7</option>
                <option value="Super Conqueror">Super Conqueror</option>
                <option value="Object 907">Object 907</option>
              </select>
              <input type="submit" value="Submit" />
            </form>
            <form onSubmit={this.handleSubmit}>
              {"Filter Tank By Ammo Load: "}
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="">ALL</option>
                <option value="AP,APCR,HE">AP,APCR,HE</option>
                <option value="APCR,HEAT,HE">APCR,HEAT,HE</option>
              </select>
              <input type="submit" value="Submit" />
            </form>
          </div>
          {!tanks && "Loading..."}
          {tanks && (
            <ul className="tanks-list">{filterMain(this.state.value)}</ul>
          )}
        </main>
      </div>
    );
  }
}
