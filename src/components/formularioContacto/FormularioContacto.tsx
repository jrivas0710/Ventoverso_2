import { Box, TextField, TextareaAutosize } from "@mui/material"
import { useFormik } from "formik";
import { AyudaValidate } from "../utils/ayudaValidate";
import { useNotification } from "../../context/notification.context";
import { useState } from "react";
import './FormularioContacto.css'

export const FormularioContacto = () => {

    const [alert, setAlert] = useState(false)
    const { getSucces } = useNotification();




    type ayudaType = {
        name: string,
        apellido: string
        email: string,
        mensaje: string,
        telefono: string,
    }



    const formik = useFormik<ayudaType>({

        initialValues: {
            name: "",
            apellido: "",
            email: "",
            mensaje: "",
            telefono: "",
        },
        validationSchema: AyudaValidate,
        onSubmit: (values: ayudaType) => {
            getSucces(JSON.stringify(values));
            formik.resetForm();
            console.log(values);

        },
    });

    const { errors, touched } = formik




    return (
        <>
            <div>
                <div style={{ margin: "50px" }} >
                    <div style={{ marginLeft: "15px" }} >
                        <h4>Formulario de Contacto</h4>
                        <p>Lorem ipsum dolor sit amet consectetur. Leo viverra massa potenti dui aliquam massa nunc. Purus a sapien egestas sem eu at urna. </p>

                    </div>
                    <Box component="form" display="flex" flexDirection="row" flexWrap={"wrap"} justifyContent="center" onSubmit={formik.handleSubmit}   >
                        <TextField margin="normal" sx={{ width: 600 }} label="Nombre" style={{ marginRight: "30px" }}
                            name='name'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                        />
                        <TextField margin="normal" sx={{ width: 600 }} label="Apellido"
                            name='apellido'
                            value={formik.values.apellido}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.apellido && Boolean(formik.errors.apellido)}
                            helperText={formik.touched.apellido && formik.errors.apellido}
                        />
                        <TextField margin="normal" sx={{ width: 600 }} label="Email" style={{ marginRight: "30px" }}
                            name='email'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextField margin="normal" sx={{ width: 600 }} label="Teléfono"
                            name='telefono'
                            value={formik.values.telefono}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.telefono && Boolean(formik.errors.telefono)}
                            helperText={formik.touched.telefono && formik.errors.telefono}
                        />
                        <TextareaAutosize placeholder="¿En qué podemos ayudarte?" minRows={9} style={{ fontSize: "16px", width: "100%", margin: "15px" }}
                            name='mensaje'
                            value={formik.values.mensaje}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            />
                        {errors.mensaje && touched.mensaje && <div style={{width:"100%"}}><small style={{ color: "#D32F2F", fontSize: "13px", display: "flex", paddingLeft: "18px" }} >{errors.mensaje}</small></div> }

                        <div style={{display:"flex", flexDirection:"column"}}  ><button className="botonEnviarContacto" type="submit">Enviar</button>
                        </div>

                    </Box>
                </div>

            </div>
        </>
    )
}