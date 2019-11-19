// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component{

    click = (e)=>{
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }

    render(){
        return <button onClick={this.click}>Coords</button>
    }
}
export default CoordinatesButton