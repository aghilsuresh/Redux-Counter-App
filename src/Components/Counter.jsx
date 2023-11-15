import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './redux/CounterSlice'

function Counter() {


  //state to hold value from input box
  const [range, setRange] = useState("")
  

  //hook to dispatch a function in action ..we need this hook to do the action like cliking the button
 const dispatch=useDispatch()
 //componet can access the state by  using useselector hook

 const count = useSelector((state)=>state.counter.value)


 console.log(range);

  return (
   <>
      <div className='d-flex align-items-center justify-content-center w-100 flex-column mt-5 flex-column mb-5 '>
  
          <h1 style={{fontSize:"80px"}}>{count}</h1>
          <div className='mt-5'> 
              <button onClick={()=>dispatch(decrement(Number(range)))} className='btn btn-warning p-2'>Decrement</button>
              <button onClick={()=>dispatch(reset())} className='btn btn-danger p-2 ms-3' >Reset</button>
              <button onClick={()=>dispatch(increment(Number(range)))} className='btn btn-success p-2 ms-3' >Increment</button>
              {/* number method is used to convert string into number */}
          </div>
      </div>
  
       {/* input box */}
       <div>
        <input onChange={(e)=>setRange(e.target.value)} type='text' className='form-control w-100 mt-3' placeholder='enter the range' style={{borderColor:"blue"}}/>
       </div>
   </>
  )
}

export default Counter