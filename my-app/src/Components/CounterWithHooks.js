 import React , {useState} from 'react'

 function CounterWithHooks() {
const [counterState, setCounterState]  = useState({
    count:0
})


function IncrementFive () {
   setCounterState((ps)=> ({
       count: ps.count+5
   }))
}
    return (
        <div>
              <h1>{counterState.count}</h1>
                <button onClick={()=> IncrementFive()}>Click</button>
        </div>
    )
}





 export default CounterWithHooks;
