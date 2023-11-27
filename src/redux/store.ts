import { configureStore } from "@reduxjs/toolkit";
import carritoReducer from "./carritoSlice"
import productosReducer from "./productosDisponiblesSlice"

export const store = configureStore({

    reducer:{
        carrito: carritoReducer,
        productos: productosReducer //aqui yo buscare el producto po el id, y lo agregare a mi carro
    }
})

export type RootState = ReturnType<typeof store.getState> 


