import { createSlice } from "@reduxjs/toolkit";
export const userSlice=createSlice(
   {
    name:"user",
    initialState:{
        isLogged:false,
        user:null
    },
    reducers:{
        toggleLogged:(state)=>{
            state.isLogged=!state.isLogged;
        }
        
    }
   }

)

export const {toggleLogged} = userSlice.actions;
export default userSlice.reducer;