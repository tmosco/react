import React, { Component } from "react";
import Counter from "./counter";

class Greet extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="greetings">{this.greetings()}</div>
      </div>
    );
  }

  getHour() {
    const today = new Date();
    const time = today.getHours();
    return time;
  }

  greetings() {
    return (
      <span>
        {this.getHour() < 12 ? (
          <h1>Good Morning </h1>
        ) : this.getHour() > 12 && this.getHour < 18 ? (
          <h1> Good Afternoon </h1>
        ) : (
          <h1> Good Evening </h1>
        )}
      </span>
    );
  }
}

export default Greet;
