import {
  Typography,
  TextField,
  Button,
  Container,
  Box,
  Grid,
  InputAdornment,
  Divider,
} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import type { NextPage } from 'next';
import Head from 'next/head';
import theme from '../styles/theme';
import { WrapperHeroText, WrapperImageHero } from './index.styles';
import Building from '../assets/images/home/buildings.svg';
import HouseList from '../components/houseList/houseList';
import Search from '@mui/icons-material/Search';
import Logo from '../assets/images/logo.svg';
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Inmo project</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <WrapperImageHero>
        <Building
          style={{
            width: '150px',
            height: 'auto',
            position: 'absolute',
            bottom: '-1',
            fill: '#fff',
            zIndex: 1,
            right: 0,
            transform: 'scaleX(-1)',
          }}
        />
        <WrapperHeroText>
          <Typography component={'h1'} sx={{ fontSize: '1.8rem' }}>
            Busca tu inmueble
          </Typography>
          <Grid2
            container
            sx={{
              width: '100%',
              justifyContent: 'center',
              marginTop: '25px',
            }}
          >
            <Grid2
              xs={10}
              md={6}
              xl={6}
              lg={6}
              sx={{
                textAlign: 'center',
                margin: '10px',
              }}
            >
              <TextField
                fullWidth
                sx={{
                  backgroundColor: '#fff',
                  color: '#000',
                  borderRadius: '5px',
                }}
                placeholder='Escribe el codigo, municipio o barrio'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='start'>
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid2>
          </Grid2>
        </WrapperHeroText>
      </WrapperImageHero>
      <Container>
        <Grid2 container spacing={2}>
          <Grid2 xs={12} sm={12} md={12} lg={12} xl={12}>
            <Box
              sx={{
                textAlign: 'center',
                marginTop: theme.spacing(3),
                marginBottom: theme.spacing(3),
              }}
            >
              <Typography
                component={'h2'}
                sx={{
                  fontWeight: '400',
                  fontSize: '1.5rem',
                }}
              >
                <Box>
                  <Logo
                    style={{
                      fill: '#000',
                      width: '50px',
                    }}
                  />
                  <Typography>Inmo Project</Typography>
                </Box>
                Nuestros Inmuebles
              </Typography>
              <Divider />
            </Box>
          </Grid2>
        </Grid2>
        <Grid2 container spacing={2}>
          {[...Array(10)].map((element, index) => (
            <Grid2 key={index} xs={12} sm={6} md={4} lg={4} xl={4}>
              <HouseList></HouseList>
            </Grid2>
          ))}
        </Grid2>
        <Grid2 container spacing={2}>
          <Grid2 xs={12}>
            <Box
              sx={{
                textAlign: 'center',
                marginTop: theme.spacing(3),
                marginBottom: theme.spacing(3),
              }}
            >
              <Typography
                component={'h2'}
                sx={{
                  fontWeight: '400',
                  fontSize: '1.5rem',
                }}
              >
                Nosotros
              </Typography>
              <Divider />
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
};

export default Home;
