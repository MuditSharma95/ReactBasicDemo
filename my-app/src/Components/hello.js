import React from 'react';



function helloMsg(props) {
    console.log(props);
    return (
    <div id='hello'  className='temp'>
        <h1>Hello {props.name}!!</h1>
        {props.children}
    </div>
    )
}

// const helloMsg = (props) => {
//     console.log(props);
//     return (
//     <div id='hello'  className='temp'>
//         <h1>Hello {props.name}!!</h1>
//         {props.children}
//     </div>

    
//     );
// }

export default helloMsg;