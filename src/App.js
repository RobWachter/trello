import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    //enter state items here

    this.state = {
      image: "StreetFighter" // "MortalKombat"
    }

    this.drawImage = this.drawImage.bind(this)
  }

  drawImage() {
    if (this.state.image === "StreetFighter")
    {
      return <img alt="tuesday" src="https://media.giphy.com/media/1192zFRwYEf4g8/giphy.gif" />
    }
    else
    {
      return <img alt="kano" src="https://media.giphy.com/media/elAmQxZBB0sJW/giphy.gif" />
    }
  }



   render() {
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
        <div className="box" onClick={this.drawImage()}>
        {/* {this.drawImage()} */}

        </div>
      </section>
    );
  }
}

export default App;
