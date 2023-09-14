import "./Carrusel.css"

function Carrusel() {
  return (
    <section className="carrusel-grid">
      <div id="conteItemsCarrusel">
        <div className="carrusel-item " id="enlaceItem1">
          <div className="tarjetas-carrusel tarjeta-carrusel-1"></div>
          <div className="flechas-carrusel">
            <a href="#enlaceItem3">
              <i>
                <img
                  src="./images/flecha-izquierda.png"
                  alt="flecha-izquierda"
                  className="flecha"
                />
              </i>
            </a>
            <a href="#enlaceItem2">
              <i>
                <img
                  src="./images/flecha-derecha.png"
                  alt="flecha-derecha"
                  className="flecha"
                />
              </i>
            </a>
          </div>
        </div>
        <div className="carrusel-item" id="enlaceItem2">
          <div className="tarjetas-carrusel tarjeta-carrusel-3"></div>
          <div className="flechas-carrusel">
            <a href="#enlaceItem2">
              <i>
                <img
                  src="./images/flecha-izquierda.png"
                  alt="flecha-izquierda"
                  className="flecha"
                />
              </i>
            </a>
            <a href="#enlaceItem3">
              <i>
                <img
                  src="./images/flecha-derecha.png"
                  alt="flecha-derecha"
                  className="flecha"
                />
              </i>
            </a>
          </div>
        </div>
        <div className="carrusel-item " id="enlaceItem3">
          <div className="tarjetas-carrusel tarjeta-carrusel-3"></div>
          <div className="flechas-carrusel">
            <a href="#enlaceItem3">
              <i>
                <img
                  src="./images/flecha-izquierda.png"
                  alt="flecha-izquierda"
                  className="flecha"
                />
              </i>
            </a>
            <a href="#enlaceItem1">
              <i>
                <img
                  src="./images/flecha-derecha.png"
                  alt="flecha-derecha"
                  className="flecha"
                />
              </i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Carrusel };
