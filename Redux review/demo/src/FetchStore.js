import { configureStore } from "@reduxjs/toolkit";
import fetchreducer from "./FetchSlice"

export const store=configureStore({
    reducer:{
        fetch:fetchreducer
    }
})