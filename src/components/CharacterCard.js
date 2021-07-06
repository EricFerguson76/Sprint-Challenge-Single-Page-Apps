import React from "react";
import {
  Card, CardImg, CardTitle, CardSubtitle,
} from 'reactstrap';


export default function CharacterCard(props) {
  return <Card>
    <CardImg src={props.image} alt='' />
    <CardTitle>{props.name}</CardTitle>
    <CardSubtitle>{props.species}</CardSubtitle>
    <CardSubtitle>{props.status}</CardSubtitle>

  </Card>;
}
