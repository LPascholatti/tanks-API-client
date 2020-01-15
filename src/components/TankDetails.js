import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function TankDetails(props) {
  const tank = props.tank;
  const { id, name, img, type, country, ammunition } = tank;

  const ammoString = ammunition && ammunition.toString();

  return (
    <div className="tank-details">
      <Typography variant="h3" gutterBottom>
        {name}
      </Typography>
      <img className="tank-details-img" alt={id} src={img} />
      <p>
        <strong> {"Manufacturer Country:"} </strong>
        {country}
      </p>
      <p>
        <strong> {"Type:"} </strong>
        {type}
      </p>
      <p>
        <strong> {"Ammunition Load:"} </strong>
        {ammoString}
      </p>
      <Link to="/">
        <Button>Return</Button>
      </Link>
      <br />
    </div>
  );
}
