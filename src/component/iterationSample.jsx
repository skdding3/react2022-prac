import React, { useState } from "react";

/**
 * ex 예제
 */

// const IterationSample = () => {
//   return (
//     <ul>
//       <li>눈사람</li>
//       <li>얼음</li>
//       <li>눈</li>
//       <li>바다</li>
//     </ul>
//   );
// };

/**
 * index key 설정
 */

// const IterationSample = () => {
//   const names = ["눈사람", "얼음", "눈", "바다"];
//   const nameList = names.map((name, index) => <li key={index}>{name}</li>);
//   return <ul>{nameList}</ul>;
// };

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바다" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5); // 새로운 항목 추가할때 id값

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId, // nextId 값을 id로 설정
      text: inputText,
    });
    setNextId(nextId + 1); // id값을 배열이 추가될때마다, 상태값이 더해준다.
    setNames(nextNames); // name 값을 업데이트 한다. (concat)
    setInputText(""); // 이벤트가 작동하면, input을 비워준다.
  };

  const namesList = names.map((name) => <li key={name.id}>{name.text}</li>);
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default IterationSample;
