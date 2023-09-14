import "./Iconos.css"

function Iconos() {
  return (
    <section className="iconos">
      <div>
        <img
          src="/images/01-billete.png"
          alt="icono-billete"
          className="imagenes-iconos"
        />
        <p>Paga hasta en 12 cuotas</p>
      </div>
      <div>
        <img
          src="/images/02-reparto.png"
          alt="icono-reparto"
          className="imagenes-iconos"
        />
        <p>Envíos a todo Chile</p>
      </div>
      <div>
        <img
          src="/images/03-trofeo.png"
          alt="icono-trofe"
          className="imagenes-iconos"
        />
        <p>El mejor servicio de Chile</p>
      </div>
      <div>
        <img
          src="/images/04-garantia.png"
          alt="icono-garantia"
          className="imagenes-iconos"
        />
        <p>Garantía de satisfacción</p>
      </div>
    </section>
  );
}

export default Iconos;
