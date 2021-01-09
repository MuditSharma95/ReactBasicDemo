import React, { Component } from 'react';


class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Click on the button '
        }
    }
    changeMessage() {
        this.setState({
            message: 'Welcome Mudit'
        })
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.message}
                </h1>
                <button onClick={() => this.changeMessage()}>Click</button>
            </div>
        )


    }
}

export default Message;