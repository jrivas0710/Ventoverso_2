import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Grid, TextField } from "@mui/material";



export const MiPerfil = () => {

    const user = useSelector((state: RootState) => state.user)

    return (
        <>
            <h1 style={{ marginLeft: 70 }}>Mi Perfil</h1>

            <Grid container spacing={5} columns={16} sx={{ marginLeft: 6,  } }>

                <Grid item xs={8}  sx = {{textAlign :' 30px'}}   >
                    <h1>Hola {user.nombre}</h1>

                    <Card sx={{ minWidth: 275, marginLeft: 2, borderRadius: 3 }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Mis datos
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Datos Personales
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Direcciones
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card sx={{ minWidth: 275, marginLeft: 2 }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Mis datos
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Datos Personales
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Direcciones
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card sx={{ minWidth: 275, marginLeft: 2 }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Mis datos
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Datos Personales
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Direcciones
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ minWidth: 275, marginLeft: 2 }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Mis datos
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Datos Personales
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Direcciones
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ minWidth: 275, marginLeft: 2 }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Mis datos
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Datos Personales
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Direcciones
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ minWidth: 275, marginLeft: 2 }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Mis datos
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Datos Personales
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Direcciones
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={8}>

                    <Box component="form" sx={{
                        backgroundColor: "#D9B9FF", borderRadius: 2, width: 450,
                        alignItems: 'center', height: 550, marginTop: 19, 
                    }}>


                        <label>Nombre</label><TextField sx={{ backgroundColor: "#FFFFFF", width: 400}} />
                        <label>Apellidos</label><TextField sx={{ backgroundColor: "#FFFFFF", width: 400 }} />
                        <label>Rut</label><TextField sx={{ backgroundColor: "#FFFFFF", width: 400 }} />
                        <label>Telefono</label><TextField sx={{ backgroundColor: "#FFFFFF", width: 400 }} />
                        <label>E-mail</label><TextField sx={{ backgroundColor: "#FFFFFF", width: 400 }} />

                    </Box>


                </Grid>

            </Grid>


        </>
    )
}



