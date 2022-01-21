import React, { Component } from "react";
import '../styles/fild.css'

class Fild extends Component {
  constructor(props) {
    super(props);
  };

  render() {

    const {name} = this.props;

    return (
      <div>
        <div id="fild-container">
          <label htmlFor={name.toLowerCase()}>{name}</label>
          <input type="text" id={name.toLowerCase()} name={name.toLowerCase()}></input>
        </div>
      </div>
    )
  };
};

export default Fild;