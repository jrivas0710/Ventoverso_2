import { Button, Grid } from "@mui/material"
import { Link } from "react-router-dom"



const styles = {
  width: '300px',
  height: '90px',
  margin: '40px',
  boxShadow: "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)"
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


        <Button sx={{ ...styles }}><Link to={'/agregarProducto'}><div><svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 9V6H8V4H11V1H13V4H16V6H13V9H11ZM7 22C6.45 22 5.97917 21.8042 5.5875 21.4125C5.19583 21.0208 5 20.55 5 20C5 19.45 5.19583 18.9792 5.5875 18.5875C5.97917 18.1958 6.45 18 7 18C7.55 18 8.02083 18.1958 8.4125 18.5875C8.80417 18.9792 9 19.45 9 20C9 20.55 8.80417 21.0208 8.4125 21.4125C8.02083 21.8042 7.55 22 7 22ZM17 22C16.45 22 15.9792 21.8042 15.5875 21.4125C15.1958 21.0208 15 20.55 15 20C15 19.45 15.1958 18.9792 15.5875 18.5875C15.9792 18.1958 16.45 18 17 18C17.55 18 18.0208 18.1958 18.4125 18.5875C18.8042 18.9792 19 19.45 19 20C19 20.55 18.8042 21.0208 18.4125 21.4125C18.0208 21.8042 17.55 22 17 22ZM1 4V2H4.275L8.525 11H15.525L19.425 4H21.7L17.3 11.95C17.1167 12.2833 16.8708 12.5417 16.5625 12.725C16.2542 12.9083 15.9167 13 15.55 13H8.1L7 15H19V17H7C6.25 17 5.67917 16.675 5.2875 16.025C4.89583 15.375 4.88333 14.7167 5.25 14.05L6.6 11.6L3 4H1Z" fill="#180D26" />
        </svg></div>  Agregar Producto</Link></Button>
        <Button sx={{ ...styles }}><Link to={'/editarProducto'}><div><svg width="30" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.16667 25.3333H9.06667L22.1 12.3L20.2 10.4L7.16667 23.4333V25.3333ZM4.5 28V22.3333L22.1 4.76667C22.3667 4.52222 22.6611 4.33333 22.9833 4.2C23.3056 4.06667 23.6444 4 24 4C24.3556 4 24.7 4.06667 25.0333 4.2C25.3667 4.33333 25.6556 4.53333 25.9 4.8L27.7333 6.66667C28 6.91111 28.1944 7.2 28.3167 7.53333C28.4389 7.86667 28.5 8.2 28.5 8.53333C28.5 8.88889 28.4389 9.22778 28.3167 9.55C28.1944 9.87222 28 10.1667 27.7333 10.4333L10.1667 28H4.5ZM21.1333 11.3667L20.2 10.4L22.1 12.3L21.1333 11.3667Z" fill="#180D26" />
        </svg></div>Editar Producto</Link></Button>
        <Button sx={{ ...styles }}><Link to={'/eliminarProducto'}><div><svg width="30" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.33333 28C8.6 28 7.97222 27.7389 7.45 27.2167C6.92778 26.6944 6.66667 26.0667 6.66667 25.3333V8H5.33333V5.33333H12V4H20V5.33333H26.6667V8H25.3333V25.3333C25.3333 26.0667 25.0722 26.6944 24.55 27.2167C24.0278 27.7389 23.4 28 22.6667 28H9.33333ZM22.6667 8H9.33333V25.3333H22.6667V8ZM12 22.6667H14.6667V10.6667H12V22.6667ZM17.3333 22.6667H20V10.6667H17.3333V22.6667Z" fill="#180D26" />
        </svg></div>Eliminar Producto</Link></Button>



      </Grid>

    </>
  )


}