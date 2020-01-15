import React, { Component } from "react";
import { Link } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
    event.preventDefault();
  };

  renderTanks(tanks) {
    const { id, type, country, name, img, ammunition } = tanks;

    const ammoString = ammunition.toString();

    return (
      <li key={id}>
        <Typography variant="h4" gutterBottom>
          {`${name}: ${type} tank from ${country}`}
        </Typography>
        <img className="tanks-images" alt={id} src={img} />
        <Typography variant="h6" gutterBottom>
          {"Ammunition equiped: "}
          {ammoString}
        </Typography>
        <Link to={`tanks/${id}`}>
          <Button>Details</Button>
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
      const filterUssr = tanks.filter(tanks => tanks.country === "USSR");
      const filterUk = tanks.filter(tanks => tanks.country === "UK");

      // By type
      const filterHeavy = tanks.filter(tanks => tanks.type === "heavy");
      const filterMedium = tanks.filter(tanks => tanks.type === "medium");
      const filterLight = tanks.filter(tanks => tanks.type === "light");

      //By name
      const filterT29 = tanks.filter(tanks => tanks.name === "T29");
      const filterT57 = tanks.filter(tanks => tanks.name === "T57 Heavy Tank");
      const filterM48A5 = tanks.filter(tanks => tanks.name === "M48A5 Patton");
      const filter140 = tanks.filter(tanks => tanks.name === "Object 140");
      const filterCromwell = tanks.filter(tanks => tanks.name === "Cromwell");
      const filterT54 = tanks.filter(tanks => tanks.name === "T-54 ltwt");
      const filterT49 = tanks.filter(tanks => tanks.name === "T49");
      const filterIS7 = tanks.filter(tanks => tanks.name === "IS-7");
      const filterSc = tanks.filter(tanks => tanks.name === "Super Conqueror");
      const filter907 = tanks.filter(tanks => tanks.name === "Object 907");

      //By ammunition - Two Main Types
      const mapAmmoTypes = tanks.map(tanks => tanks.ammunition);
      console.log("mapAmmos", mapAmmoTypes);
      const filterAmmo1 = tanks.filter(
        tanks => tanks.ammunition.toString() === "AP,APCR,HE"
      );
      const filterAmmo2 = tanks.filter(
        tanks => tanks.ammunition.toString() === "APCR,HEAT,HE"
      );

      const mapTanks = tanks.map(this.renderTanks);
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
          <Typography variant="h4" gutterBottom>
            List of Tanks
          </Typography>
          <div className="forms">
            <Typography variant="h6" gutterBottom>
              Filter by:
            </Typography>
            <span className="dividerVertical" />
            <FormControl
              className="filter-country-form"
              onSubmit={this.handleSubmit}
            >
              <InputLabel shrink id="country-filter">
                Country
              </InputLabel>
              <Select
                labelId="country-filter"
                id="country-filter"
                value={this.state.value}
                onChange={this.handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"USA"}>USA</MenuItem>
                <MenuItem value={"USSR"}>USSR</MenuItem>
                <MenuItem value={"UK"}>UK</MenuItem>
              </Select>
            </FormControl>
            <span className="dividerHorizontal" />
            <FormControl
              className="filter-type-form"
              onSubmit={this.handleSubmit}
            >
              <InputLabel shrink id="type-filter">
                Type
              </InputLabel>
              <Select
                labelId="country-filter"
                id="country-filter"
                value={this.state.value}
                onChange={this.handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"heavy"}>Heavy</MenuItem>
                <MenuItem value={"medium"}>Medium</MenuItem>
                <MenuItem value={"light"}>Light</MenuItem>
              </Select>
            </FormControl>
            <span className="dividerHorizontal" />
            <FormControl onSubmit={this.handleSubmit}>
              <InputLabel shrink id="name-filter">
                Name
              </InputLabel>
              <Select
                value={this.state.value}
                onChange={this.handleChange}
                labelId="country-filter"
                id="country-filter"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"T29"}>T29</MenuItem>
                <MenuItem value={"T57 Heavy Tank"}>T57 Heavy Tank</MenuItem>
                <MenuItem value={"M48A5 Patton"}>M48A5 Patton</MenuItem>
                <MenuItem value={"Object 140"}>Object 140</MenuItem>
                <MenuItem value={"Cromwell"}>Cromwell</MenuItem>
                <MenuItem value={"T-54 ltwt"}>T-54 ltwt</MenuItem>
                <MenuItem value={"T49"}>T49</MenuItem>
                <MenuItem value={"IS-7"}>IS-7</MenuItem>
                <MenuItem value={"Super Conqueror"}>Super Conqueror</MenuItem>
                <MenuItem value={"Object 907"}>Object 907</MenuItem>
              </Select>
            </FormControl>
            <span className="dividerHorizontal" />
            <FormControl onSubmit={this.handleSubmit}>
              <InputLabel shrink id="ammunition-filter">
                Ammo
              </InputLabel>
              <Select
                value={this.state.value}
                onChange={this.handleChange}
                labelId="country-filter"
                id="country-filter"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="AP,APCR,HE">AP,APCR,HE</MenuItem>
                <MenuItem value="APCR,HEAT,HE">APCR,HEAT,HE</MenuItem>
              </Select>
            </FormControl>
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
