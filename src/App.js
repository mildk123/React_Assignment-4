import React, { Component } from "react";
import Broken from "./Components/Broken";
import TurnedOFF from "./Components/TurnedOFF";
import TurnedON from "./Components/TurnedON";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      bulbState: "Off"
    };
    
    this.switchOn = this.switchOn.bind(this);
    this.switchOff = this.switchOff.bind(this);
    this.breakBulb = this.breakBulb.bind(this);
  }
  switchOn() {
    this.setState({
      bulbState: "on"
    });
    // console.log(this);
  }

  switchOff() {
    this.setState({
      bulbState: "Off"
    });
    // console.log(this);
  }

  breakBulb() {
    this.setState({
      bulbState: "shattered"
    });
    // console.log(this);
  }
  render() {
    return (
      <div>
        <h2>Assignment #4</h2>
        <br />
        <hr />
        {this.state.bulbState === 'Off'&& <TurnedOFF />}
        {this.state.bulbState === 'on' && <TurnedON />}
        {this.state.bulbState === 'shattered' &&  <Broken />}

        <button onClick={this.switchOn}>Switch On</button>
        <button onClick={this.switchOff}>Switch Off</button>
        <button onClick={this.breakBulb}>Break The Bulb</button>
      </div>
    );
  }
}

export default Main;
