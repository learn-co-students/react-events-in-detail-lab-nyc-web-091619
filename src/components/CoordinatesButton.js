// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    findCoordinates = (e) => {
        e.persist()
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }

    render() {
        return <button onClick={this.findCoordinates}>Coordinates</button>
    }
}