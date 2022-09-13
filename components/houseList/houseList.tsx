import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React, { FunctionComponent } from 'react';
import theme from '../../styles/theme';

const HouseList: FunctionComponent = () => (
  <Card sx={{ maxWidth: 345, margin: '10px' }}>
    <CardMedia
      component='img'
      alt='green iguana'
      height='140'
      image='https://via.placeholder.com/150'
    />
    <CardContent>
      <Typography gutterBottom variant='h5' component='div'>
        Casa
      </Typography>
      <Typography variant='body2' color='text.secondary'>
        Excelente Casa
      </Typography>
    </CardContent>
    <CardActions sx={{ flexDirection: 'row-reverse' }}>
      <Button
        size='small'
        color='secondary'
        variant='outlined'
        sx={{ marginLeft: theme.spacing(1) }}
      >
        Ver mas
      </Button>
      <Button size='small' color='secondary' variant='outlined'>
        Me gusta
      </Button>
    </CardActions>
  </Card>
);

export default HouseList;
