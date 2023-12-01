

export interface ProductoPrincipal {
    id_categoria?: number | undefined,
    id_subcategoria?: number | undefined,
    id_marcas?: number | undefined,
    id?: number| undefined,
    nombreProducto?: string,
    modelo?: string,
    descripcion?: string
    precio?: number | undefined,
    stock?: number | undefined,
    nombre?: string,
    base64?: string
    caracteristicasPrincipales?: string,
    imagenes?:[],
    estrellas?: number,
}

/* export interface Imagen {
    nombre: string,
    base64: string
} */