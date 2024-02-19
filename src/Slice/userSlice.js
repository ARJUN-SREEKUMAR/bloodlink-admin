import { createSlice } from "@reduxjs/toolkit";
export const userSlice=createSlice(
   {
    name:"user",
    initialState:{
        isLogged:false,
        user:null
    },
    reducers:{
        toggleLogged:(state,action)=>{
            state.isLogged=true;
            state.user=action.value
        }
        
    }
   }

)

export const {toggleLogged} = userSlice.actions;
export default userSlice.reducer;