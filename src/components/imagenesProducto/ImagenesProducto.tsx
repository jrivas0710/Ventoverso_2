import { useState, useEffect } from 'react';
import { AgregarCarro } from '../agregarCarro/AgregarCarro';
import { ProductoPrincipal } from '../../interfaces/ProductoPincipal';
import './ImagenesProducto.css';
import { Id } from '../productoSib/ProductoSib';

export const ImagenesProducto = ({ id }: Id) => {
  const [productos, setProductos] = useState<ProductoPrincipal>();
  //console.log(id)

  useEffect(() => {
    fetch(`http://localhost:3000/productos/${id}`, { //esto pintara a mi producto traido por el id del producto seleccionado en d-clarinete
      method: 'GET',
    })
      .then((response) => {
        if (response.ok) {
          return response.json() as Promise<ProductoPrincipal>;
        } else {
          throw new Error('No se pudo procesar la petición');
        }
      })
      .then((json) => setProductos(json)) //me va a gusardar aca el producto que traiga por el id
      .catch((error) => error);
  }, []);




  return (
    <>

      {productos && <div key={productos?.id} className="containerCarroImagenes">
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
            {/* <div key={productos.id}>
              <img src={productos.imagenes?.[5].base64} alt={productos.imagenes?.[5].nombre} className="imagenSecundaria" />
            </div> */}

          </div>
        </div>
        <div>
          <AgregarCarro precio={productos.precio} id={id} />
        </div>
      </div>}

    </>
  );
};
