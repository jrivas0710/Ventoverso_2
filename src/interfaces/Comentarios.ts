export interface Comentario {
    productoId : number,
    cliente: string,
    fotoClienteUrl: string,
    nombreCliente:string,
    estrellas:number,
    titulo:string,
    comentario:string

    calificaciones:{
        caracteristicas:number,
        sonido:number,
        fabricacion:number
    },
    reacciones:{
        MeGusta:number,
        NoMeGusta:number,
        Denunciar:number
    }
}
