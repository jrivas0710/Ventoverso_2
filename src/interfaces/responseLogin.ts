
export interface ResponseLogin {
    email:string,
    password:string,
    nombre:string,
    carro: string[],
    rol: Rol[],
    isAtuthenticate:boolean
}

interface Rol {
    admin:string,
    user:string
}