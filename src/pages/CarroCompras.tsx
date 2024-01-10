import { CantidadCarro } from "../components/carro/CantidadCarro"
import { ProductoCarro } from "../components/carro/ProductoCarro"
import { ResumenCompra } from "../components/carro/ResumenCompra"
import '../components/carro/Carro.css'
import Sidesheet2 from "../components/sidesheet/SideSheet2"
import { Footer } from "../components/footer/Footer"
import { useEffect, useState } from "react"
import { ProductoCarrito } from "../interfaces/crearCarro"
import { ProductoPrincipal } from "../interfaces/ProductoPincipal"





export const CarroCompras = () => {

    const [producto, setProductos] = useState<ProductoPrincipal[]>();

    useEffect(() => {

        fetch(`http://localhost:3000/productos1`)
            .then(response => {
                if (response.ok) {
                    return response.json() as Promise<ProductoPrincipal[]>
                }
            })
            .then(json =>
                setProductos(json))
            .catch(error => console.log(error.message))
    }, [])


    return (
        <>

            <CantidadCarro />
            <div className="containerFlexCarro">
                {producto && <ProductoCarro producto={producto} />}

                <ResumenCompra
                />
            </div>

        </>
    )




}