import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
      {rickMortye.map(item => (
        <div key={item.id} className="charterCard">
          <h2>{item.name}</h2>
          <ul key={item.id}>
            <li>Status: {item.status}</li>
            <li>Species: {item.species}</li>
          </ul>
        </div>
      ))}
    </section>
  );
}
