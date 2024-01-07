
import { useNavigate } from "react-router-dom"
import { BuscarProducto } from "../components/administrador/BuscarProducto"
import { HeaderAdmin } from "../components/administrador/HeaderAdmin"
import { ModificarProducto } from "../components/administrador/ModificarProducto"

export const EditarProducto = () => {
    const navigate = useNavigate();

    let productoLocal = localStorage.getItem("producto")

    let jsonProducto;

    productoLocal ? jsonProducto = JSON.parse(productoLocal) : '';

    return (
        <>
            <HeaderAdmin />
            <div style={{ margin: "20px" }}>
                <BuscarProducto />
                {jsonProducto && <ModificarProducto />}


            </div>

        </>
    )



}