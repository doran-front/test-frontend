import logo from "./logo.svg";
import "./App.css";

function App() {
  const dongsu = () => {
    console.log("소영님 예민...");
    console.log("넹....넹....넹...넹...");
  };

  dongsu();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Edit <code>src/App.js</code> and save to reload.
        </h1>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
