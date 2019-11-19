// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {
    
    persistEvent = (event) => {
        event.persist();
        this.props.onDelayedClick(event);
    }

    render() {
        return (
            <button onClick={this.persistEvent}></button>
        )
    }
}