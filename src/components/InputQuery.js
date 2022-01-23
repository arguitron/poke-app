import React, { useState } from "react";

export const InputQuery = ({ setPokemon }) => {
  const [state, setState] = useState("");
  const handleInput = (e) => {
    setState(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setPokemon(state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={state}
        placeholder="e.g pikachu"
        autoComplete="off"
        onChange={handleInput}
      />
      <button type="submit">Find</button>
    </form>
  );
};
