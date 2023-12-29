
export interface EditProducto {

    id_categoria: string,
    id_subcategoria: string,
    id_marcas: string,
    id: string,
    nombreProducto: string,
    modelo: string,
    descripcion: string
    precio: string,
    stock: string,
    estrellas: string,
    clave: string,
    sistema: string,
    cantLlaves: string,
    materialLlave: string,
    materialCuerpo: string,
    incluyeBoquilla: boolean,
    cantBarriles: string,
    largoBarril: string,
    reposaPulgar: string,
    cantAnillos: string,
    incluyeCanas: boolean,
    incluyeMaleta: boolean,
    origen: string,
    nombre: string,
    base64: string,
    imagenes: Imagen[],

    base1: string,
    base2: string,
    base3: string,
    base4: string,
    base5: string,
    nombre1: string,
    nombre2: string
    nombre3: string
    nombre4: string
    nombre5: string

}



interface Imagen {
    nombre: string,
    base64: string
}





