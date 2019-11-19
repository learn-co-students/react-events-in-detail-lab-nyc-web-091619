// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            delay: this.props.delay
        }
    }

    addDelay(event) {
        let timer = setTimeout(() => this.props.onDelayedClick(event), this.props.delay);
    }
    
    componentWillUnmount() {
        clearTimeout(timer);
    }

    onClickHandler = event => {
        event.persist()
        this.addDelay(event)
    };

    render() {
        return (
            <button onClick={this.onClickHandler}>
                Delayed Button
            </button>
        )
    }

}