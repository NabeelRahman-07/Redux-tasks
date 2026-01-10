import fetchReducer from "./fetchslice"
import { configureStore } from "@reduxjs/toolkit"


export const store=configureStore({
    reducer:{
        "title":fetchReducer
    }
})