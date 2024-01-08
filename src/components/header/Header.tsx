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

            <Link to={"/"}><div className="logo-header">Ventoverso</div></Link>
            <Grid item
              sx={{
                p: '5px 0 0 0',
                mr: '50px',
              }}>
              <CustomizedInputBase />  {/*input para buscar */}
            </Grid>

            <div className="icons">

              {user && user.isAuthenticate == true &&
                <div>
                  <DropdownUser />
                </div>}


              {user.isAuthenticate == false &&
                <div style = {{display:"flex", flexDirection:'column'}}>
                  <button type="submit" onClick={evento} className="botonUser">
                    <span className="material-symbols-outlined">
                      account_circle
                    </span>
                  </button>
                  <div style = {{color:"red"}}>
                    <span >Ingresar</span>
                  </div>
                </div>
              }


              <div style = {{display:"flex", flexDirection:'column', alignItems:"center"}}>
                <Link to={"/Agenda"}>
                  <span className="material-symbols-outlined agenda">
                    calendar_month
                  </span>
                </Link>
                <div>
                  <span>Agenda</span>
                </div>
              </div>


              <div style = {{display:"flex", flexDirection:'column', alignItems:"center"}}>
                <a href="#">
                  <span className="material-symbols-outlined corazon">
                    favorite
                  </span>
                </a>
                <div>
                  <span>Favoritos</span>
                </div>
              </div>

              <div style = {{display:"flex", flexDirection:'column', alignItems:"center"}}>
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
                <li><span className="menu">Bronces <KeyboardArrowDownIcon style={{ color: 'white' }} /></span></li>
              </a>
              <a href="#">
                <li>

                  <DropdownMaderas/>

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
                <li><span className="menu">Accesorios <KeyboardArrowDownIcon style={{ color: 'white' }} /></span></li>
              </a>

            </ul>
          </section>
        </header>
      </div>

    </>
  );
}

export { Header }