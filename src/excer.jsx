import React from "react"
import "./styles.css";
class EXCER extends React.Component {
   render () {
      return (
        <div className="header-style">
        <p>{this.props.wname}</p>
        </div>
      );
   }

}
export default EXCER;