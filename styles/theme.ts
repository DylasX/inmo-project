import { createTheme } from '@mui/material/styles';
import { common } from '@mui/material/colors';
// import AsapCondesedBold from '../assets/Fonts/AsapCondensed-Bold.ttf';
// import AsapCondesedBoldItalic from '../assets/Fonts/AsapCondensed-BoldItalic.ttf';
// import AsapCondesedBoldRegular from '../assets/Fonts/AsapCondensed-Regular.ttf';

const theme = createTheme({
  palette: {
    primary: {
      main: common['white'],
    },
  },
  typography: {
    fontFamily: ['Raleway', 'sans-serif'].join(','),
  },
});

export default theme;
