



import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';



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
                        <span style={{ color: "#D9B9FF", fontFamily:''}} >
                            Maderas
                        </span>

                        <div >
                            <span style={{marginBottom:"10px"}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32" fill="none">
                                    <path d="M16 20.5L8 12.5L9.86667 10.6333L16 16.7667L22.1333 10.6333L24 12.5L16 20.5Z" fill="#D9B9FF" />
                                </svg>
                            </span>
                        </div>

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