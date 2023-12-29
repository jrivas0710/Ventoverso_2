import * as yup from "yup";



export const editFormValidate = yup.object().shape({

    id_categoria: yup.string().trim().required("debe ingresar el id_categoria"),
    id_subcategoria: yup.string().trim().required("debe ingresar el id_subcategoria"),
    id_marcas: yup.string().trim().required("debe ingresar el id_marcas"),
    id: yup.string().trim().required("Debe ingresar el id del producto que desea modificar"),
    descripcion: yup.string().trim().required("debe ingresar la descripcion"),
    nombreProducto: yup.string().trim().required("debe ingresar el nombre del producto"),
    modelo: yup.string().trim().required("debe ingresar el modelo del producto"),
    precio: yup.string().trim().required("debe ingresar el precio del producto"),
    clave: yup.string().trim().required("debe ingresar la clave del producto"),
    sistema: yup.string().trim().required("debe ingresar el sistema del producto"),
    cantLlaves: yup.string().trim().required("debe ingresar la cantidad de llaves del producto"),
    materialLlave: yup.string().trim().required("debe ingresar el material de la llave del producto"),
    materialCuerpo: yup.string().trim().required("debe ingresar el material del cuerpo del producto"),
    cantBarriles: yup.string().trim().required("debe ingresar el modelo del producto"),
    largoBarril: yup.string().trim().required("debe ingresar el modelo del producto"),
    reposaPulgar: yup.string().trim().required("este campo no puede estar vacio"),
    cantAnillos: yup.string().trim().required("debe ingresar la cantidad de anillos del producto"),
    stock: yup.string().trim().required("debe ingresar el stock disponible del producto"),
    
    nombre1: yup.string().trim().required("debe ingresar el nombrede la imagen del producto"),
    nombre2: yup.string().trim().required("debe ingresar el nombrede la imagen del producto"),
    nombre3: yup.string().trim().required("debe ingresar el nombrede la imagen del producto"),
    nombre4: yup.string().trim().required("debe ingresar el nombrede la imagen del producto"),
    nombre5: yup.string().trim().required("debe ingresar el nombrede la imagen del producto"),

    base1: yup.string().trim().required("ingresa la imagen"),
    base2: yup.string().trim().required("ingresa la imagen"),
    base3: yup.string().trim().required("ingresa la imagen"),
    base4: yup.string().trim().required("ingresa la imagen"),
    base5: yup.string().trim().required("ingresa la imagen"),


    origen: yup.string().trim().required("debe ingresar el modelo del producto"),

})

















