import React, { useState, useEffect } from 'react';
import { AgregarCarro } from '../agregarCarro/AgregarCarro';
import { ProductoPrincipal } from '../../interfaces/ProductoPincipal';
import './ImagenesProducto.css';

export const ImagenesProducto = () => {
  const [productos, setProductos] = useState<ProductoPrincipal>();
 
  useEffect(() => {
    fetch('http://localhost:3000/productos/', {
      method: 'GET',
    })
      .then((response) => {
        if (response.ok) {
          return response.json() as Promise<ProductoPrincipal>;
        } else {
          throw new Error('No se pudo procesar la petición');
        }
      })
      .then((json) => setProductos(json))
      .catch((error) => error);
  }, []);

 

  
  return (
    <>
      
      { productos && <div key={productos?.id} className="containerCarroImagenes">
          <div className="imagenesProducto">
            <div
              className="imagenPrincipal img-container"
             
            >
              <img
                src={productos.imagenes?.[0].base64}
                alt={productos.imagenes?.[0].nombre}
                className="imagenProducto"
                />
             
            </div>
            <div className="imagenesSecundarias">
              
                <div key={productos.id}>
                  <img src={productos.imagenes?.[1].base64} alt={productos.imagenes?.[1].nombre} className="imagenSecundaria" />
                </div>
                <div key={productos.id}>
                  <img src={productos.imagenes?.[2].base64} alt={productos.imagenes?.[2].nombre} className="imagenSecundaria" />
                </div>
                <div key={productos.id}>
                  <img src={productos.imagenes?.[3].base64} alt={productos.imagenes?.[3].nombre} className="imagenSecundaria" />
                </div>
                <div key={productos.id}>
                  <img src={productos.imagenes?.[4].base64} alt={productos.imagenes?.[4].nombre} className="imagenSecundaria" />
                </div>
            
             
            </div>
          </div>
          <div>
            <AgregarCarro precio={productos.precio} id={productos.id} />
          </div>
        </div>}
      
    </>
  );
};
