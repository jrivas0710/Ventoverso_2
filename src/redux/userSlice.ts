
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TokenClaims } from "../components/sidesheet/SideSheet";
import { jwtDecode } from "jwt-decode";


interface UserState {
    idCliente:string | number
    rutCompleto: string | number,// o string
    nombre: string,
    apellido: string,
    correo: string,
    roles: string[],
    iat: string | number, //lo puse como string pero despues lo parseare a number 
    exp: string | number, //lo puse como string pero despues lo parseare a number
    isAuthenticate: boolean,
    token: string
}

const defaultInitialState: UserState = { // cuando el usuario no este logueado, este sera el estado.
    idCliente: '',
    rutCompleto: '',
    correo: '',
    nombre: '',
    apellido: '',
    roles: [],
    iat: '',
    exp: '',
    isAuthenticate: false,
    token: ""
}

//mi esto inicial debo obtenerlo del storage para que al recargar sea persistente el user logueado
const initialState = () => {

   const token = localStorage.getItem("token") ?? '';
    
    if (token == "") {
        return defaultInitialState;
    }
 

    const jwtPayloand = jwtDecode<TokenClaims>(token) //digo que si existe el token, retorne al usuario como estado inicial

  const estadoPersistente = {
        idCliente:jwtPayloand.idCliente,
        rutCliente: jwtPayloand.rutCliente,
        nombre: jwtPayloand.nombre,
        apellido: jwtPayloand.apellido,
        correo: jwtPayloand.correo,
        roles: jwtPayloand.roles,
        iat: jwtPayloand.iat,
        exp: jwtPayloand.exp,
        isAuthenticate: true,
        token
    } 

    return estadoPersistente

    //mientras el token exista en el local, este sera mi estado inicial
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<UserState>) => {
            const newState = { ...action.payload }
            console.log('desde el estado',state); //todo lo que manden despuesd e hacer login lo voy a conservar en ese estado
            return newState
        },
        logout: (state) => {
            state = { ...defaultInitialState };
            console.log(state);
        }
    }
})


export default userSlice.reducer;
export const { login, logout } = userSlice.actions;