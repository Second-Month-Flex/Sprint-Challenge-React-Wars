import React from "react";
import styled from "styled-components";

const Div = styled.div`
  /* background-color: white; */
  border: solid grey 1px;
  width: 40%;
  margin: 0 auto;
`;

function Starwars(info) {
  return (
    <Div>
      <h1>Name: {info.name} </h1>
      <h3>Height:{info.height}</h3>
      <h3> {info.mass}kg</h3>
      <h3>Hair color:{info.hair_color} </h3>
      <h3>Eye Color: {info.eye_color}</h3>
      <h3> Gender: {info.gender}</h3>
    </Div>
  );
}

export default Starwars;
