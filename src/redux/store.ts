import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";
import categorySlice from "./categorySlice";


const store = configureStore({
    reducer:{
        auth:authSlice,
        category:categorySlice,
        cart:cartSlice

    }

})

const state = store.getState()

export type RootStateType = typeof state

export default store

   

