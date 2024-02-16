import {configureStore} from '@reduxjs/toolkit';
import popupReducer from '../Slice/popupSlice'
import  userReducer  from '../Slice/userSlice';
import adminReducer from '../Slice/adminSlice'
export default configureStore({
    reducer: {
        popup: popupReducer,
        user: userReducer,
        admin:adminReducer
    }
    });
