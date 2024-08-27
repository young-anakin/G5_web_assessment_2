"use client"
import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './slices/blogSlice';
// import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice"
export const store = configureStore({
    reducer : {
        counter: counterReducer,
        blog: blogReducer
        
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
