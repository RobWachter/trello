import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    //enter state items here

    this.state = {
      color: this.chooseColor
    };
    this.handleClick = this.handleClick.bind(this);
    this.chooseColor = this.chooseColor.bind(this);
  }
 
  //   }
  //   this.drawBox = this.drawBox.bind(this)
  // }

  chooseColor() {
    //const random = [];
    let letters = '0123456789ABCDEF';
    let random = '#';
    for (var i = 0; i < 6; i++) {
        random += letters[Math.floor(Math.random() * 16)];

    }
    return random;
  }
  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
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
        <div style={myStyle} onMouseOver={this.handleClick}></div>
        <div style={myStyle} onMouseOver={this.handleClick}></div>
        <div style={myStyle} onMouseOver={this.handleClick}></div>
        <div style={myStyle} onMouseOver={this.handleClick}></div>
        <div style={myStyle} onMouseOver={this.handleClick}></div>
        <div style={myStyle} onMouseOver={this.handleClick}></div>

      </div>
    );
  }
}

export default App;
