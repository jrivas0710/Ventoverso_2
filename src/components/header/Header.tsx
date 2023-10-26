
import { Link } from "react-router-dom";
import "./Header.css"
import { useState } from "react";

function Header({ evento }: any) {

 

  const [cerrado, setCerrado] = useState(false);

  const toggleDropdown = () => {
    setCerrado(!cerrado);
  };



  return (

    <div className="grid-container">
      <header className="header-grid">
        <section className="header-flex">
          <Link to={"/"}><div className="logo-header">Logo Ventoverso</div></Link>
          <div>
            <input type="text" className="filter" placeholder="Buscar" />
            <button className="filter-button ">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.79372 5.79369C5.2365 6.35091 4.79448 7.01243 4.49292 7.74048C4.19135 8.46853 4.03613 9.24885 4.03613 10.0369C4.03613 10.8249 4.19135 11.6052 4.49292 12.3333C4.79448 13.0613 5.2365 13.7229 5.79372 14.2801C6.35095 14.8373 7.01247 15.2793 7.74052 15.5809C8.46857 15.8825 9.24889 16.0377 10.0369 16.0377C10.825 16.0377 11.6053 15.8825 12.3333 15.5809C13.0614 15.2793 13.7229 14.8373 14.2801 14.2801C15.3731 13.1485 15.9778 11.6329 15.9642 10.0597C15.9505 8.4865 15.3195 6.98163 14.207 5.86918C13.0946 4.75673 11.5897 4.12571 10.0165 4.11204C8.44335 4.09837 6.92774 4.70314 5.79612 5.79609L5.79372 5.79369ZM13.4305 13.4305C12.9866 13.8844 12.4571 14.2457 11.8726 14.4935C11.2881 14.7413 10.6602 14.8707 10.0254 14.8742C9.39052 14.8777 8.76127 14.7552 8.17408 14.5138C7.58688 14.2725 7.0534 13.917 6.60453 13.4681C6.15565 13.0191 5.80029 12.4856 5.55903 11.8983C5.31777 11.3111 5.19541 10.6818 5.19902 10.047C5.20262 9.41213 5.33214 8.7843 5.58005 8.19984C5.82797 7.61538 6.18937 7.08591 6.64332 6.64209C7.54694 5.75863 8.76251 5.26716 10.0262 5.27434C11.2899 5.28153 12.4998 5.78678 13.3933 6.68045C14.2869 7.57413 14.7919 8.78412 14.7989 10.0478C14.8058 11.3115 14.3141 12.527 13.4305 13.4305Z" fill="black" />
                <path d="M13.4303 15.1524C13.2053 14.9272 13.079 14.6219 13.0791 14.3036C13.0792 13.9853 13.2058 13.68 13.4309 13.455C13.6561 13.23 13.9614 13.1036 14.2798 13.1038C14.5981 13.1039 14.9033 13.2304 15.1283 13.4556L18.5219 16.8504C18.6366 16.9611 18.728 17.0935 18.7909 17.2399C18.8538 17.3863 18.8869 17.5438 18.8882 17.7031C18.8896 17.8625 18.8593 18.0205 18.7989 18.1679C18.7386 18.3154 18.6495 18.4494 18.5368 18.5621C18.4241 18.6747 18.2902 18.7639 18.1427 18.8242C17.9952 18.8845 17.8372 18.9149 17.6779 18.9135C17.5185 18.9121 17.3611 18.879 17.2147 18.8161C17.0683 18.7532 16.9358 18.6618 16.8251 18.5472L13.4303 15.1524Z" fill="black" />
              </svg>

            </button>
          </div>

          <div className="icons">

            <div>
              <button type="submit" onClick={evento} className="botonUser">
                <span className="material-symbols-outlined">
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
              <li><span className="menu">Bronces</span></li>
            </a>
            <a href="#">
              <li>
                <button className="menu" onClick={toggleDropdown}>Maderas</button>
                {cerrado && (
                  <div className="desplegableMaderas">
                    <ul className="listaDesplegableMaderas">
                      <Link to={"/productoCategoria"}><li className="opcionClarinetes"><button onClick={toggleDropdown}>Clarinetes</button></li></Link>
                      <Link to={"/productoCategoria"}><li className="opcionClarinetes"><button onClick={toggleDropdown}>Fagotes</button></li></Link>
                      <Link to={"/productoCategoria"}><li className="opcionClarinetes"><button onClick={toggleDropdown}>Flautas dulces</button></li></Link>
                      <Link to={"/productoCategoria"}><li className="opcionClarinetes"><button onClick={toggleDropdown}>Flautas traversas</button></li></Link>
                      <Link to={"/productoCategoria"}><li className="opcionClarinetes"><button onClick={toggleDropdown}>Oboes</button></li></Link>
                    </ul>
                  </div>
                )}

              </li>

            </a>
            <a href="#">
              <li><span className="menu">Accesorios</span></li>
            </a>

          </ul>
        </section>
      </header>

    </div>
  );
}

export { Header };
