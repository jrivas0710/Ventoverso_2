import React, { useState, useEffect } from 'react';
import { AgregarCarro } from '../agregarCarro/AgregarCarro';
import { ProductoPrincipal } from '../../interfaces/ProductoPincipal';
import Lupa  from './Lupa'; // Asegúrate de ajustar la ruta correcta
import './ImagenesProducto.css';

export const ImagenesProducto = () => {
  const [productos, setProductos] = useState<ProductoPrincipal[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    fetch('http://localhost:3000/productos', {
      method: 'GET',
    })
      .then((response) => {
        if (response.ok) {
          return response.json() as Promise<ProductoPrincipal[]>;
        } else {
          throw new Error('No se pudo procesar la petición');
        }
      })
      .then((json) => setProductos(json))
      .catch((error) => error);
  }, []);

  const handleOpenModal = (imageUrl: string, event: React.MouseEvent<HTMLImageElement>) => {
    setSelectedImage(imageUrl);
    setMousePosition({ x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY });
    setOpenModal(true);
  };

  const handleCloseZoom = () => {
    setSelectedImage(null);
    setOpenModal(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openModal && event.target instanceof Element && !event.target.closest('.img-container')) {
        handleCloseZoom();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openModal]);

  return (
    <>
      {productos.map((item) => (
        <div key={item.id} className="containerCarroImagenes">
          <div className="imagenesProducto">
            <div
              className="imagenPrincipal img-container"
              onMouseMove={(event) => setMousePosition({ x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY })}
            >
              <img
                src={item.imagenes?.[0].base64}
                alt={item.imagenes?.[0].nombre}
                className="imagenProducto"
                onClick={(event) => handleOpenModal(item.imagenes?.[0].base64, event)}
              />
              {selectedImage && <Lupa image={selectedImage} position={mousePosition} onClose={handleCloseZoom} />}
            </div>
            <div className="imagenesSecundarias">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index}>
                  <img src={item.imagenes?.[0].base64} alt={item.imagenes?.[0].nombre} className="imagenSecundaria" />
                </div>
              ))}
            </div>
          </div>
          <div>
            <AgregarCarro precio={item.precio} id={item.id} />
          </div>
        </div>
      ))}
    </>
  );
};
