import { configureStore } from "@reduxjs/toolkit";

import CounterSlice from "../Redux/Features/Counters/CounterSlice"

export const store = configureStore( {
 
    reducer: {

        counter : CounterSlice 
    }


}  );