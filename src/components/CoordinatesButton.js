import React from 'react'

export default class CoordinatesButton extends React.Component {

    coordinateHandler = (e) => {
        let xY = []
        xY.push(e.clientX)
        xY.push(e.clientY)
        this.props.onReceiveCoordinates(xY);
    }


    render() {
        return (
            <button onClick={this.coordinateHandler}></button>
        )
    }
}