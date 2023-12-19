import { Button, Grid } from "@mui/material"
import { Link } from "react-router-dom"



const styles = {
  border: '1px solid #ffffff',
  width: '200px',
  height: '70px',
  margin: '40px'

}




export const FormEditAdmin = () => {



  return (

    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"

      >


        <Button sx={{ ...styles }}><Link to={'/agregarProducto'}>Agregar Producto</Link></Button>
        <Button sx={{ ...styles }}><Link to={'/editarProducto'}>Editar Producto</Link></Button>
        <Button sx={{ ...styles }}><Link to={'/eliminarProducto'}>Eliminar Producto</Link></Button>



      </Grid>

    </>
  )


}