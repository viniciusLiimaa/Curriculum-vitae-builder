import React, {Component} from 'react';
import '../styles/header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  };

  render() {

    return(

      <div>
        <div id="header-container">
          <div id="logo">CV</div>
          <div id="photo">Your photo goes here</div>
        </div>
      </div>

    );
  };
};

export default Header;