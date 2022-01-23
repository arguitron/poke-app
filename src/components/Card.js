import React from "react";
import "./Card.css";
export const Card = ({ pokemon }) => {
  return (
    <div className="card">
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} />
    </div>
  );
};
