import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    //enter state items here

    this.state = {
      box: "#6ED66D" 
    }

    this.drawBox = this.drawBox.bind(this)
  }

  drawBox() {
    if (this.state.box === "6ED66D")
    {
      return 
    }
    else
    {
      return 
    }
  }



   render() {
     //Const newColor = 
    // let someImage = "";
    // if (this.state.image === "StreetFighter")
    // {
    //   someImage = <img alt="tuesday" src="https://media.giphy.com/media/1192zFRwYEf4g8/giphy.gif" />
    // }
    // else
    // {
    //   someImage = <img alt="kano" src="https://media.giphy.com/media/elAmQxZBB0sJW/giphy.gif" />
    // }
    return (
      <section className="container">
        <div className="box" onClick={this.drawBox()}></div>
        <div className="box" onClick={this.drawBox()}></div>
        <div className="box" onClick={this.drawBox()}></div>
        {/* {this.drawBox()} */}

       
      </section>
    );
  }
}

export default App;
