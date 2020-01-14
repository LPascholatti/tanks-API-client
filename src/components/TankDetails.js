import React from "react";

export default function TankDetails(props) {
  const { id, name, img, type, country } = props.tank;

  console.log("props", props)

  return (

    <div className="tank-details">
      <h1>{name}</h1>
      <img className="tank-details-img" alt={id} src={img} />
      <p>Manufacturer Country: {country}</p>
      <p>Type: {type}</p>
    </div>
  );
}
