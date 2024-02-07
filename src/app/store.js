import {configureStore} from '@reduxjs/toolkit';
import popupReducer from '../Slice/popupSlice'
export default configureStore({
    reducer: {
        popup: popupReducer
    }
    });
