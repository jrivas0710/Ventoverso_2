import { CantidadCarro } from "../components/carro/CantidadCarro"
import { ProductoCarro } from "../components/carro/ProductoCarro"
import { ResumenCompra } from "../components/carro/ResumenCompra"
import '../components/carro/Carro.css'
import Sidesheet2 from "../components/sidesheet/SideSheet2"
import { Footer } from "../components/footer/Footer"





export const CarroCompras = () => {

    

    return (
        <>
            
            <CantidadCarro/>
            <div className="containerFlexCarro">
            <ProductoCarro />
            <ResumenCompra />
            </div>
           
        </>
    )




}