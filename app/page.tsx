'use client'
import React from 'react'
import BlogList from './blog/BlogList'
import Counter from './Components/Counter'
import { Provider } from "react-redux";
import {store} from "../redux/store"


const page = () => {
  return (
    < Provider store = {store}>

      < BlogList />
    </Provider>  
    )
}

export default page