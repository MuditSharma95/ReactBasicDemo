import React, { Component } from 'react'





class Counter extends Component {

    constructor() {
        super()
        this.state = {
            count: 0,
        }
    }

    IncreaseCount() {
        // this.setState(
        //     {

        //         count: this.state.count+1
        //     }
        // ) 
        this.setState(prevState => ({
            count: prevState.count + 1
        })
        )
    }

    IncrementFive() {
        this.IncreaseCount();
        this.IncreaseCount();
        this.IncreaseCount();
        this.IncreaseCount();
        this.IncreaseCount();
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.IncrementFive()}>Click</button>
            </div>


        )
    }
}

export default Counter;