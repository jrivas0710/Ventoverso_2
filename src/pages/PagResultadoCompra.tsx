
import { ResultadoCompra } from "../components/compra/ResultadoCompraExitosa"
import { ResultadoCompraFallo } from "../components/compra/ResultadoFalloCompra"
import { Footer } from "../components/footer/Footer"
import Sidesheet2 from "../components/sidesheet/SideSheet2"


export const PagResultadoCompra = () => {
    return(
        <>
        
        <ResultadoCompra/>
        <ResultadoCompraFallo/>
       
        </>
    )
}