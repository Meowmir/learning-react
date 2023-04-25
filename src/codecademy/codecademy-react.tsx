import React from "react";

const Nora = {
  name: "Nora Disewji",
  title: "Developer",
};

function FirstComponent() {
  return <h1>I learned this from Codecademy!</h1>;
}

function SecondComp() {
  return (
    <div>
      <FirstComponent />
      <h1>{Nora.name} </h1>
      <p>{Nora.title}</p>
      <WeekActivity />
    </div>
  );
}

function WeekActivity() {
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

export default SecondComp;
