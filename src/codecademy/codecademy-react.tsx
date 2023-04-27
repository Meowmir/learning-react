import { Button } from "@mui/material";
import React from "react";
import ReactDom from "react-dom";

const Nora = {
  name: "Nora Disewji",
  title: "Developer",
};

export function FirstComponent() {
  return <h3>I learned this from Codecademy!</h3>;
}

export default function SecondComp() {
  return (
    <div>
      <h1>{Nora.name} </h1>
      <p>{Nora.title}</p>
      <WeekActivity />
    </div>
  );
}

export function WeekActivity() {
  let activity;
  let weekend = false;
  if (!weekend) {
    activity = "working at Spaces.";
  } else {
    activity = "at home taking a bath.";
  }
  return (
    <p>
      Today Nora is <i>{activity}</i>
    </p>
  );
}

export function BuyItems() {
  function handleClick() {
    alert("Mjaaaoo..");
  }
  return <Button onClick={handleClick} />;
}

export function PetsList(props: any) {
  const listOfPets = ["Ymir", "Dexter", "Mango", "Asmund"];
  /*
  const buttonDesign = (
    <button onClick={props.handleOnClickEvent}>{listOfItems[]}</button>
  );
  */

  return (
    <div>
      <button onClick={props.handleClick}>{listOfPets[0]}</button>
      <button onClick={props.handleClick}>{listOfPets[1]}</button>
      <button onClick={props.handleClick}>{listOfPets[2]}</button>
      <button onClick={props.handleClick}>{listOfPets[3]}</button>
    </div>
  );
}
