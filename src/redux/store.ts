import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";


const store = configureStore({
    reducer:{
        auth:authSlice

    }

})

const state = store.getState()

export type RootStateType = typeof state

export default store

   

