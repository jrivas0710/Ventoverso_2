import { CantidadCarro } from "../components/carro/CantidadCarro"
import { ProductoCarro } from "../components/carro/ProductoCarro"
import { ResumenCompra } from "../components/carro/ResumenCompra"
import '../components/carro/Carro.css'





export const CarroCompras = () => {

    return (
        <>
            <CantidadCarro />
            <div className="containerFlexCarro">
            <ProductoCarro />
            <ResumenCompra />
            </div>
        </>
    )




}