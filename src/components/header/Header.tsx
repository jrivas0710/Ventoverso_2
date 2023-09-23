
import "./Header.css"

function Header({ evento }: any) {
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

            <div> <a href="#">
              <img src="/images/like.png" alt="like" className="like" />
            </a></div>


            <div><button type="submit" onClick={evento} className="botonUser"> <img src="/images/user.png" alt="user" className="user" /></button>
            </div>



            <div><a href="#">
              <img
                src="/images/carrito.png"
                alt="carrito"
                className="carrito"
              />
            </a></div>
            
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
      
    </div>
  );
}

export { Header };
