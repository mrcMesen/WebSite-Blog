import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#145674',
      light: '#EEF2F5',
    },
    secondary: {
      main: '#2e86c1',
      light: '#d6eaf8',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
});

theme.typography.h3 = {
  fontSize: '2rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
  },
};
theme.typography.h6 = {
  fontSize: '1rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '1.25rem',
  },
};

export default theme;
