import React, { Component } from 'react';
import '../styles/button.css'

class Button extends Component {
  constructor(props) {
    super(props);
  };

  render() {

    const { name, id } = this.props;

    return (
      <div>
        <div id="button-container">
          <button className='section-button' id={id}>{name}</button>
        </div>
      </div>

    );
  };

};

export default Button;