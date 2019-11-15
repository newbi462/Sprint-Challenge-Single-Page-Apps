import React from "react";

import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>

      <div>
        {/*}<a href="">Home</a>*/}
        <Link to="/">Home</Link>
      </div>
      <div>
        {/*<a href="">About</a>*/}
        <Link to="/charaters">Charaters</Link>
      </div>
    </header>
  );
}
