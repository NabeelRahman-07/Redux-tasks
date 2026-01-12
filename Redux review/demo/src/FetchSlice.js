import { createSlice } from "@reduxjs/toolkit";


const fetchSlice = createSlice({
    name: "fetch",
    initialState: {
        items: {}
    },
    reducers: {
        showData: (state, action) => {
            state.items = action.payload;
        }
    }

})


export const { showData } = fetchSlice.actions
export default fetchSlice.reducer
