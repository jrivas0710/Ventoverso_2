
import * as yup from "yup";



export const AyudaValidate = yup.object().shape({
    nombre: yup.string().trim().required("Este campo es requerido").max(20,"El máximo debe ser de 20 caracteres"),
    apellido: yup.string().trim().required("Este campo es requerido").max(20,"El máximo debe ser de 20 caracteres"),
    email: yup.string().trim().required("Este campo es requerido").max(20,"El máximo debe ser de 20 caracteres"),
    telefono: yup.string().trim().required("Este campo es requerido").max(20,"El máximo debe ser de 20 caracteres") 
     
  })