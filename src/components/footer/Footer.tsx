import "./Footer.css"



export const Footer = () => {
    return (
        <>

            <div className="footer">
                <div className="barraFooter">
                    <input type="email" className="suscribeteInput" placeholder="Ingresa tu e-mail" />
                    <button type="submit" className="suscribeteBoton">Suscríbete</button>
                </div>

                <div className="contenidoFooter">

                    <div className="footer1">
                        <div className="logo"><span>Logo Ventoverso</span></div>
                        <div><span>Moneda 666, Santiago, Chile</span></div>
                        <div><span>+5622222222</span></div>
                        <div><span>contacto@ventoverso.cl</span></div>
                    </div>

                    <div className="footer2">
                        <div><h3>Tienda</h3></div>
                        <div><span>Inicio</span></div>
                        <div><span>Nosotros</span></div>
                        <div><span>Blog</span></div>
                        <div><span>Política de privacidad</span></div>
                        
                    </div>

                    <div className="footer3">
                        <div><h3>Servicio al Cliente</h3></div>
                        <div><span>Centro de Ayuda</span></div>
                        <div><span>Seguimiento de Pedidos</span></div>
                        <div><span>Devoluciones y Reebolso</span></div>
                        <div><span>Términos y condiciones</span></div>
                        
                    </div>

                    <div className="footer4">
                        <h3>Síguenos</h3>
                        <img src="/images/facebook.png" alt="enlace-facebook" className="facebook" />
                        <img src="/images/instagram.png" alt="enlace-instagram" className="instagram" />
                        <img src="/images/tik-tok.png" alt="enlace-tik-tok" className="tik-tok" />
                    </div>
                </div>


            </div>
        </>



    )
}

