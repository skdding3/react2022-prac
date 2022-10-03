import './App.css';

function App() {
    const name = '리액'
  return (
      // ? 연산자 연습 (like if)
    <div>
        {name === '리액트' ? <h1>리액트 입니다.</h1> : <h1>리액트 아닙니다.</h1>}
    </div>
  );
}

export default App;
