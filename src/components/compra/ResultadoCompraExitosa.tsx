import { Link } from 'react-router-dom'
import './ResultadoCompra.css'



export const ResultadoCompra = () => {
    return (
        <>
            <div className="containerResultadoCompra">
                <div><span className='textoResultadoCompra'>Compra Exitosa</span></div>
                <div><span className='numeroPedido'>Pedido N 99999999</span></div>
                <div className="imagenCompra"></div>
                <div><span>{`Gracias por preferir Ventoverso :)`}</span></div>
                <div><p>Puedes descargar el comprobante de tu compra acá. También te lo enviamos al e-mail con que realizaste tu compra.</p></div>
                <div className='containerButtons'>
                    <button className='comprobantePago'><span><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <mask id="mask0_197_12302"  maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
                            <rect x="0.5" width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_197_12302)">
                            <path d="M12.5 16L7.5 11L8.9 9.55L11.5 12.15V4H13.5V12.15L16.1 9.55L17.5 11L12.5 16ZM6.5 20C5.95 20 5.47917 19.8042 5.0875 19.4125C4.69583 19.0208 4.5 18.55 4.5 18V15H6.5V18H18.5V15H20.5V18C20.5 18.55 20.3042 19.0208 19.9125 19.4125C19.5208 19.8042 19.05 20 18.5 20H6.5Z" fill="white" />
                        </g>
                    </svg></span>
                    Decargar comprobante
                    </button>
                   <Link to ={"/"}> <button className='irInicio'>Ir al inicio</button></Link>
                </div>
            </div>
        </>
    )
}