import { configureStore } from "@reduxjs/toolkit";
import carritoReducer from "./store"

export const store = configureStore({

    reducer:{
        carrito: carritoReducer
    }
})

export type RootState = ReturnType<typeof store.getState> 
