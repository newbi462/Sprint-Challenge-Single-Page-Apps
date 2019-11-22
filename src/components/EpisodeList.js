import React, { useEffect, useState } from "react";
import axios from "axios";

import styled from "styled-components";

import SearchForm from "./SearchForm";

const ForceFlex = styled.section`
  display: flex
  flex-flow: row wrap;
  justify-content: space-around;
`;

const EpCards = styled.div`
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


export default function EpisodeList() {
  const [ep, setEp] = useState([])
  const [thisapi] = useState("episode")

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/${thisapi}/`)
    .then(response => {
      setEp(response.data.results)
    })
    .catch( error => {
      console.log("error", error.message)
    })
  },[])

  return (
    <>

    <SearchForm state={ep} setState={setEp} slash={thisapi} />

    <ForceFlex className="ep-list">
      {/*<h2>TODO: `array.map()` over your state here!</h2>*/}
      {ep.map(item => (
        <EpCards key={item.id} className="epCard">
          <h3>{item.name}</h3>
          <ul key={item.id}>
            <li>Air Date: {item.air_date}</li>
            <li>Dimension: {item.episode}</li>
          </ul>
        </EpCards>
      ))}
    </ForceFlex>

    </>
  );
}
