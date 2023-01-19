import logo from "./logo.svg";
import "./App.css";
import User from "./components/UI/game/User";
import Board from "./components/UI/game/Board";

function App() {
  return (
    <>
      <div className={"container"}>
        <User id="1" />
        <User id="2" />
      </div>
      <div>
        <Board></Board>
      </div>
    </>
  );
}

export default App;
