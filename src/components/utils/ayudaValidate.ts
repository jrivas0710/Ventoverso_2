
import * as yup from "yup";



export const AyudaValidate = yup.object().shape({
    name: yup.string().required("Este campo es requerido").trim().required("Este campo es requerido").max(20,"El máximo debe ser de 20 caracteres"),
    apellido: yup.string().trim().required("Este campo es requerido").max(20,"El máximo debe ser de 20 caracteres"),
    email: yup.string().trim().required("Este campo es requerido").max(30,"El máximo no puede sobrepasar los 30 caracteres").email("Ingrese un correo válido"),
    telefono: yup.string().trim().required("Este campo es requerido").max(20,"El máximo debe ser de 20 caracteres"),
    mensaje: yup.string().trim().required("Debes rellenar el campo del mensaje").max(200, "El máximo debe ser de 200 caracteres")
     
  })