import React, { Component } from "react";
import '../styles/fild.css'

class Fild extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    }
  };

  onChange = (e) => {
    e.preventDefault();
    const {sendToMain} = this.props;
    
    this.setState({
      input: e.target.value
    });

    sendToMain(e.target.previousElementSibling.textContent, e.target.value)
  }

  render() {

    const {name} = this.props;
    const {input} = this.state;

    return (
      <div>
        <div id="fild-container">
          <label htmlFor={name.toLowerCase()}>{name}</label>
          <input type="text" id={name.toLowerCase().replaceAll(' ','-')} name={name.toLowerCase()} value={input} onChange={this.onChange}></input>
        </div>
      </div>
    )
  };
};

export default Fild;