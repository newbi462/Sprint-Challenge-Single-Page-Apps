import React from "react";
import { Route } from 'react-router-dom';


import Header from "./components/Header.js";
import CharacterCard from "./components/CharacterCard";
import WelcomePage from "./components/WelcomePage";

export default function App() {
  return (
    <main>
      <Header />

      <Route exact path="/" component={WelcomePage} />
      <Route path="/charaters" component={CharacterCard} />
    </main>
  );
}
