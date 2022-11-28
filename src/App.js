import React, { useState } from "react";
import { useGetPokemonByNameQuery } from "./services/pokemon";
// import Home from "./routes/Home";
// import Detail from "./routes/Detail";

export default function App() {
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");
  const { pollingInterval, setPollingInterval } = useState(0);

  return (
    <div className="App">
      <select
        onChange={(change) => setPollingInterval(Number(change.target.value))}
      >
        <option value={0}>OFF</option>
      </select>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
    </div>
  );
}
