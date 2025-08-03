import { createSlice } from "@reduxjs/toolkit";

const configSlice =  createSlice({
    name : "config",
    initialState:{
        langSelected : 'en',
    },
    reducers:{
        changeLanguage : (state, action)=>{
            state.langSelected = action.payload;
        }
    }
})


export const {changeLanguage} = configSlice.actions;


export default configSlice.reducer;