import React from "react";

export default function CharacterCard(props) {
  return <span>
    <img src={props.image} alt='' />
    <h2>{props.name}</h2>
    <h3>{props.species}</h3>
    <h3>{props.status}</h3>

  </span>;
}
