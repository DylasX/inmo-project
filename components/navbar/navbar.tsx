import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import React, { FunctionComponent } from 'react';
import theme from '../../styles/theme';
import Logo from '../../assets/images/logo.svg';

const NavBar: FunctionComponent = () => (
  <AppBar
    position='fixed'
    sx={{
      backgroundColor: '#313131',
      color: theme.palette.primary.light,
      boxShadow: 'unset',
    }}
  >
    <Toolbar>
      <Logo
        style={{
          fill: '#fff',
          width: '50px',
          marginRight: '5px',
        }}
      />
      Inmo Project
    </Toolbar>
  </AppBar>
);

export default NavBar;
