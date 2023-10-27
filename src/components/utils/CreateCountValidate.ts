import * as yup from "yup";



export const CreateCountValidate = yup.object().shape({
    name: yup.string().trim().required("Este campo es requerido"),
    email: yup.string().trim().required("Este campo es requerido"),/* .min(4, "El mínimo debe ser de cuatro caracteres").max(20,"El máximo debe ser de 20 caracteres") */
    apellido: yup.string().trim().required("Este campo es requerido").max(20,"El máximo debe ser de 20 caracteres"),
    password: yup.string().trim().required("Este campo es requerido").min(4, "El mínimo debe ser de cuatro caracteres").max(20,"El máximo debe ser de 20 caracteres") 
     
  })