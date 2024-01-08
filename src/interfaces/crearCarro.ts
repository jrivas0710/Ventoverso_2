
export interface  CrearCarro {

        rutCliente: string,
        carritoId:number,
        statusCarrito?: string,
        creacionDate?: Date
    
} 

export interface ProductoCarrito {
        carritoId:number,
        productoId:number,
        cantidad:number,
        id:number
}
