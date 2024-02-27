import { createSlice } from "@reduxjs/toolkit";

export const popupSlice = createSlice(
   {
    name:"popup",
    initialState:{
        value:false
    },
    reducers:{
        togglePopup:(state,action)=>{
            state.value=action.payload;
        }
         
    }
    
    },
   
)
export const {togglePopup}=popupSlice.actions //exporting the reducers  
export default popupSlice.reducer //need to import this in the store 
 