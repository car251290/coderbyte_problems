import React, { useState } from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    visibility: false
  }
  this.handleClick = this.handleClick.bind(this);
}

handleClick() {
  this.setState(prevState => ({
    visibility: !prevState.visibility
    }));
  //this.setState({
   // visibility: true
  //}) 
}
  render() {
      if(this.state.visibility){
         return (
           <div>
           <button color="#841584"onClick= {this.handleClick}>off</button>
           </div>
        
      );
      } else {
        return (
          <div>
           <button color="#ffff" onClick= {this.handleClick}>on</button>
          </div>
        
      );
      }
   }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);