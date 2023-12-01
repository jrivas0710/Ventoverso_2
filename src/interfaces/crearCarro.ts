
export interface  CrearCarro {

        rutCliente: string,
        carritoId:number,
        statusCarrito: string,
        creacionDate: Date
    
} 

export interface ProductoCarro {
    rutCliente: string, 
    carritoId:number,
    productoId:number,
    cantidad:number
    
}
