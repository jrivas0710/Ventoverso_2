import * as yup from "yup";



export const CreateCountValidate = yup.object().shape({
    name: yup.string().trim().required("Este campo es requerido").max(20, "el nombre no puede superar los 20 caracteres"),
    email: yup.string().trim().email("Correo inválido").required("Este campo es requerido").max(30,"el correo no puede exceder los 30 caracteres de largo"),
    apellido: yup.string().trim().required("Este campo es requerido").max(20,"El máximo debe ser de 20 caracteres"),
    password: yup.string().trim().required("Este campo es requerido").min(4, "El mínimo debe ser de cuatro caracteres").max(20,"El máximo debe ser de 20 caracteres"),
    terminosCondiciones: yup.bool().oneOf([true],'Debes aceptar términos y condiciones'),
    
     
  })