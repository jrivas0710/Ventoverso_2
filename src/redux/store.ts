import { createSlice } from "@reduxjs/toolkit";
import { ProductoPrincipal } from "../interfaces/ProductoPincipal";


const initialState:ProductoPrincipal[] = []; // tipe el estado inicial diciendo que recibira elementos como este 

 const carritoSLice = createSlice({
    name:"carrito",
    initialState,
    reducers:{
        //crearCarrito
       // agregarProducto
        //eliminarProducto
       // vaciarCarro
       // pagar
    }
})

export default carritoSLice.reducer // lo importare en mi store