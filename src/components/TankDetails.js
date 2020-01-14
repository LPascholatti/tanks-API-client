import React from "react";
import { Link } from "react-router-dom";

export default function TankDetails(props) {
  const tank = props.tank;
  const { id, name, img, type, country, ammunition } = tank;

  const ammoString = ammunition && ammunition.toString();

  return (
    <div className="tank-details">
      <h1>{name}</h1>
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
        <button>Return</button>
      </Link>
      <br />
    </div>
  );
}
