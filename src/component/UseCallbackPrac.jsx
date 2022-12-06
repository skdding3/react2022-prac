import { useState } from "react";

function useCallbackPrac() {
  const [number, setNumber] = useState(0);

  const someFunction = () => {
    console.log(`someFunc: Number: ${number}`);
    return;
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <br />
      <button onClick={someFunction}>Call someFunc</button>
    </div>
  );
}

export default useCallbackPrac;
