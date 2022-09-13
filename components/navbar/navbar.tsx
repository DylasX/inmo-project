import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import React, { FunctionComponent } from 'react';
import theme from '../../styles/theme';
import Logo from '../../assets/images/logo.svg';
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Button,
  Drawer,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountIcon from '@mui/icons-material/AccountCircle';

const navItems = ['Arrendar', 'Comprar/Vender', 'Nosotros'];

const NavBar: FunctionComponent = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    typeof window !== undefined ? () => window.document.body : undefined;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        <Logo
          style={{
            fill: '#fff',
            width: '50px',
            marginRight: '5px',
          }}
        />
        <Typography>Inmo Project</Typography>
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary={'Inicia/Registrate'} />
          </ListItemButton>
        </ListItem>
        <Divider />
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        sx={{
          backgroundColor: '#313131',
          color: theme.palette.primary.light,
          boxShadow: 'unset',
        }}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: { xs: 'none', sm: 'block' },
              marginTop: '10px',
              flexGrow: 1,
            }}
          >
            <Logo
              style={{
                fill: '#fff',
                width: '50px',
                marginRight: '5px',
                marginLeft: '20px',
              }}
            />
            <Typography>Inmo Project</Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: {
                xs: 'flex',
                sm: 'block',
              },
              flexDirection: { xs: 'row-reverse', md: 'unset' },
              flex: { xs: '1', sm: 1, md: 'unset' },
            }}
          >
            <AccountIcon sx={{ width: '40px', height: 'auto' }} />
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          PaperProps={{
            style: {
              background: '#313131',
              color: '#fff',
            },
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 240,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default NavBar;
