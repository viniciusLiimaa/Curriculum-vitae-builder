import React, { Component } from "react";
import '../styles/fild.css'

class Fild extends Component {
  constructor(props) {
    super(props);
  };

  render() {

    const { name, id } = this.props;

    return (
      <div>
        <label htmlFor={id}>{name}</label>
        <input type="text" id={id} name={id}></input>
      </div>
    )
  };
};

export default Fild;