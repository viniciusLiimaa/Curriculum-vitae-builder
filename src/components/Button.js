import React, { Component } from 'react';
import '../styles/button.css'

class Button extends Component {
  constructor(props) {
    super(props);
  };


  clicked = (e) => {
    const targetEl = e.target;

    if (targetEl.id.includes("update")) {
      // Executa o código de tooglar cada section para update
      let inputFilds = targetEl.parentElement.parentElement.parentElement.getElementsByTagName('input');

      for (let i = 0;i < inputFilds.length;i++){
        console.log(inputFilds[i])
      }
      
      
    } else {
      console.log("not a update button")
      // Da preview no CV todo
    }
  }


  render() {

    const { name, id } = this.props;

    return (
      <div>
        <div id="button-container">
          <button onClick={this.clicked} className='section-button' id={id}>{name}</button>
        </div>
      </div>

    );
  };

};

export default Button;