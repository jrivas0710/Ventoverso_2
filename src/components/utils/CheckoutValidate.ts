import * as yup from "yup";



export const CheckoutValidate = yup.object().shape({
    name: yup.string().trim().required("Este campo es requerido").max(20,"El máximo debe ser de 20 caracteres"),
    email: yup.string().trim().required("Este campo es requerido").max(30,"El máximo debe ser de 30 caracteres"),/* .min(4, "El mínimo debe ser de cuatro caracteres").max(20,"El máximo debe ser de 20 caracteres") */
    apellido: yup.string().trim().required("Este campo es requerido").max(30,"El máximo debe ser de 20 caracteres"),
    rut: yup.string().trim().required("Este campo es requerido")
    
     
  })