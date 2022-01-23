import React, { Component } from 'react';
import Section from './Section';
import Button from './Button';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
    }

  };

  updateInfo = (fildName, information) => {
    this.setState({
      [fildName]: information
    });
  }
  


  render() {

    return (

      <div>
        <Section title="GENERAL INFORMATION" fildNames={["Name","Email","Phone Number"]} btnId="update-general" updateMain = {this.updateInfo}/>
        <Section title="EDUCATIONAL EXPERIENCE" fildNames={["School name", "Title of Study", "Date of Study"]} btnId="update-educational" updateMain = {this.updateInfo}/>
        <Section title="PRACTICAL EXPERIENCE" fildNames={["Company name","Position title","Main tasks", "Start Date", "End date"]} btnId="update-practical" updateMain = {this.updateInfo}/>
        <Button name='Preview your CV' id="preview-btn"/>

      </div>

    )


  }
};

export default Main;