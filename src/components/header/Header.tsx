
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

            <div>
              <button type="submit" onClick={evento} className="botonUser"><span className="material-symbols-outlined">
                account_circle
              </span>
              </button>
            </div>

            <div>
              <a href="#">
                <span className="material-symbols-outlined agenda">
                  calendar_month
                </span>
              </a>
            </div>


            <div>
              <a href="#">
                <span className="material-symbols-outlined corazon">
                  favorite
                </span>
              </a>
            </div>

            <div>
              <a href="#">
                <span className="material-symbols-outlined carro">
                  shopping_cart
                </span>
              </a>
            </div>

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
