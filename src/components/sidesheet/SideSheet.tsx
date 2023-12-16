
import './SideSheet.css'; // Importa los estilos CSS
import { Login } from '../../interfaces/Login';
import { Link, useNavigate } from 'react-router-dom';
import { Box, TextField } from '@mui/material';
import { useNotification } from '../../context/notification.context';
import { LoginValidate } from '../utils/validateForm';
import { useFormik } from 'formik';
import { jwtDecode } from 'jwt-decode';
import { Md5 } from 'ts-md5';
import { useDispatch } from 'react-redux';
import { login, logout } from '../../redux/userSlice';




interface LoginResponse {
  token: string
}

export interface TokenClaims { //esto es lo que viene dentro del token decodificado
  idCliente:string | number,
  rutCliente: string | number,// o string
  nombre: string,
  apellido: string,
  correo: string,
  roles: string[],
  iat: string | number,
  exp: string | number,
  isAuthenticate: boolean,
  token:string
}


type LoginType = {
  email: string,
  password: string,
}

export const SideSheet = ({ isOpen, onClose }: Login) => {
  const { getSucces } = useNotification(); //esto es un customHook
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const formik = useFormik<LoginType>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidate,
    onSubmit: (values: LoginType) => {

      console.log('hola mundo')
      getSucces(JSON.stringify(values));

      const passwordEncriptado = Md5.hashStr(values.password);

      fetch('http://localhost:3000/login', { //con esto hago un post al backend de mi usuario. debe ir la ruta de mi backend
        method: "GET",
       /*  body: JSON.stringify({
          "email": values.email,
          "password": passwordEncriptado //le envio mi pass en md5
        }),
        headers: {
          "Content-type": "application/json"
        } */
      })
        .then(response => {
          if (response.ok) {
            return response.json() as Promise<LoginResponse>
          } else {
            throw new Error(`Error en la llamada http, no fue ok`)
          }
        })
        .then(json => {
          
          const jwtPayloand = jwtDecode<TokenClaims>(json.token);

          console.log(json.token)

          dispatch(login({  //lo envio a mi estado de reduce
            idCliente: jwtPayloand.idCliente,
            rutCompleto: jwtPayloand.rutCliente,
            nombre: jwtPayloand.nombre,
            apellido: jwtPayloand.apellido,
            correo: jwtPayloand.correo,
            roles: jwtPayloand.roles,
            iat: jwtPayloand.iat,
            exp: jwtPayloand.exp,
            isAuthenticate: true,
            token: json.token 

         })) //le envio el response a mi estado global. 

          // aca tengo que hacer que el sidesheet se cierre cuando el submit es exitoso 

          navigate(-1);


        })

        .catch(error => { // si hay un error, mantiene el estado inicial 

         // dispatch(logout());
          
          console.log(error);
        })


      formik.resetForm();
      console.log(values)
    },
  });


  return (
    <div className={`side-sheet ${isOpen ? 'open' : ''}`}>
      <div className="side-sheet-content">
        <button className="close-button" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
            <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#0F0F0F" />
          </svg>
        </button>
        <span className='loginSpan'>Bienvenid@ a Ventoverso</span>

        <Box component="form" onSubmit={formik.handleSubmit}>

          <div className="form-group">

            <TextField

              id="email"
              name="email"
              label='Dirección e-mail'
              className='inputMail'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </div>
          <div className="form-group">
            {/*  <label htmlFor="password">Contraseña</label> */}
            <TextField
              type="password"
              id="password"
              name="password"
              className='inputPassword'
              label='Contraseña'
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />



          </div>
          <div className='botonEnlaces'>
            <div>
              <button type="submit" /* onClick={() => navigate(-1)} */
                className='botonLogin'>Iniciar Sesión</button>


            </div>
            <div className='enlaces'>
              <div className='recuperarContraseña'> <a href='#' className='enlace1'>Olvidé mi contraseña</a></div>
              <div><a href='#' className='enlace2' >¿No tienes cuenta?</a></div>
              <div> <button className="cierreRegistro" onClick={onClose}>
                <Link to={"/registro"}><span className='registrate'>Regístrate</span></Link></button>
              </div>
            </div>

          </div>
        </Box>
      </div>
    </div>
  );
};

