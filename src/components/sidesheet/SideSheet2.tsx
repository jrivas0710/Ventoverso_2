import React, { useState } from 'react';

interface SideSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode
}

const SideSheet2: React.FC<SideSheetProps> = ({ isOpen, onClose, children }) => {
  const [isSideSheetOpen, setIsSideSheetOpen] = useState(isOpen);

  const handleClose = () => {
    setIsSideSheetOpen(false);
    onClose();
  };


  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes realizar alguna acción con los datos del formulario
    console.log('Datos del formulario:', formData);
  };

  const sideSheetStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    right: isOpen ? 0 : '-100%', // Abierto: posición en 0, Cerrado: posición fuera de la pantalla
    width: '305px',
    height: '100%',
    background: '#fff',
    boxShadow: '-2px 0px 5px rgba(0, 0, 0, 0.5)',
    transition: 'right 100s cubic-bezier(0.19, 1, 0.22, 1)', // Animación de deslizamiento
  };

  return (
    <>
      
      {isOpen && (
        <div style={sideSheetStyle}>
          <div className="sidesheet-content">
            <button className="close-button" onClick={onClose}>
              Close
            </button>
            <h2>Formulario en el SideSheet</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre:</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default SideSheet2;
