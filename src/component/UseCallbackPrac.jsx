import { useCallback, useEffect, useState } from "react";

function useCallbackPrac() {
  // State
  const [number, setNumber] = useState(0);
  // const [toggle, setToggle] = useState(true);

  // useCallback
  const someFunction = () => {
    console.log(`someFunc: Number: ${number}`);
    return;
  };

  // Effect
  // Some Function에 대한 변화를 감지한다.
  useEffect(() => {
    console.log("someFunction이 변경되었습니다.");
  }, [someFunction]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      {/*<button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>*/}
      <br />
      <button onClick={someFunction}>Call someFunc</button>
    </div>
  );
}

export default useCallbackPrac;
