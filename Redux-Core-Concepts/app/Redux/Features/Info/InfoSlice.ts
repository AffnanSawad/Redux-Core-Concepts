import { createSlice } from "@reduxjs/toolkit";

export const initialState = {

    name : "affnan",
    age : 21 ,
    bg : "b+"
}


const infoSlice = createSlice({
    name : "information" ,
    initialState ,
    reducers: {}
})

export  default infoSlice.reducer