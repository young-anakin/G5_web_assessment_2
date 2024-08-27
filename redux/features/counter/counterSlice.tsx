'use client';

import { createSlice } from "@reduxjs/toolkit";
// import { count } from "console";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {value: 0},
    reducers: {
        increment: (state) =>{
            state.value +=1
        },
        decrement : (state) =>{
            state.value -=1
        }
    }
})

export const {increment, decrement} = counterSlice.actions
export default counterSlice.reducer