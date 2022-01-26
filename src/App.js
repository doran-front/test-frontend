import logo from "./logo.svg";
import "./App.css";

function App() {
  const dongsu = () => {
    console.log("소영님 예민...");
    console.log("넹....넹....넹...넹...");
    console.log("ddddd");
    console.log("에러를 확인함");
    console.log("다시확인하기앙러아러아러아러아렁라어라얼아러아ㅓ랑러");
    console.log("pull request!!!");
  };

  dongsu();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Edit <code>src/App.js</code> and save to reload.
          <div>망쳐야징~~망쳐야징~~망쳐야징~~~</div>
        </h1>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
