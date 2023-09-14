import "./Footer.css"

function Footer() {
  return (
    <div className="grid-footer">
      <div className="footer1">
        <h1>footer1</h1>
      </div>
      <div className="footer2">
        <h1>Tienda</h1>
        <p>Inicio</p>
        <p>Nosotros</p>
        <p>Politicas de Privacidad</p>
        <p>Termino y Condiciones</p>
      </div>
      <div className="footer3">
        <h1>Serivio al Cliente</h1>
        <p>Centro de Ayuda</p>
        <p>Seguimiento de Pedidos</p>
        <p>Devoluciones y Reebolso</p>
      </div>
      <div className="footer4">
        <h1>Siguenos</h1>
        <img
          className="Facebook"
          src="https://mcstaging.mts.cl/media/wysiwyg/Trazado_70.png"
        ></img>
        <img
          className="Instagram"
          src="https://mcstaging.mts.cl/media/wysiwyg/instagram_1_.png"
        ></img>
        {/* <img className="tik_tok" src= {tiktok}> </img> */}
      </div>
    </div>
  );
}

export default Footer;
