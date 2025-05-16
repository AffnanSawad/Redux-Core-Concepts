import { configureStore } from "@reduxjs/toolkit";
import  { 
    loggerMiddleware } from "./Middlewares/logger"
import CounterSlice from "../Redux/Features/Counters/CounterSlice"
import InfoSlice from "../Redux/Features/Info/InfoSlice"

export const store = configureStore( {
 
    reducer: {

        counter : CounterSlice  ,

        Informations : InfoSlice
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),


}  );


export type RootState = ReturnType < typeof store.getState >;

export type AppDispatch = typeof store.dispatch