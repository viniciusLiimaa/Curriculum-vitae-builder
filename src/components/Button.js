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
        <button className='section-button' id={id}>{name}</button>

      </div>

    );
  };

};

export default Button;