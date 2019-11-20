// Code CoordinatesButton Component Here

import React, { Component } from 'react';

class CoordinatesButton extends Component {

    handleClick = event => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    };

    render() { 
        console.log(this.props)
        return ( 
            <button onClick={this.handleClick}> Coordinates Button </button>
         );
    }
}
 

export default CoordinatesButton;