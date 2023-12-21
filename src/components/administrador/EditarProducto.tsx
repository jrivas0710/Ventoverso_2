import { Box, Button, Grid, TextField, TextareaAutosize, Checkbox } from "@mui/material"
import { HeaderAdmin } from "./HeaderAdmin";
import { useFormik } from "formik";
import { EditProducto } from "../../interfaces/EditProducto";
import { useNotification } from "../../context/notification.context";




export const EditarProducto = () => {
    const { getSucces } = useNotification();

    const formik = useFormik<EditProducto>({

        initialValues: {
            id_categoria: '',
            id_subcategoria: '',
            id_marcas: '',
            id: '',
            nombreProducto: '',
            modelo: '',
            descripcion: '',
            precio: '',
            stock: '',
            caracteristicasPrincipales: '',
            estrellas: '',
            clave: '',
            sistema: '',
            cantLlaves: '',
            materialLlave: '',
            materialCuerpo: '',
            incluyeBoquilla: false,
            cantBarriles: '',
            largoBarril: '',
            reposaPulgar: '',
            cantAnillos: '',
            incluyeCanas: false,
            incluyeMaleta: false,
            origen: '',
            nombre: '',
            base64: '',
        },


        validationSchema: '',
        onSubmit: (values: EditProducto) => {
            getSucces(JSON.stringify(values));



            const objetoProducto = {

                id_categoria: parseInt(values.id_categoria),
                id_subcategoria: parseInt(values.id_subcategoria),
                id_marcas: parseInt(values.id_marcas),
                id: parseInt(values.id), // esto lo agregue yo
                descripcion: values.descripcion,
                nombreProducto: values.nombreProducto,
                modelo: values.modelo,
                caracteristicasPrincipales: values.caracteristicasPrincipales,
                precio: parseInt(values.precio),
                stock: values.stock,
                imagenes: [{
                    nombre: values.nombre,
                    base64: values.base64
                }],
                detalle: {
                    clave: values.clave,
                    sistema: values.sistema,
                    cantLlaves: values.cantLlaves,
                    materialLlave: values.materialLlave,
                    materialCuerpo: values.materialCuerpo,
                    incuyeBoquilla: values.incluyeBoquilla,
                    cantBarriles: values.cantBarriles,
                    largoBarril: values.largoBarril,
                    reposaPulgar: values.reposaPulgar,
                    cantAnillos: values.cantAnillos,
                    incluyeCanas: values.incluyeCanas,
                    incluyeMaleta: values.incluyeMaleta,
                    origen: values.origen
                }

            }


            fetch(`http://localhost:3000/productos`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...objetoProducto })
            })

            console.log('me diste desde editar ')


            formik.resetForm();

        },
    });


    return (
        <>
            <HeaderAdmin />
            <Box component="form" onSubmit={formik.handleSubmit}>

                <div style={{ margin: "30px", width: "100vw", borderBottom: "1px solid #ffffff" }}   >
                    <h1 style={{ marginBottom: "40px" }} >Crear Producto</h1>
                    <h2>1. Identificacion Producto</h2>
                </div>
                <Grid container sx={{ textAlign: "center" }}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            sx={{ width: '400px', margin: '50px' }}
                            id="standard-read-only-input"
                            label="Categoria"
                            name='id_categoria'
                            value={formik.values.id_categoria}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}

                        />
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <TextField
                            sx={{ width: '400px', margin: '50px' }}
                            id="standard-read-only-input"
                            label="Subcategoria"
                            name='id_subcategoria'
                            value={formik.values.id_subcategoria}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />

                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            sx={{ width: '400px', margin: '50px' }}
                            id="standard-read-only-input"
                            label="Marca"
                            name='id_marcas'
                            value={formik.values.id_marcas}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}

                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            sx={{ width: '400px', margin: '50px' }}
                            id="standard-read-only-input"
                            label="Modelo"
                            name='modelo'
                            value={formik.values.modelo}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}

                        />
                    </Grid>
                </Grid>



                <div style={{ margin: "30px", width: "100vw", borderBottom: "1px solid #ffffff" }}   >

                    <h2 >2. Precio</h2>
                </div>
                <Grid container sx={{ textAlign: "center" }}  >


                    <Grid item xs={12} sm={6}>
                        <TextField
                            sx={{ width: '400px', margin: '50px' }}
                            id="standard-read-only-input"
                            label="Precio"
                            name='precio'
                            value={formik.values.precio}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>

                </Grid>


                <div style={{ margin: "30px", width: "100vw", borderBottom: "1px solid #ffffff" }}   >
                    <h2>3. Detalles del producto</h2>
                </div>
                <Grid container sx={{ textAlign: "center" }}  >
                    <Grid item xs={12} sm={6}>
                        <TextField
                            sx={{ width: '400px', margin: '50px' }}
                            id="standard-read-only-input"
                            label="Stock"
                            name='stock'
                            value={formik.values.stock}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            sx={{ width: '400px', margin: '50px' }}
                            id="standard-read-only-input"
                            label="Clave"
                            name='clave'
                            value={formik.values.clave}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}

                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            sx={{ width: '400px', margin: '50px' }}
                            id="standard-read-only-input"
                            label="Sistema"
                            name='sistema'
                            value={formik.values.sistema}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}

                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            sx={{ width: '400px', margin: '50px' }}
                            id="standard-read-only-input"
                            label="Cantidad de llaves"
                            name='cantLlaves'
                            value={formik.values.cantLlaves}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}

                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            sx={{ width: '400px', margin: '50px' }}
                            id="standard-read-only-input"
                            label="Material de las llaves"
                            name='materialLlave'
                            value={formik.values.materialLlave}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            sx={{ width: '400px', margin: '50px' }}
                            id="standard-read-only-input"
                            label="Material del cuerpo"
                            name='materialCuerpo'
                            value={formik.values.materialCuerpo}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}

                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>

                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            sx={{ width: '400px', margin: '50px' }}
                            id="standard-read-only-input"
                            label="Cantidad de barriles"
                            name='cantBarriles'
                            value={formik.values.cantBarriles}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}

                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            sx={{ width: '400px', margin: '50px' }}
                            id="standard-read-only-input"
                            label="Longitus de barril"
                            name='largoBarril'
                            value={formik.values.largoBarril}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}

                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            sx={{ width: '400px', margin: '50px' }}
                            id="standard-read-only-input"
                            label="Tipo de reposa pulgares"
                            name='reposaPulgar'
                            value={formik.values.reposaPulgar}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}

                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            sx={{ width: '400px', margin: '50px' }}
                            id="standard-read-only-input"
                            label="Cantidad de anillos"
                            name='cantAnillos'
                            value={formik.values.cantAnillos}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}

                        />
                    </Grid>


                    <Grid item xs={12} sm={6}>
                        <TextField
                            sx={{ width: '400px', margin: '50px' }}
                            id="standard-read-only-input"
                            label="Pais de origen"
                            name='origen'
                            value={formik.values.origen}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}

                        />
                        <div style={{ width: "100%", display: "flex" }}>
                            <Grid item xs={12} sm={6}>
                                Incluye Cañas
                                <Checkbox
                                    name='incluyeCanas'
                                    checked={formik.values.incluyeCanas}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                Incluye Maleta <Checkbox
                                    name='incluyeMaleta'
                                    checked={formik.values.incluyeMaleta}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                Incluye Boquilla <Checkbox
                                    name='incluyeBoquilla'
                                    checked={formik.values.incluyeBoquilla}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                            </Grid>

                        </div>
                    </Grid>

                    <div style={{ margin: "30px", width: "100vw", borderBottom: "1px solid #ffffff", textAlign: "left" }}   >
                        <h2> 4. Descripcion del producto</h2>
                    </div>

                    <Grid container  >


                        <Grid item xs={12} sm={5} >
                            <span>Descripcion del Producto</span>
                        </Grid>
                        <Grid item xs={12} sm={12} >
                            <TextareaAutosize
                                style={{ width: "1000px" }}
                                minRows={17}
                                id="standard-read-only-input"
                                placeholder="Ingresa una descripcion"
                                name='descripcion'
                                value={formik.values.descripcion}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}

                            />
                        </Grid>

                    </Grid>
                    <div style={{ margin: "30px", width: "100vw", borderBottom: "1px solid #ffffff", textAlign: "left" }}   >
                        <h2> 5. Imagenes producto</h2>
                    </div>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", justifyContent: "space-around" }}>

                        <div>
                            <TextField
                                label="Nombre" sx={{ marginTop: '20px' }}
                                name='nombre'
                                value={formik.values.nombre}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />

                            <TextField
                                label="Base64" sx={{ marginTop: '20px', marginBottom: '20px' }}
                                name='base64'
                                value={formik.values.base64}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>

                        <div>
                            <TextField
                                label="Nombre" sx={{ marginTop: '20px' }}
                                name='nombre'
                                value={formik.values.nombre}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />

                            <TextField
                                label="Base64" sx={{ marginTop: '20px', marginBottom: '20px' }}
                                name='base64'
                                value={formik.values.base64}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>

                        <div>
                            <TextField
                                label="Nombre" sx={{ marginTop: '20px' }}
                                name='nombre'
                                value={formik.values.nombre}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />

                            <TextField
                                label="Base64" sx={{ marginTop: '20px', marginBottom: '20px' }}
                                name='base64'
                                value={formik.values.base64}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>

                        <div>
                            <TextField
                                label="Nombre" sx={{ marginTop: '20px' }}
                                name='nombre'
                                value={formik.values.nombre}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />

                            <TextField
                                label="Base64" sx={{ marginTop: '20px', marginBottom: '20px' }}
                                name='base64'
                                value={formik.values.base64}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>

                        <div>
                            <TextField
                                label="Nombre" sx={{ marginTop: '20px' }}
                                name='nombre'
                                value={formik.values.nombre}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />

                            <TextField
                                label="Base64" sx={{ marginTop: '20px', marginBottom: '20px' }}
                                name='base64'
                                value={formik.values.base64}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                    </div>
                    <div style={{ margin: "30px", width: "100vw", borderBottom: "1px solid #ffffff", textAlign: "left" }}   >
                        <h2> Historial</h2>
                    </div>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            sx={{ width: '400px', margin: '50px' }}
                            id="standard-read-only-input"

                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            sx={{ width: '400px', margin: '50px' }}
                            id="standard-read-only-input"


                        />
                    </Grid>


                </Grid>
                <div style={{ width: "1000px", textAlign: "center", margin: "0 auto" }}   >
                    <Button variant="contained" type="submit" color="secondary"
                        style={{ width: "300px", height: "80px" }}
                    >Enviar</Button>
                </div>


            </Box>
        </>
    )
}



