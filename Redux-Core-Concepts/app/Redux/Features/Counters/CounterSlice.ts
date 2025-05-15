import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    counter : 0
}

const counterSlice = createSlice({
   
    name : "counter" ,

    initialState ,

    reducers: { 
     
        increament : (state , action)=> {
              
            state.counter = state.counter + action.payload
        },


         decreament : (state)=> {
              
            state.counter = state.counter - 1
        }



      }

})

// Important
 export const { increament , decreament } = counterSlice.actions

export default counterSlice.reducer