import React, { useState, useEffect, useMemo } from "react";

function UseMemoPrac() {
  // State
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  const location = useMemo(() => {
    return {
      country: isKorea ? "한국" : "외국",
    };
  }, [isKorea]);

  // Effect
  useEffect(() => {
    // 오래걸리는 작업에 유용하다
    console.log("useEffect 호출");
  }, [location]);

  return (
    <div>
      <h2>하루에 몇 끼 먹나요?</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <hr />
      <h2>어느 나라에 있어요?</h2>
      <p>나라: {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>비행기 타러 갑시다!</button>
    </div>
  );
}

export default UseMemoPrac;
