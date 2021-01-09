import React  ,{Component}from 'react';



// with JSX
class Welcome extends Component {
 render() {
     return(
         <div>
             <h1>
                 this is class component 
             </h1>
         </div>
     )


     //Without JSX

     // return React.createElement("div",
    // {id:'hello', className:'helloClass'},
    // React.createElement('h1',null,'hello Rohitx01!!')
    // )
 }
}

export default Welcome;