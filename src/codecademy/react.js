import React from "react";

function FirstComponent() {
  return (<h1>I learned this from Codecademy!</h1>), SecondComp();
}

export default FirstComponent;

const Nora = {
  name: "Nora Disewji",
  status: "Best",
};

function SecondComp() {
  return (
    <div>
      <h1>{Nora.name} </h1>
      <p>{Nora.status}</p>
    </div>
  );
}
