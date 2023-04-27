import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SecondComp, {
  FirstComponent,
  PetsList,
} from "./codecademy/codecademy-react";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FirstComponent />
        <SecondComp />
        <PetsList />
      </header>
    </div>
  );
}
