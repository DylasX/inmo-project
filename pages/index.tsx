import {
  Typography,
  TextField,
  Button,
  Container,
  Box,
  Grid,
} from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import type { NextPage } from 'next';
import Head from 'next/head';
import theme from '../styles/theme';
import { WrapperHeroText, WrapperImageHero } from './index.styles';
import Building from '../assets/images/home/buildings.svg';
import HouseList from '../components/houseList/houseList';

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
          <Typography
            component={'h1'}
            sx={{
              color: theme.palette.primary.main,
              textTransform: 'uppercase',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '1.5rem',
            }}
          >
            Inmo Project
          </Typography>
          <Typography component={'h2'}>Busca tu inmueble</Typography>
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
              md={2}
              xl={2}
              lg={2}
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
                placeholder='Escribe el codigo'
              />
            </Grid2>
            <Grid2
              xs={10}
              md={2}
              xl={2}
              lg={2}
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
                placeholder='Escribe el municipio'
              />
            </Grid2>
          </Grid2>
          <Grid2
            container
            sx={{
              width: '100%',
              justifyContent: 'center',
              marginTop: '25px',
            }}
          >
            <Button variant='outlined' size='large'>
              Buscar
            </Button>
          </Grid2>
        </WrapperHeroText>
      </WrapperImageHero>
      <Container>
        <Grid2 container spacing={2}>
          <Grid2 xs={12} sm={12} md={12} lg={12} xl={12}>
            <Box
              sx={{
                textAlign: 'center',
                marginTop: '5%',
                marginBottom: '5%',
              }}
            >
              <Typography
                component={'h2'}
                sx={{
                  fontWeight: 'bold',
                  fontSize: '1.3rem',
                }}
              >
                Nuestros Inmuebles
              </Typography>
              <hr />
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
      </Container>
    </div>
  );
};

export default Home;
