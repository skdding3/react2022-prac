import React from "react";

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

const IterationSample = () => {
  const names = ["눈사람", "얼음", "눈", "바다"];
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  return <ul>{nameList}</ul>;
};

export default IterationSample;
