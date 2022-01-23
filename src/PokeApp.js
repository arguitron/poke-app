import React, { useState } from "react";
import { InputQuery } from "./components/InputQuery";
import { useFetch } from "./hooks/useFetch";
import { Card } from "./components/Card";

export const PokeApp = () => {
  const [pokemon, setPokemon] = useState("pikachu");
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  const { data, loading, error } = useFetch(url);
  console.log(data);
  return (
    <>
      <h1>PokeApp</h1>
      <InputQuery setPokemon={setPokemon} />
      {loading ? <p>Loading</p> : <Card pokemon={data} />}
    </>
  );
};
