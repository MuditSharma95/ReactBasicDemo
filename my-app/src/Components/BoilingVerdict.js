import React, { Component, useState } from 'react'

export class BoilingVerdict extends Component {

    constructor(props) {
        super(props)
        this.state =  {
            celVal: 0,
            err: ""
        }
    }
    onSubmitHandler(event) {
        event.preventDefault();
        let val = this.state.celVal;
        let error = "";
        if (val >= 100) {
            error = "The water would boil.";
        } else {
            error = "The water would not boil.";
        }   
        this.setState({
            err:error
        })
    }
    onChangeHandler(event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({
            [nam]: val,
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={(e) => this.onSubmitHandler(e)}>
                    <label>Type Celcius
                        <input type="text" name="celVal" value={this.state.celVal}
                            onChange={(e) => this.onChangeHandler(e)}></input>
                    </label>
                    <input type="submit" value="Submit"></input>
                    <span style={{ color: 'red' }}>{this.state.err}</span>
                </form>
            </div>
        )
    }
}

export default BoilingVerdict
