import { Button, Grid, makeStyles } from "@mui/material"

interface Styles {
  action: string,

}

const styles = {
  border: '1px solid #ffffff',
   width: '200px',
  height: '70px',
  margin: '40px'

}




export const EditAdmin = () => {



  return (

    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        
      >
        <Button sx = {{...styles}}>Agregar producto</Button>
        <Button sx = {{...styles}}>Editar Producto</Button>
        <Button sx = {{...styles}}>Eliminar producto</Button>

      </Grid>

    </>
  )


}