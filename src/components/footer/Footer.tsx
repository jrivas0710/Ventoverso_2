import "./Footer.css"
//hola

export const Footer = () => {
    return (
        <>

            <div className="grid-footer">

                <div className="footer1">
                    <div className="logo">Logo Ventoverso</div>
                    <div className="direccion">
                        <p>Moneda 666, Santiago, Chile</p>
                        <p>+5622222222</p>
                        <p>contacto@ventoverso.cl</p>
                    </div>
                </div>
                <div className="footer2"><h3>Tienda</h3>
                    <p>Inicio</p>
                    <p>Nosotros</p>
                    <p>Politicas de Privacidad</p>
                    <p>Termino y Condiciones</p>
                </div>
                <div className="footer3"><h3>Servicio al Cliente</h3>
                    <p>Centro de Ayuda</p>
                    <p>Seguimiento de Pedidos</p>
                    <p>Devoluciones y Reebolso</p>
                </div>
                <div className="footer4"><h3>Síguenos</h3>
                    <img src="/images/facebook.png" alt="enlace-facebook" className="facebook" />
                    <img src="/images/instagram.png" alt="enlace-instagram" className="instagram" />
                    <img src="/images/tik-tok.png" alt="enlace-tik-tok" className="tik-tok" />
                </div>
            </div>
        </>



    )
}

