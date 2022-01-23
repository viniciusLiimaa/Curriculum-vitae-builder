import React, {Component} from 'react';
import '../styles/section.css';
import Fild from '../components/Fild';
import Button from '../components/Button';

class Section extends Component {
  constructor(props) {
    super(props);
  };

  buildFilds = (fildNames) => {
    const fildArray = []

    for (let i = 0; i < fildNames.length; i++) {
      fildArray.push(<Fild name={fildNames[i]} key={fildNames[i]} sendToMain={this.props.updateMain}/>)
    }
    
    return (
      <div>
        {fildArray}
      </div>
    )
  }

  render() {

    const {title, fildNames, btnId} = this.props;
    
  
    return(
      <div>
        <div id="section-container">
          <h2>{title}</h2>
          {this.buildFilds(fildNames)}
          <Button name="Update section" id ={btnId}/>
        </div>
        
      </div>
    )

  }


} 

export default Section;