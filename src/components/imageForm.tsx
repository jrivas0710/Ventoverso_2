import { Box, Button, Grid, TextField } from "@mui/material"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { ProductoPrincipal } from "../interfaces/ProductoPincipal"
import { useNotification } from "../context/notification.context";
import { useFormik } from "formik";


const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});





export const ImageForm = () => {
    const { getSucces } = useNotification();

    const formik = useFormik<ProductoPrincipal>({

        initialValues: { 
            id_categoria:  undefined,
            id_subcategoria: undefined,
            id_marcas: undefined,
            id: undefined,
            nombreProducto: '',
            modelo: '',
            descripcion: '',
            caracteristicasPrincipales: '',
            precio: undefined,
            stock: undefined,
            nombre: '',
            base64: ''
        },


        validationSchema: '',
        onSubmit: (values: ProductoPrincipal) => {
            getSucces(JSON.stringify(values));

            fetch(`http://localhost:3000/productos`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...values })
            })

            console.log('me diste')
            console.log(values)
            formik.resetForm();
        },
    });

    //const { errors, touched } = formik



    return (
        <>

            <Box component="form" onSubmit={formik.handleSubmit}>
                <Grid container rowSpacing={1}
                    sx={{ display: 'flex', flexDirection: 'column', justifyItems: 'center', alignContent: 'center', marginTop: '30px' }}
                >
                    <Grid item xs={6} md={12} sx={{ display: 'flex', flexDirection: 'column', width: '500px' }}>
                        <TextField label=" id_categoria" sx={{marginTop: '20px'}}
                            name='id_categoria'
                            value={formik.values.id_categoria}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />

                        <TextField label=" id_subcategoria" sx={{marginTop: '20px'}}
                            name='id_subcategoria'
                            value={formik.values.id_subcategoria}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <TextField label="id_marcas" sx={{marginTop: '20px'}}
                            name='id_marcas'
                            value={formik.values.id_marcas}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} />
                        
                        <TextField label="Características" sx={{marginTop: '20px'}}
                            name='características'
                            value={formik.values.caracteristicasPrincipales}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} />

                        <TextField label="id" sx={{marginTop: '20px'}}
                            name='id' 
                            value={formik.values.id}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />

                        <TextField label="nombreProducto" sx={{marginTop: '20px'}}
                            name='nombreProducto'
                            value={formik.values.nombreProducto}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <TextField label="modelo" sx={{marginTop: '20px'}}
                            name='modelo'
                            value={formik.values.modelo}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <TextField label="Descripcion" sx={{marginTop: '20px'}}
                            name='descripcion'
                            value={formik.values.descripcion}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <TextField label="Precio" sx={{marginTop: '20px'}}
                            name='precio'
                            value={formik.values.precio}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <TextField label="Stock" sx={{marginTop: '20px'}}
                            name='stock'
                            value={formik.values.stock}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                       
                        <TextField label="Nombre" sx={{marginTop: '20px'}}
                            name='nombre'
                            value={formik.values.nombre}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <TextField label="Base64" sx={{marginTop: '20px', marginBottom: '20px'}}
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