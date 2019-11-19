// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {

    clickHandler = (e) => {
        this.props.onReceiveCoordinates([e.clientX,e.clientY])
    }
    
    
    render() {
        return(
            <button
                onClick={this.clickHandler}>
            </button>
        )

    }

}

export default CoordinatesButton;


