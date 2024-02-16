import { createSlice } from "@reduxjs/toolkit";
export const adminSlice=createSlice(
    {
        name:"admin",
        initialState:{
            value:"home"
        },
        reducers:{
            changeState:(state,action)=>{
                state.value=action.payload;
            }
             
        }
        
    }
)

export const {changeState} =adminSlice.actions;
export default adminSlice.reducer;