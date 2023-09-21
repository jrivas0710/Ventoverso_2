import  { useState } from 'react';
import './SideSheet.css'; // Importa los estilos CSS


interface SideSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SideSheet: React.FC<SideSheetProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de inicio de sesión o cualquier otra acción que desees
    // Por ejemplo, puedes enviar los datos a un servidor
    console.log('Correo Electrónico:', email);
    console.log('Contraseña:', password);
  };

  return (
    <div className={`side-sheet ${isOpen ? 'open' : ''}`}>
      <div className="side-sheet-content">
        <button className="close-button" onClick={onClose}>
          Cerrar
        </button>
        <h2>Inicio de Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
};

