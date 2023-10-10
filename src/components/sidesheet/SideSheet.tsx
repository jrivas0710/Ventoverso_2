import { useState } from 'react';
import './SideSheet.css'; // Importa los estilos CSS
import { Login } from '../../interfaces/Login';


/* interface SideSheetProps {
  isOpen?: boolean;
  onClose?: () => void;
}
 */

export const SideSheet = ({ isOpen, onClose }: Login) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mostrarPassword, setMostrarPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de inicio de sesión o cualquier otra acción que desees
    // Por ejemplo, puedes enviar los datos a un servidor
    console.log('Correo Electrónico:', email);
    console.log('Contraseña:', password);
  };


  const passwordVisivility = () => {
    setMostrarPassword(!mostrarPassword)
  }



  return (
    <div className={`side-sheet ${isOpen ? 'open' : ''}`}>
      <div className="side-sheet-content">
        <button className="close-button" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
            <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#0F0F0F" />
          </svg>
        </button>
        <span className='loginSpan'>Bienvenid@ a Ventoverso</span>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
           {/*  <label htmlFor="email">Correo Electrónico</label> */}
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder='Dirección e-mail'
              onChange={(e) => setEmail(e.target.value)}
              required
              className='inputMail'
            />
          </div>
          <div className="form-group">
           {/*  <label htmlFor="password">Contraseña</label> */}
            <input
              type={mostrarPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={password}
              placeholder='Contraseña'
              onChange={(e) => setPassword(e.target.value)}
              required
              className='inputPassword'
            />



          </div>
          <div className='botonEnlaces'>
            <div>
              <button type="submit" className='botonLogin'>Iniciar Sesión</button>
            </div>
            <div className='enlaces'>
              <div className='recuperarContraseña'> <a href='#' className='enlace1'>Olvidé mi contraseña</a></div>
              <div><a href='#' className='enlace2' >¿No tienes cuenta?</a></div>
              <div><span className='registrate'>Regístrate</span></div>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
};

