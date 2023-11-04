import * as yup from "yup";

export const LoginValidate = yup.object().shape({
    email: yup.string().trim().required("El email es requerido").email("correo inválido").max(30, "el correo no puede exceder los 30 caracteres de largo"),
    password: yup.string().trim().required("La contraseña es requerida")/* .min(4, "El mínimo debe ser de cuatro caracteres").max(20,"El máximo debe ser de 20 caracteres") */
     
  })



