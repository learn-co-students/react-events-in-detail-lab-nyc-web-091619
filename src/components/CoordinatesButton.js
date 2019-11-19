import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
    
    // We cannot set the state because the "props" being sent down to this
    // component by index.js is a FUNCTION.  That function, which is called
    // this.props.onReceiveCoordinates takes an argument of x,y coordinates 
    // and console logs them.  The call in index.js looks like this:
    // ln 10: ...onReceiveCoordinates={ mouseCoordinates => console.log(mouseCoordinates) }
    //
    // Originally I thought I could set the state and then adjust it with setState()
    // and it would get passed back up.  Then I realized that since it is a function
    // it just need to be set to the array of X, Y coordinates and it would then
    // execute the function in index.js.

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         onReceiveCoordinates: props.mouseCoordinates
    //     }
    // }

    // onClickHandler = (event) => {
    //     this.setState({onReceiveCoordinates: [event.clientX, event.clientY]})
    // }
    
    // Here we are setting the function to handle the "onClick" event...it simply
    // takes the "event" object passed to by the click event handler and then 
    // gets the event.clientX and event.clientY properties.  A full list of properties
    // for mouse events is here: https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
    onClickHandler = (event) => 
        this.props.onReceiveCoordinates([event.clientX, event.clientY])

    // just create a button and add an onClick event handler that passes the event to
    // the "onClickHandler"
    render() {
        return (
            <button onClick={this.onClickHandler}>
            </button>
        )
    }

}