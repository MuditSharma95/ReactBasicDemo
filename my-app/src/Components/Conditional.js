import React, { Component } from 'react'

export class Conditional extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {

        return (

            this.state.isLoggedIn &&  <div>welcome guest</div>
        )


// return this.state.isLoggedIn?
// <div>welcome guest</div>
// :
// <div>welcome Mudit</div> 

// let message;
// if(this.state.isLoggedIn) {
//     message = <div>welcome guest</div>
// } else {
//     message = <div>welcome mudit</div>

// }

// return <div>{message}</div>



        // if(this.state.isLoggedIn)
        // return <div>welcome guest</div>
        // else
        // return <div>welcome Mudit</div>
           
    }
}

export default Conditional
