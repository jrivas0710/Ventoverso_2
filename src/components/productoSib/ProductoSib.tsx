import { useEffect, useState } from "react";
import { DetalleProducto } from "../detalleProducto/DetalleProducto";
import { EncabezadoProducto } from "../encabezadoProducto/EncabezadoProducto";
import { ImagenesProducto } from "../imagenesProducto/ImagenesProducto";
import { ProductoPrincipal } from "../../interfaces/ProductoPincipal";

export const ProductoSib = () => {
    const [producto, setProducto] = useState<ProductoPrincipal | null>(null);

    useEffect(() => {
        fetch(`http://localhost:3000/productos/3`, {
            method: "GET"
        })
            .then(response => response.json())
            .then(data => {
                setProducto(data);
            })
            .catch(error => console.error('Error:', error));
    },);


    if (!producto) {
        return <div>Cargando producto...</div>;
    }

    return (
        <>
            <EncabezadoProducto
                nombre={producto.nombre}
                id_marcas={producto.id_marcas}
                modelo={producto.modelo}
                estrellas={producto.estrellas}
            />
            <ImagenesProducto producto={[producto]} />
            <DetalleProducto
                caracteristicasPrincipales={producto.caracteristicasPrincipales}
                descripcion={producto.descripcion}
            />
        </>
    );
};
