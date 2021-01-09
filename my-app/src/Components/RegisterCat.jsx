import React, { useEffect, useState } from 'react'



export default function RegisterCat(props) {

    const [formValue, setformValue] = useState({});
    const [colors, setColors] = useState([]);

    useEffect(() => {
        setColors(['Black', 'White', 'Gray', 'Brown', 'Cream']);
        setformValue(props.value);
    }, [props.value])

    const OnhandleChanger̥ = (event) => {
        event.persist();
        setformValue(formValue => ({ ...formValue, [event.target.name]: event.target.value }),
        );
    }

    const onSubmit = (event) => {
        if (event) {
            event.preventDefault();
            const formSubmit = {
                Id: formValue.Id,
                name: formValue.name,
                color: formValue.color,
                age: formValue.age,
                habits: formValue.habits,
            }
            console.log(formSubmit)
            props.data(formSubmit);
            setformValue(props.value);
        }
    }

    return (
        <div className="cat-form">
            <form onSubmit={onSubmit}>
                <h2>Register Your Pet 🐱</h2>
                <label>Name*:</label>
                <input
                    type="text" required name="name"
                    value={formValue.name} onChange={OnhandleChanger̥}
                />

                <label>Color*:</label>
                <select
                    required name="color"
                    value={formValue.color} name="color" onChange={OnhandleChanger̥}
                >
                    <option value="">Select color</option>
                    {colors?.map(c => <option key={c}>{c}</option>)}
                </select>

                <label>Age*:</label>
                <input
                    type="number" required min="1" name="age"
                    value={formValue.age} onChange={OnhandleChanger̥}
                />

                <label>Habits:</label>
                <textarea value={formValue.habits} name="habits" onChange={OnhandleChanger̥} />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
