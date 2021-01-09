import React, { Component } from 'react'

 class Eventbind extends Component {
constructor(props) {
    super(props)

    this.state = {
         message : 'welcome!'
    }
    this.clickHandle = this.clickHandle.bind(this)
}


clickHandle() {
     this.setState({
         message:'Good Bye'
     })
}

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
              {/* <button onClick={()=> this.clickHandle()}>Click </button>   */}
              <button onClick={this.clickHandle}>Click </button>  
            </div>
        )
    }
}

export default Eventbind
