// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {
  
    handleClick = e => {
        // const event = e
        e.persist()
        setTimeout(() => {
            // this.props.onDelayedClick(event)
            this.props.onDelayedClick(e)
        }, this.props.delay);
    }

    render() {
      return (
        <div>
            <button onClick={this.handleClick}>Delayed</button>
        </div>
      )
    }
  }