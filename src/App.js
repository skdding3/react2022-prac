import React, { useState, useEffect } from "react";

function App() {
  // State
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };
  // Effect => 렌더링 될때 마다 실행됨 => 마운트 + [ item ] 이 변경될떄만 적용
  useEffect(() => {
    console.log("count 변화");
  }, [count]);

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count: {count}</span>
      <input type="text" value={name} onChange={handleInputChange} />
      <span>name: {name}</span>
    </div>
  );
}

export default App;
