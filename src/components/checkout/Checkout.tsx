import { Link } from 'react-router-dom'
import './Checkout.css'



export const Checkout = () =>(
    <>
        <div className="container">
            <div className="izquierda"></div>
            <div className="derecha">
                <Link to = {"/algoSalioMal"}> <button>Algo salio mal</button></Link>
                <Link to = {"/compraExitosa"}><button>Compra exitosa</button></Link>
            </div>
        </div>

    </>
)