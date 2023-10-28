import * as yup from "yup";
import { validateRut } from "@fdograph/rut-utilities";







export const CheckoutValidate = yup.object().shape({
    name: yup.string().trim().required("Este campo es requerido").max(20,"El máximo debe ser de 20 caracteres"),
    email: yup.string().trim().required("Este campo es requerido").max(30,"El máximo debe ser de 30 caracteres"),/* .min(4, "El mínimo debe ser de cuatro caracteres").max(20,"El máximo debe ser de 20 caracteres") */
    apellido: yup.string().trim().required("Este campo es requerido").max(30,"El máximo debe ser de 30 caracteres"),
    rut: yup.string().trim().required("Este campo es requerido"),
    calleNumero: yup.string().trim().required("Este campo es requerido").max(50,"El máximo debe ser de 30 caracteres"),
    ciudad: yup.string().trim().required("Este campo es requerido").max(50,"El máximo debe ser de 50 caracteres"),
    comuna: yup.string().trim().required("Este campo es requerido").max(50,"El máximo debe ser de 50 caracteres"),
    telefono: yup.string().trim().required("Este campo es requerido").min(8, "el minimo no puede ser inferior a ocho dígitos")
    .max(20,"El máximo no puede superar los 20 dígitos"),
  })

  
    
  
 
     

/*   `rut_cliente` varchar(10) PRIMARY KEY,
  `dv_cliente` char,
  `nombre` varchar(20),
  `apellido` varchar(30),
  `email` varchar(30),
  `direccion` varchar(50),
  `ciudad` varchar(50),
  `comuna` varchar(50),
  `region` varchar(50),
  `password` varchar(20),
  `telefono` varchar(20) */