import React, { useEffect, useState } from 'react'
import { getUsers } from '../api/ShareApi'

function FormHooks() {

    const initialState = {
        username: '',
        age: '',
        errormessage: '',
        about: '',
        selectedOption: '1',
        errorSummary: '',

    }
    const [inputs, setInputs] = useState(initialState);
    const [persons, getPersons] = useState(null);

    useEffect(() => {
        getUsers().then((res) => {
            console.log(res);
            getPersons(res.data);

        })
    }, [])



    const mySubmitHandler = (event) => {
        if (event) {
            event.preventDefault();
            const formSubmit = {
                username: inputs.username,
                age: inputs.age,
                selectedOption: inputs.selectedOption,
                about: inputs.about,
            }

            alert(formSubmit)
        }
    }


    const myChangeHandler = (event) => {
        event.persist();
        let nam = event.target.name;
        let val = event.target.value;
        let errmsg = ''
        if (nam === 'age' && !Number(val)) {
            errmsg = 'Your age must be a number'
        } else {
            errmsg = ''
        }
        inputs.errormessage = errmsg;
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }),
        );
    }



    return (

        <div>
            <form id="form1" onSubmit={mySubmitHandler}>

                <table>
                    <tbody>
                        <tr>
                            <td><p>Enter your name:</p></td>
                            <td>
                                <input
                                    type='text'
                                    name='username'
                                    onChange={myChangeHandler}
                                    value={inputs.username}
                                    required
                                />
                            </td>
                        </tr>

                        <tr>
                            <td><p>Enter your age:</p></td>
                            <td><input
                                type='text'
                                name='age'
                                onChange={myChangeHandler}
                                value={inputs.age}
                                required
                            />
                            </td>
                            <span style={{ color: 'red' }}>{inputs.errormessage}</span>
                        </tr>

                        <tr>
                            <td><p>Select Gender</p></td>
                            <td>
                                <div>
                                    <select
                                        name="selectedOption"
                                        value={inputs.selectedOption}
                                        onChange={myChangeHandler}

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
                                onChange={myChangeHandler}
                                value={inputs.about}
                                required
                            /></td>
                        </tr>
                    </tbody>
                </table>
                <input type='submit' />

            </form>


            <div>
                <ul>
                    {persons?.map(person => <li>{person.name}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default FormHooks
