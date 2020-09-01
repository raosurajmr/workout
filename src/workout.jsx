import React from "react"
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "./styles.css";
class Workout extends React.Component {
   constructor () {
      super ()
   }

   render () {
      return (
        <div className="header-style">
        <h1>Select workout</h1>
          <Link to="/Workout/triceps"> Triceps</Link>
        </div>
      );
   }

}
export default Workout;