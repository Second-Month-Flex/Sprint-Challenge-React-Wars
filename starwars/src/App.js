import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Starwars from "./Starwars";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.py4e.com/api/people/`)
      .then((res) => {
        console.log(res.data.results);
        setCharacter(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Container>
        {character.map((event) => {
          return (
            <Starwars
              name={event.name}
              height={event.height}
              mass={event.mass}
              hair_color={event.hair_color}
              eye_color={event.eye_color}
              gender={event.gender}
            />
          );
        })}
      </Container>
    </div>
  );
};

export default App;
