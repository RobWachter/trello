import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    //enter state items here

    this.state = {
      color: [92, 132, 153]
    };
    this.handleClick = this.handleClick.bind(this);
  }
 
  //   }
  //   this.drawBox = this.drawBox.bind(this)
  // }

  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random() * 256));
    }


    return random;
  }

  handleClick() {
    this.setState({
      color: this.chooseColor()
    });
  }

  drawBox() {
    if (this.state.box === "6ED66D") {
      return
    }
    else {
      return
    }
  }



  render() {
    const myStyle = {
      backgroundColor: this.state.color,
      width: '10vw',
      height: '10vh',
      margin: '-5px',
      border:  '-5px',
      padding: '-5px',
      display: 'inline-block'
    }
    return (
      <div className="container">
        <div style={myStyle} onCLick={this.handleClick}></div>
        {/* <div className="box" style={{backgroundColor: this.setState.color}} onMouseOver={this.handleClick}></div>
        <div className="box" style={{backgroundColor: this.setState.color}} onClick={this.handleClick}></div>
        <div className="box" style={{backgroundColor: this.state.color}} onMouseOver={this.handleClick}></div>
        <div className="box" style={{backgroundColor: this.state.color}} onMouseOver={this.handleClick}></div>
        <div className="box" style={{backgroundColor: this.state.color}} onMouseOver={this.handleClick}></div> */}

      </div>
    );
  }
}

export default App;
