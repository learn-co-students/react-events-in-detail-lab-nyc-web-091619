// Code DelayedButton Component Here
import React, { Component } from "react";

export class DelayedButton extends Component {
  clickHandler = event => {
    event.persist();
    const delay = this.props.delay;
    const cb = this.props.onDelayedClick;
    setTimeout(() => cb(event), delay);
  };

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Delayed</button>
      </div>
    );
  }
}

export default DelayedButton;
