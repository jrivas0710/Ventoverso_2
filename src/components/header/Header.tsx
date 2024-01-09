import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Grid } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";
import { DropdownUser } from "../dropdown/DropdownUser";
import CustomizedInputBase from "../input/customizedInput";
import "./Header.css";
import { DropdownMaderas } from './DropdownMaderas';

function Header({ evento }: any) {

  const user = useSelector((state: RootState) => state.user) //usare mi user true para que muestre mi perfil en el nav

  const [cerrado, setCerrado] = useState(false);

  const toggleDropdown = () => {
    setCerrado(!cerrado);
  };

  return (

    <>



      <div className="grid-container">
        <header className="header-grid">
          <section className="header-flex">

            <Link to={"/"}>
              <div className="logo-header">
                <img src="https://s3-alpha-sig.figma.com/img/f142/5fd9/2ea35f96edf4aed6872d1d5e4ac1d36d?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=daSjGz6RPVqdfLgIgJEoRUaSP-SHIH2W2KC-oOMaof3qfUHhOO9JuiyyxC4BgLQBJYawL-H8z5bJUmWagxrAVcgGPHks6H~cgNtiMoS7oXRs0Jhuc1wqAZ4W~luhu3GEV~XFtJ4pMPG4KPOpYbMC7MWdIfTU17mf2gYti4BuoAdamnIi18EpDSscryLHI~KA1dleKbgE3YmCUimpn9-s7S3UHi0C1xsBYZtwDk5tGRpn6VMLSpiqP~nN1M~EplwWo44KqGW-nhiSzX2v9-tjwBLAC52w~8NbykBbqhRq99EI6xRebzZrTrRHM~tv6VIlILESphEwPIUK9SwDjh3FfA__"
                  alt="logo ventoverso"
                  style={{ width: '224px', height: '63.93px' }}
                />
              </div></Link>
            <Grid item
              sx={{
                p: '5px 0 0 0',
                mr: '50px',
                ml: '50px',
                width: "300px"
              }}>

              <CustomizedInputBase />  {/*input para buscar */}

            </Grid>

            <div className="icons">

              {user && user.isAuthenticate == true &&
                <div>
                  <DropdownUser />
                </div>}


              {user.isAuthenticate == false &&
                <div style={{ display: "flex", flexDirection: 'column', alignItems: "center" }}>
                  <button type="submit" onClick={evento} className="botonUser">
                    <span className="material-symbols-outlined">
                      account_circle
                    </span>
                  </button>
                  <div style={{ color: "#A8E9FE" }}>
                    <span >Ingresar</span>
                  </div>
                </div>
              }


              <div style={{ display: "flex", flexDirection: 'column', alignItems: "center", color: "#A8E9FE" }}>
                <Link to={"/Agenda"}>
                  <span className="material-symbols-outlined agenda">
                    calendar_month
                  </span>
                </Link>
                <div>
                  <span>Agenda</span>
                </div>
              </div>


              <div style={{ display: "flex", flexDirection: 'column', alignItems: "center", color: "#A8E9FE" }}>
                <a href="#">
                  <span className="material-symbols-outlined corazon">
                    favorite
                  </span>
                </a>
                <div>
                  <span>Favoritos</span>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: 'column', alignItems: "center", color: "#A8E9FE" }}>
                <a href="#">
                  <span className="material-symbols-outlined carro">
                    shopping_cart
                  </span>
                </a>
                <div>
                  <span>Carrito</span>
                </div>
              </div>

            </div>
          </section>

          <section>
            <ul className="categories-flex">
              <a href="#">
                <li>
                  <span
                    className="menu">Bronces 
                  </span></li>
              </a>
              <a href="#">
                <li>

                  <DropdownMaderas />

                  {/*      <button className="menu" onClick={toggleDropdown}>Maderas <KeyboardArrowDownIcon style={{ color: 'white' }} /></button>
                  {cerrado && (
                    <div className="desplegableMaderas">
                      <ul className="listaDesplegableMaderas">
                        <li className="opcionClarinetes" onClick={toggleDropdown}> <Link to={"/categoria"}>Clarinetes</Link></li>
                        <li className="opcionClarinetes" onClick={toggleDropdown}><Link to={"/categoria"}>Fagotes</Link></li>
                        <li className="opcionClarinetes" onClick={toggleDropdown}>  <Link to={"/categoria"}>Flautas dulces</Link></li>
                        <li className="opcionClarinetes" onClick={toggleDropdown}> <Link to={"/categoria"}>Flautas traversas</Link></li>
                        <li className="opcionClarinetes" onClick={toggleDropdown}><Link to={"/categoria"}>Oboes</Link></li>
                      </ul>
                    </div>
                  )}
 */}
                </li>
              </a>
              <a href="#">
                <li><span className="menu">Accesorios </span></li>
              </a>

            </ul>
          </section>
        </header>
      </div>

    </>
  );
}

export { Header }