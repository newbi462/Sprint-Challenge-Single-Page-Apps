import React from "react";
import { Link } from 'react-router-dom';

import styled from "styled-components";

const ForceFlex = styled.section`
  display: flex
  flex-flow: row wrap;
  justify-content: space-around;
`;


export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>

      <ForceFlex>
        <div>
          {/*}<a href="">Home</a>*/}
          <Link to="/">Home</Link>
        </div>
        <div>
          {/*<a href="">About</a>*/}
          <Link to="/charaters">Charaters</Link>
        </div>
        <div>
          {/*<a href="">About</a>*/}
          <Link to="/locations">Locations</Link>
        </div>
        <div>
          {/*<a href="">About</a>*/}
          <Link to="/episode">Episodes</Link>
        </div>
      </ForceFlex>
    </header>
  );
}
