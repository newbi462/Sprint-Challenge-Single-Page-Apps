import React from "react";
import { Route } from 'react-router-dom';


import Header from "./components/Header.js";
import CharacterCard from "./components/CharacterCard";
import WelcomePage from "./components/WelcomePage";
import LocationCard from "./components/LocationCard";
import EpisodeCard from "./components/EpisodeCard";

export default function App() {
  return (
    <main>
      <Header />


      <Route exact path="/" component={WelcomePage} />
      <Route path="/charaters" component={CharacterCard} />
      <Route path="/locations" component={LocationCard} />
      <Route path="/episode" component={EpisodeCard} />

    </main>
  );
}
