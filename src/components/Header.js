import React from "react";
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Button color="link">
        <NavLink to='/'>Home</NavLink>
      </Button>
      <Button color="link">
        <NavLink to='/character-list'>Characters</NavLink>
      </Button>

    </header>
  );
}
