import React, { useEffect, useState } from "react";
import axios from "axios";

import styled from "styled-components";

import SearchForm from "./SearchForm";

const ForceFlex = styled.section`
  display: flex
  flex-flow: row wrap;
  justify-content: space-around;
`;

const CharCards = styled.div`
  color: #83d2e4;
  width: 30%;
  padding: 15px;
  border-radius: 13px;
  box-sizing: border-box;
  margin: 10px 0;
  transition: transform 0.2s ease-in;
  border: solid 3px #83d2e4;
  text-shadow: 1px 1px #8b3f21;

  &:hover {
    transform: translate(-5px) scale(1.15);
    border: solid 3px #8b3f21;
  }
`;


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [rickMortye, setRickMortye] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios.get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      console.log(response.data.results)
      setRickMortye(response.data.results)
    })
    .catch( error => {
      console.log("error", error.message)
    })
  },[])//  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  console.log(rickMortye);

  return (
    <>

    <SearchForm state={rickMortye} setState={setRickMortye} />

    <ForceFlex className="character-list">
      {/*<h2>TODO: `array.map()` over your state here!</h2>*/}
      {rickMortye.map(item => (
        <CharCards key={item.id} className="charterCard">
          <h3>{item.name}</h3>
          <ul key={item.id}>
            <li>Status: {item.status}</li>
            <li>Species: {item.species}</li>
          </ul>
        </CharCards>
      ))}
    </ForceFlex>

    </>
  );
}
