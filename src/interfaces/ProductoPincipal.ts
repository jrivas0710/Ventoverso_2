

export interface ProductoPrincipal {
    id_categoria?: string,
    id_subcategoria?: string,
    id_marcas?: string,
    id?: string,
    nombreProducto?: string,
    modelo?: string,
    descripcion?: string
    precio?: string,
    stock?: string,
    nombre?: string,
    base64?: string
    caracteristicasPrincipales?: string,
    imagenes?:Imagen[],
    estrellas?: string,
}

export interface Imagen {
    nombre: string,
    base64: string}
