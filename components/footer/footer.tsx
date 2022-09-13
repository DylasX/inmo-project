import React, { FunctionComponent } from 'react';
import { Box, Paper, Typography } from '@mui/material';

const Footer: FunctionComponent = () => (
  <>
    <Paper
      variant='outlined'
      elevation={3}
      sx={{ height: '50px', textAlign: 'center', marginTop: '10%' }}
      square
    >
      <Box>
        <Typography sx={{ marginTop: '10px' }}>Made with ❤️ Dylas</Typography>
      </Box>
    </Paper>
  </>
);

export default Footer;
