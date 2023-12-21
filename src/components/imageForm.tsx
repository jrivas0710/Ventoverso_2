import { Box, Button, Grid, TextField } from "@mui/material"
import { useNotification } from "../context/notification.context";
import { useFormik } from "formik";
import { ProductoPrincipal } from "../interfaces/ProductoPincipal";



interface Producto {
   
        id_categoria : string,
        id_subcategoria : string,
        id_marcas: string
        id: string,
        descripcion: string,
        nombreProducto : string,
        modelo : string,
        caracteristicasPrincipales : string,
        precio : string,
        stock : string,
        nombre: string,
        base64: string
}



export const ImageForm = () => {
    const { getSucces } = useNotification();

    const formik = useFormik<Producto>({

        initialValues: {
            id_categoria: '',
            id_subcategoria: '',
            id_marcas: '',
            id: '',
            nombreProducto: '',
            modelo: '',
            descripcion: '',
            caracteristicasPrincipales: '',
            precio: '',
            stock: '',
            nombre: '',
            base64: ''
        },
            


        validationSchema: '',
        onSubmit: (values: Producto) => {
            getSucces(JSON.stringify(values));

            
           const objeto = {
                id_categoria : parseInt(values.id_categoria),
                id_subcategoria : parseInt(values.id_subcategoria),
                id_marcas: parseInt(values.id_marcas),
                id: parseInt(values.id),
                descripcion: values.descripcion,
                nombreProducto : values.nombreProducto,
                modelo : values.modelo,
                caracteristicasPrincipales : values.caracteristicasPrincipales,
                precio : parseInt(values.precio),
                stock : parseInt(values.stock),
                imagenes: [{
                    nombre: values.nombre,
                    base64: values.base64
                }]
            }
            

            fetch(`http://localhost:3000/productos`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...objeto})
            })

            console.log('me diste')
            console.log(values)
            console.log( "antes", objeto   )
            formik.resetForm();
            console.log ( "despues", objeto)
        },
    });

   



    return (
        <>

            <Box component="form" onSubmit={formik.handleSubmit}>
                <Grid container rowSpacing={1}
                    sx={{ display: 'flex', flexDirection: 'column', justifyItems: 'center', alignContent: 'center', marginTop: '30px' }}
                >
                    <Grid item xs={6} md={12} sx={{ display: 'flex', flexDirection: 'column', width: '500px' }}>
                        <TextField label=" id_categoria" sx={{ marginTop: '20px' }}
                            name='id_categoria'
                            value={formik.values.id_categoria}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />

                        <TextField label=" id_subcategoria" sx={{ marginTop: '20px' }}
                            name='id_subcategoria'
                            value={formik.values.id_subcategoria}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <TextField label="id_marcas" sx={{ marginTop: '20px' }}
                            name='id_marcas'
                            value={formik.values.id_marcas}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} />

                        <TextField label="Características" sx={{ marginTop: '20px' }}
                            name='caracteristicasPrincipales'
                            value={formik.values.caracteristicasPrincipales}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} />

                        <TextField label="id" sx={{ marginTop: '20px' }}
                            name='id'
                            value={formik.values.id}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />

                        <TextField label="nombreProducto" sx={{ marginTop: '20px' }}
                            name='nombreProducto'
                            value={formik.values.nombreProducto}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <TextField label="modelo" sx={{ marginTop: '20px' }}
                            name='modelo'
                            value={formik.values.modelo}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <TextField label="Descripcion" sx={{ marginTop: '20px' }}
                            name='descripcion'
                            value={formik.values.descripcion}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <TextField label="Precio" sx={{ marginTop: '20px' }}
                            name='precio'
                            value={formik.values.precio}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <TextField label="Stock" sx={{ marginTop: '20px' }}
                            name='stock'
                            value={formik.values.stock}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />

                        <TextField label="Nombre" sx={{ marginTop: '20px' }}
                            name='nombre'
                            value={formik.values.nombre}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <TextField label="Base64" sx={{ marginTop: '20px', marginBottom: '20px' }}
                            name='base64'
                            value={formik.values.base64}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />


                        <Button variant="contained" type="submit" color="secondary">Enviar</Button>
                    </Grid>
                </Grid>

            </Box>
        </>
    )
}