

import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/userSlice';
import { Link } from 'react-router-dom';


export  const DropdownUser = (/* aqui tiene que venir mi user.nombre */) =>  { //esto va arecibir el nombre de usuario se lo mando del header


  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Berioska
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><Link to = { "/miPerfil"} > Mi perfil</Link></MenuItem>
        <MenuItem onClick={handleClose}>Mi carro</MenuItem>
        <MenuItem onClick={ () => dispatch(logout())  }>Salir</MenuItem>
      </Menu>
    </div>
  );
}