import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice(
   {
    name:"ui",
    initialState:{
        load:false
    },
    reducers:{
        toggleload:(state,action)=>{
            state.load=action.payload;
        }
         
    }
    
    },
   
)
export const {toggleload}=uiSlice.actions 
export default uiSlice.reducer 
 