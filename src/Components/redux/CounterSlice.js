import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({

    name:"counterApp",
    initialState:{
        value:0,
       
    }
    ,
    reducers:{
        //action are created inside this reducers key as object


        //function to increment number
        increment:(state, action)=>{
            state.value+= action.payload      //if its a argument function then it can only be accessed by action and value in payload
        },
        //function to decrement the number
        decrement:(state,action)=>{
          
            state.value-= action.payload
        },
        //function to reset
        reset:(state,action)=>{
            state.value= action.payload
            
        }
    }
})



//action is required by component in order to update the state 


export const{increment,decrement,reset}=counterSlice.actions;

//reducer is required to store to change the state value
export default counterSlice.reducer

//to create slice we need createSlice() method.


