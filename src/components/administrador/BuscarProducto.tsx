import { Box, Button, TextField } from "@mui/material"
import { useFormik } from "formik";
import { useNotification } from "../../context/notification.context";
import { useState } from "react";
import { ProductoPrincipal } from "../../interfaces/ProductoPincipal";
import { useNavigate } from "react-router-dom";




interface BuscarProducto {
    buscarProducto: ''
}



export const BuscarProducto = () => {
    const navigate = useNavigate();
    const [producto, setProducto] = useState<ProductoPrincipal>();

    const { getSucces } = useNotification();

    const formik = useFormik<BuscarProducto>({

        initialValues: {
            buscarProducto: ''
        },

        validationSchema: '',
        onSubmit: (values: BuscarProducto) => {
            getSucces(JSON.stringify(values));
            // console.log(values)

            const idProducto = parseInt(values.buscarProducto)

            console.log(idProducto)

            fetch(`http://localhost:3000/productos/`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(response => {
                    if (response.ok) {
                        return response.json() as Promise<ProductoPrincipal>
                    } else {
                        throw new Error("La peticion no se puso procesar");

                    }
                })
                .then(json => {

                    setProducto(json);
                    localStorage.setItem("producto", JSON.stringify(json)); //guuardo el producto que me devuelve en el local storage
                    navigate('/editarProducto');

                })


            formik.resetForm()

        },
    });

    return (
        <>

            <div >

                <h1 style={{ marginBottom: "40px" }} >Modifica el Producto</h1>
                <div style={{ width: '400px', marginTop: '30px' }}>
                    <Box component="form" onSubmit={formik.handleSubmit}>
                        <TextField
                            sx={{ width: '100%' }}
                            label="Buscar producto"
                            name="buscarProducto"
                            value={formik.values.buscarProducto}
                            onChange={formik.handleChange}
                        />
                        <Button type="submit">Buscar</Button>
                    </Box>
                </div>
            </div>

        </>
    )
}




