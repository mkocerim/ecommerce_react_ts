import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { CartType } from "../types";

export type CartStateType={
    cart:CartType | null,
    initialized:boolean
}

const initialState: CartStateType={
    cart:null,
    initialized:false
}

export const cartSlice=createSlice({
    name:'cartSlice',
    initialState,
    reducers:{

        setCart:(state:CartStateType, action: PayloadAction<CartType>)=>{

        console.log('>>SETCART ACTION',action)

        localStorage.setItem('cartToken', action.payload.tokenValue)
        state.cart = action.payload
        state.initialized=true
        },
        removeCart:(state:CartStateType)=>{
            localStorage.removeItem('cartToken')
            state.cart=null
            state.initialized=false

        }
    }
})




export default cartSlice.reducer

export const {setCart,removeCart} =cartSlice.actions