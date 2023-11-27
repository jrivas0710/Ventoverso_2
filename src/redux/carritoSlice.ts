import { createSlice } from "@reduxjs/toolkit";
import { ProductoPrincipal } from "../interfaces/ProductoPincipal";


const initialState:ProductoPrincipal[] = []; // tipe el estado inicial diciendo que recibira elementos como este 

 const carritoSLice = createSlice({
    name:"carrito",
    initialState,
    reducers:{
        agregarProducto: (state, action) => {
            
            console.log([...state, action.payload]); 
            return [...state, action.payload];  //el payload es lo que trae el producto desde mi agregarCarro
        }, //y lo agrega a mi estado actual 
        //crearCarrito
       // agregarProducto
        //eliminarProducto
       // vaciarCarro
       // pagar
    }
})

export default carritoSLice.reducer // lo importare en mi store
export const {agregarProducto} = carritoSLice.actions

