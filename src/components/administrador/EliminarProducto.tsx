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

            const id =  parseInt(values.id);
            console.log(id)

            fetch(`http://localhost:3000/productos/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                },
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
                <h1 style={{ marginBottom: "40px" }} >Elimina el producto</h1>
                <h2>Ingresa el id del producto que deseas eliminar</h2>
            </div>
            
            <Box component="form" onSubmit={formik.handleSubmit}>
            <Grid container sx={{ textAlign: "center" }}>
                <Grid item xs={12} sm={6}>

                    <TextField
                        sx={{ width: '400px', margin: '20px' }}
                        id="standard-read-only-input"
                        label="id"
                        name='id'
                        value={formik.values.id}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                </Grid>

                <div style={{ width: "1000px", textAlign: "center", margin: "20px"}}   >
                    <Button variant="contained" type="submit" color="secondary"
                        style={{ width: "300px", height: "70px" }}
                    >Enviar</Button>
                </div>
            </Grid>
            </Box>




        </>
    )
}