import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            age: null,
            errormessage: '',
            about: '',
            selectedOption: '1',
            errorSummary: ''
        };
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        console.log(this.state)
        const formSubmit = {
            username: this.state.username,
            age: this.state.age,
            selectedOption: this.state.selectedOption,
            about: this.state.about,
        }
        console.log(formSubmit)

    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let errmsg = ''
        if (nam === 'age' && !Number(val)) {
            errmsg = 'Your age must be a number'
        } else {
            errmsg = ''
        }
        this.setState({
            [nam]: val,
            errormessage: errmsg
        });
    }
    render() {
        return (
            <form id="form1" onSubmit={this.mySubmitHandler}>

                <h1>{this.state.errorSummary}</h1>
                <table>
                    <tbody>
                        <tr>
                            <td><p>Enter your name:</p></td>
                            <td>
                                <input
                                    type='text'
                                    name='username'
                                    onChange={this.myChangeHandler}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td><p>Enter your age:</p></td>
                            <td><input
                                type='text'
                                name='age'
                                onChange={this.myChangeHandler}
                            />
                            </td>
                            <span style={{ color: 'red' }}>{this.state.errormessage}</span>
                        </tr>

                        <tr>
                            <td><p>Select Gender</p></td>
                            <td>
                                <div>
                                    <select
                                        name="selectedOption"
                                        value={this.state.selectedOption}
                                        onChange={this.myChangeHandler}

                                    >
                                        <option value="1">Male</option>
                                        <option value="0">Female</option>
                                    </select>
                                </div>
                            </td>
                        </tr>


                        <tr>
                            <td><p>Enter about you:</p></td>
                            <td><textarea
                                type='text'
                                name='about'
                                onChange={this.myChangeHandler}
                            /></td>
                        </tr>
                    </tbody>
                </table>
                <input type='submit' />

            </form>
        );
    }
}




export default Form
