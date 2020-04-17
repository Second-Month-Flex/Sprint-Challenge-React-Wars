import React from "react";
import styled from "styled-components";

const Div = styled.div`
  /* background-color: white; */
  border: solid grey 1px;
  width: 40%;
  margin: 0 auto;
`;

const H1 = styled.h1`
  text-decoration: underline;
`;

const H3 = styled.h3`
  color: red;
`;

function Starwars(info) {
  return (
    <Div>
      <H1>Name: {info.name} </H1>
      <H3>Height:{info.height}</H3>
      <H3> {info.mass}kg</H3>
      <H3>Hair color:{info.hair_color} </H3>
      <H3>Eye Color: {info.eye_color}</H3>
      <H3> Gender: {info.gender}</H3>
    </Div>
  );
}

export default Starwars;
