import { configureStore } from "@reduxjs/toolkit";
import viewReducer from './features/viewSlice';
import  paginationReducer from "./features/paginationSlice";
export const store = configureStore({
    reducer:{
       view: viewReducer,
       pagination: paginationReducer 
    }
})