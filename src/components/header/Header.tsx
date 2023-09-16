import { Carrusel } from "../carrusel/Carrusel";
import "./Header.css"

function Header() {
  return (
    <div className="grid-container">
      <header className="header-grid">
        <section className="header-flex">
          <div className="logo-header">Logo Ventoverso</div>
          <div>
            <input type="text" className="filter" placeholder="Buscar" />
            <button className="filter-button ">
              <img
                src="/images/lupa.png"
                alt="filter"
                className="filter-icon"
              />
            </button>
          </div>

          <div className="icons">
            <a href="#">
              <img src="/images/like.png" alt="like" className="like" />
            </a>
            <a href="#">
              <img src="/images/user.png" alt="user" className="user" />
            </a>
            <a href="#">
              <img
                src="/images/carrito.png"
                alt="carrito"
                className="carrito"
              />
            </a>
          </div>
        </section>

        <section>
          <ul className="categories-flex">
            <a href="#">
              <li><span>Bronces</span></li>
            </a>
            <a href="#">
              <li><span>Maderas</span></li>
            </a>
            <a href="#">
              <li><span>Accesorios</span></li>
            </a>
          
          </ul>
        </section>
      </header>
      {/*<Carrusel />
       <Destacados />
      <SeccionPopulares />
      <Iconos /> */}
    </div>
  );
}

export { Header };
