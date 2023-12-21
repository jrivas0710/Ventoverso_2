import { Box, Button, Grid, TextField } from "@mui/material"
import { useFormik } from "formik";
import { useNotification } from "../../context/notification.context";
import { HeaderAdmin } from "./HeaderAdmin";

interface Id {
    id: string
}

export const EliminarProducto = () => {



    const { getSucces } = useNotification();




    const formik = useFormik<Id>({

        initialValues: {
            id: ""
        },
        validationSchema: "",
        onSubmit: (values:Id) => {
            getSucces(JSON.stringify(values));
            formik.resetForm();
            console.log(values);

            const id = {
                id: parseInt(values.id)
            }

            fetch(`http://localhost:3000/productos/${id}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...id }) // no se si es necesario
            })

            console.log('me diste desde Moficar')


            formik.resetForm();

        },





        },
    );




    return (

        <>
        <HeaderAdmin/>

            <div style={{ margin: "30px", width: "100vw", borderBottom: "1px solid #ffffff" }}   >
                <h1 style={{ marginBottom: "40px" }} >Modifica el producto</h1>
                <h2>1. Elimina un Producto: <small>Ingresa el id del producto que deseas eliminar</small></h2>
            </div>
            
            <Box component="form" onSubmit={formik.handleSubmit}>
            <Grid container sx={{ textAlign: "center" }}>
                <Grid item xs={12} sm={6}>

                    <TextField
                        sx={{ width: '400px', margin: '50px' }}
                        id="standard-read-only-input"
                        label="id"
                        name='id'
                        value={formik.values.id}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Grid>

                <div style={{ width: "1000px", textAlign: "center", margin: "0 auto" }}   >
                    <Button variant="contained" type="submit" color="secondary"
                        style={{ width: "300px", height: "40px" }}
                    >Enviar</Button>
                </div>
            </Grid>
            </Box>




        </>
    )
}