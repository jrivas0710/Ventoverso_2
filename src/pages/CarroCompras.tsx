
import { ProductoCarro } from "../components/carro/ProductoCarro"
import { ResumenCompra } from "../components/carro/ResumenCompra"
import '../components/carro/Carro.css'
import { useParams } from "react-router-dom"





export const CarroCompras = () => {

    const { rut } = useParams<{ rut: string}>();


    return (
        <>

         
            <div className="containerFlexCarro">
            <ProductoCarro rut = {rut}/>

               
            </div>

        </>
    )




}