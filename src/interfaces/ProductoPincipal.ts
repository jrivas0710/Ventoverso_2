

export interface ProductoPrincipal{
    id_categoria?:string,
    id_subcategoria?: string,
    id_marcas?: string,
    id?: string, // esto lo agregue yo
    estrellas?:number,
    descripcion?: string,
    nombreProducto?: string,
    modelo?: string,
    precio?: string,
    stock?: string,
    imagenes?: Imagen[],
    detalle?: {
        clave?: string,
        sistema?: string,
        cantLlaves?: string,
        materialLlave?: string,
        materialCuerpo?: string,
        incuyeBoquilla?: boolean,
        cantBarriles?: string,
        largoBarril?: string,
        reposaPulgar?: string,
        cantAnillos?: string,
        incluyeCanas?: boolean,
        incluyeMaleta?: boolean,
        origen?: string
    }

}

export interface Imagen {
    nombre: string,
    base64: string
}


