// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    // handleClick(e){
    //     this.props.onReceiveCoordinates([e.clientX, e.clientY])
    // }

    handleClick = e =>{
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }

    render() {
      return (
        <div>
            {/* <button onClick={this.handleClick.bind(this)}>Coordinates</button> */}
            <button onClick={this.handleClick}>Coordinates</button>
        </div>
      )
    }
  }