
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "./styles.css";
import Logs from "./logs";
import Workout from "./workout";
import Home from "./home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <button>
          <Link to="/">Home</Link>
          <br />{" "}
        </button>
        <button>
          <Link to="/logs">Logs</Link>{" "}
        </button>
        <button>
          <Link to="/Workout">Workout</Link>{" "}
        </button>
        <Switch>
          <Route path="/Logs">
            <Logs />
          </Route>
          <Route path="/Workout">
            <Workout />
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

//const rootElement = document.getElementById("root");
ReactDOM.render(<App />, document.getElementById("root"));


