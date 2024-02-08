import {configureStore} from '@reduxjs/toolkit';
import popupReducer from '../Slice/popupSlice'
import  userReducer  from '../Slice/userSlice';
export default configureStore({
    reducer: {
        popup: popupReducer,
        user: userReducer
    }
    });
