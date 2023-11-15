/* import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./CounterSlice";

// configstore imported from reduxtoolkit its only available in reduxtoolkit thats why its downloaded and only by configstore()method we ccan create a store (the firststep)
 export const store = configureStore({

    //reducer can only update the value of state in the store 
    //reducer key is predefined 
    //we want to initialise as a object and object can hold morethan one reducer.
    reducer:{

        //Reducer is coming from counterSlice since we are export reducer as export default
        counter:counterSlice,

    }


}) */


//to create Action file :Create Action
//to create Reducer:Create Reducer

//these to methods are standalone but we use toolkit so these to not be created as seperate we create slice instead of this..


// store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;

//corrected the code by chatgpt
