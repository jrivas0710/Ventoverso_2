



import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import './cssMaderas.css'



export const DropdownMaderas = (/* aqui tiene que venir mi user.nombre */) => { //esto va arecibir el nombre de usuario se lo mando del header


    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



    return (
        <div  >
            <div>
                <Button

                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    style={{ fontFamily:""}}
                >
                    <div style={{ display: "flex", height: "60px" } }>
                        <span style={{ color: "#D9B9FF"}} className='fuenteMaderas' >
                            Maderas
                        </span>

                       

                    </div>

                </Button>
            </div>
            <Menu
            
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    
                }}
            >
                <MenuItem onClick={handleClose}><Link to={"/categoria"} 
                 >Clarinetes</Link></MenuItem>
                <MenuItem onClick={handleClose}>Fagotes</MenuItem>
                <MenuItem onClick={handleClose}>Flautas Traversas</MenuItem>
                <MenuItem onClick={handleClose}>Flautas Dulces</MenuItem>
                <MenuItem onClick={handleClose}>Oboes</MenuItem>

            </Menu>
        </div>
    );
}