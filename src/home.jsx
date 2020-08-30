import React from "react"
import "./styles.css";
class Home extends React.Component {
   render () {
      return (
        <div className="header-style">
        <p>The player who is playing "X" always goes first. Players alternate placing Xs and Os on the board until either one player has three in a row, horizontally, vertically, or diagonally; or all nine squares are filled. If a player is able to draw three of their Xs or three of their Os in a row, then that player wins</p>
        </div>
      );
   }

}
export default Home;