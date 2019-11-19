// Code CoordinatesButton Component Here
import React, { Component } from "react";

export class CoordinatesButton extends Component {
  clickHandler = e => {
    const coords = [e.clientX, e.clientY];
    this.props.onReceiveCoordinates(coords);
  };

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Coordinates Button </button>
      </div>
    );
  }
}

export default CoordinatesButton;
