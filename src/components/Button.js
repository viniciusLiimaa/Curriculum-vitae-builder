import React, { Component } from 'react';
import '../styles/button.css'

class Button extends Component {
  constructor(props) {
    super(props);
  };


  clicked = (e) => {
    const targetEl = e.target;

    if (targetEl.id.includes("update")) {
      // Toggle each section for update
      let inputFilds = targetEl.parentElement.parentElement.parentElement.getElementsByTagName('input');

      for (let i = 0;i < inputFilds.length;i++){
        inputFilds[i].classList.toggle("inactive-fild");
        console.log(inputFilds[i]);
      }
      
      
    } else {

      if (targetEl.textContent === "Preview your CV") {
        targetEl.textContent = "Edit you CV";
      } else {
        targetEl.textContent = "Preview your CV";
      }
      
      // Preview the entire CV
      const allBtns = document.querySelectorAll("button");
      const allFields = document.querySelectorAll("input");

      allBtns.forEach((btn) => {
        if (btn.id != "preview-btn") {
          btn.classList.toggle("inactive-button");
        };
      });

      allFields.forEach((field) => {
        field.classList.toggle("preview-fild");
        if (field.className.includes("inactive-fild")) {
          field.classList.remove("inactive-fild");
        };
      });
    };
  };


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