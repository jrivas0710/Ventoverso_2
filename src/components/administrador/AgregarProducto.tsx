import { Box, Button, Grid, TextField, TextareaAutosize, Checkbox } from "@mui/material"
import { HeaderAdmin } from "./HeaderAdmin";
import { useFormik } from "formik";
import { EditProducto } from "../../interfaces/EditProducto";
import { useNotification } from "../../context/notification.context";
import { editFormValidate } from "../utils/editFormValidate";





export const CrearProducto = () => {
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
            base1: "",
            base2: "",
            base3: "",
            base4: "",
            base5: "",
            nombre1: "",
            nombre2: "",
            nombre3: "",
            nombre4: "",
            nombre5: ""
        },


        validationSchema:  '' ,
        onSubmit: (values: EditProducto) => {
            getSucces(JSON.stringify(values));
            console.log("mediste click desde crear producto")
            

            const objetoProducto = {

                id_categoria: parseInt(values.id_categoria),
                id_subcategoria: parseInt(values.id_subcategoria),
                id_marcas: parseInt(values.id_marcas),
                descripcion: values.descripcion,
                nombreProducto: values.nombreProducto,
                modelo: values.modelo,
                precio: parseInt(values.precio),
                stock: values.stock,
                imagenes: [{
                    nombre: values.nombre1,
                    base64: values.base1
                },
                {
                    nombre: values.nombre2,
                    base64: values.base2

                },
                {
                    nombre: values.nombre3,
                    base64: values.base3

                },
                {
                    nombre: values.nombre4,
                    base64: values.base4

                },
                {
                    nombre: values.nombre5,
                    base64: values.base5

                }

                ],
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

            console.log(objetoProducto)


            fetch(`http://localhost:3000/productos`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...objetoProducto })
            })

            console.log('me diste desde crear ')


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
                            error={formik.touched.id_categoria && Boolean(formik.errors.id_categoria)}
                            helperText={formik.touched.id_categoria && formik.errors.id_categoria}


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
                            error={formik.touched.id_subcategoria && Boolean(formik.errors.id_subcategoria)}
                            helperText={formik.touched.id_subcategoria && formik.errors.id_subcategoria}

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
                            error={formik.touched.id_marcas && Boolean(formik.errors.id_marcas)}
                            helperText={formik.touched.id_marcas && formik.errors.id_marcas}

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
                            error={formik.touched.modelo && Boolean(formik.errors.modelo)}
                            helperText={formik.touched.modelo && formik.errors.modelo}

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
                            error={formik.touched.precio && Boolean(formik.errors.precio)}
                            helperText={formik.touched.precio && formik.errors.precio}

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
                            error={formik.touched.stock && Boolean(formik.errors.stock)}
                            helperText={formik.touched.stock && formik.errors.stock}

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
                            error={formik.touched.clave && Boolean(formik.errors.clave)}
                            helperText={formik.touched.clave && formik.errors.clave}

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
                            error={formik.touched.sistema && Boolean(formik.errors.sistema)}
                            helperText={formik.touched.sistema && formik.errors.sistema}

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
                            error={formik.touched.cantLlaves && Boolean(formik.errors.cantLlaves)}
                            helperText={formik.touched.cantLlaves && formik.errors.cantLlaves}


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
                            error={formik.touched.materialLlave && Boolean(formik.errors.materialLlave)}
                            helperText={formik.touched.materialLlave && formik.errors.materialLlave}

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
                            error={formik.touched.materialCuerpo && Boolean(formik.errors.materialCuerpo)}
                            helperText={formik.touched.materialCuerpo && formik.errors.materialCuerpo}

                        />
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
                            error={formik.touched.cantBarriles && Boolean(formik.errors.cantBarriles)}
                            helperText={formik.touched.cantBarriles && formik.errors.cantBarriles}

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
                            error={formik.touched.largoBarril && Boolean(formik.errors.largoBarril)}
                            helperText={formik.touched.largoBarril && formik.errors.largoBarril}

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
                            error={formik.touched.reposaPulgar && Boolean(formik.errors.reposaPulgar)}
                            helperText={formik.touched.reposaPulgar && formik.errors.reposaPulgar}

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
                            error={formik.touched.cantAnillos && Boolean(formik.errors.cantAnillos)}
                            helperText={formik.touched.cantAnillos && formik.errors.cantAnillos}

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
                            error={formik.touched.origen && Boolean(formik.errors.origen)}
                            helperText={formik.touched.origen && formik.errors.origen}

                        />
                   
                    </Grid>

                    <div style={{ width: "100%", display: "flex",  }}>
                            <Grid item xs={12} sm={6}>
                                Incluye Cañas
                                <Checkbox
                                    name='incluyeCanas'
                                    checked={formik.values.incluyeCanas}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <small style={{ color: "#D32F2F", fontSize: "13px", display: "flex", flexDirection: "column", paddingLeft: "11px" }} >Recuerda marcar esta casilla si lo requiere</small>

                            </Grid>
                            <Grid item xs={12} sm={6}>
                                Incluye Maleta <Checkbox
                                    name='incluyeMaleta'
                                    checked={formik.values.incluyeMaleta}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <small style={{ color: "#D32F2F", fontSize: "13px", display: "flex", flexDirection: "column", paddingLeft: "11px" }} >Recuerda marcar esta casilla si lo requiere</small>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                Incluye Boquilla <Checkbox
                                    name='incluyeBoquilla'
                                    checked={formik.values.incluyeBoquilla}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <small style={{ color: "#D32F2F", fontSize: "13px", display: "flex", flexDirection: "column", paddingLeft: "11px" }} >Recuerda marcar esta casilla si lo requiere</small>

                            </Grid>

                        </div>

                    <div style={{ margin: "30px", width: "100vw", borderBottom: "1px solid #ffffff", textAlign: "left" }}   >
                        <h2> 4. Descripcion del producto</h2>
                    </div>

                    <Grid container>


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
                                name='nombre1'
                                value={formik.values.nombre1}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.nombre1 && Boolean(formik.errors.nombre1)}
                                helperText={formik.touched.nombre1 && formik.errors.nombre1}

                            />

                            <TextField
                                label="Base64" sx={{ marginTop: '20px', marginBottom: '20px' }}
                                name='base1'
                                value={formik.values.base1}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.base1 && Boolean(formik.errors.base1)}
                                helperText={formik.touched.base1 && formik.errors.base1}
                            />


                        </div>

                        <div>
                            <TextField
                                label="Nombre" sx={{ marginTop: '20px' }}
                                name='nombre2'
                                value={formik.values.nombre2}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.nombre2 && Boolean(formik.errors.nombre2)}
                                helperText={formik.touched.nombre2 && formik.errors.nombre2}

                            />

                            <TextField
                                label="Base64" sx={{ marginTop: '20px', marginBottom: '20px' }}
                                name='base2'
                                value={formik.values.base2}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.base2 && Boolean(formik.errors.base2)}
                                helperText={formik.touched.base2 && formik.errors.base2}
                            />


                        </div>

                        <div>
                            <TextField
                                label="Nombre" sx={{ marginTop: '20px' }}
                                name='nombre3'
                                value={formik.values.nombre3}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.nombre3 && Boolean(formik.errors.nombre3)}
                                helperText={formik.touched.nombre3 && formik.errors.nombre3}

                            />

                            <TextField
                                label="Base64" sx={{ marginTop: '20px', marginBottom: '20px' }}
                                name='base3'
                                value={formik.values.base3}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.base3 && Boolean(formik.errors.base3)}
                                helperText={formik.touched.base3 && formik.errors.base3}
                            />


                        </div>

                        <div>
                            <TextField
                                label="Nombre" sx={{ marginTop: '20px' }}
                                name='nombre4'
                                value={formik.values.nombre4}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.nombre4 && Boolean(formik.errors.nombre4)}
                                helperText={formik.touched.nombre4 && formik.errors.nombre4}

                            />

                            <TextField
                                label="Base64" sx={{ marginTop: '20px', marginBottom: '20px' }}
                                name='base4'
                                value={formik.values.base4}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.base4 && Boolean(formik.errors.base4)}
                                helperText={formik.touched.base4 && formik.errors.base4}
                            />


                        </div>

                        <div>
                            <TextField
                                label="Nombre" sx={{ marginTop: '20px' }}
                                name='nombre5'
                                value={formik.values.nombre5}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.nombre5 && Boolean(formik.errors.nombre5)}
                                helperText={formik.touched.nombre5 && formik.errors.nombre5}

                            />

                            <TextField
                                label="Base64" sx={{ marginTop: '20px', marginBottom: '20px' }}
                                name='base5'
                                value={formik.values.base5}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.base5 && Boolean(formik.errors.base5)}
                                helperText={formik.touched.base5 && formik.errors.base5}
                            />


                        </div>





                    </div>
                  {/*   <div style={{ margin: "30px", width: "100vw", borderBottom: "1px solid #ffffff", textAlign: "left" }}   >
                        <h2> Historial</h2>
                    </div>
 */}
                    {/*  <Grid item xs={12} sm={6}>
                        <TextField
                            sx={{ width: '400px', margin: '50px' }}
                            id="standard-read-only-input"

                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            sx={{ width: '400px', margin: '50px' }}
                            id="standard-read-only-input" />
                            
                    </Grid> */}






                </Grid>

                <div style={{ width: "1000px", textAlign: "center", margin: "0 auto" }}   >
                    <Button variant="contained" type="submit" color="secondary"
                        style={{ width: "300px", height: "80px", marginTop: "160px" }}
                    >Enviar</Button>
                </div>


            </Box>
        </>
    )
}



