import { Middleware, configureStore } from "@reduxjs/toolkit";
import carritoReducer from "./carritoSlice"
import userReducer from './userSlice'


const persistLocalStorage: Middleware = (store) => (next) => (action) => {

    console.log('llamando midleware')

    next(action);

    console.log(action.type)
    const estado = store.getState()
    console.log(estado.user.token)

    if (action.type == "user/login") {

        console.log('middleware logueado')
        const token = JSON.stringify(estado.user.token)    // preguntar
        localStorage.setItem('token',token) 

    } else if (action.type == "user/logout") {
         localStorage.removeItem('token');
    }


}


export const store = configureStore({

    reducer: {
        carrito: carritoReducer,
        user: userReducer
    },
    middleware: [persistLocalStorage] //el array ttiene una funcion y cuando se produzca un cambio de estado se llamara a esa funcion 
})

export type RootState = ReturnType<typeof store.getState>


