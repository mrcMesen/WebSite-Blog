import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  content: {
    minHeight: 300,
  },
  text: {
    textAlign: 'center',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    fontSize: 18,
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
    },
  },
  frontEnd: {
    fontSize: 20,
    marginTop: theme.spacing(1),
    letterSpacing: theme.spacing(0.5),
    fontFamily: ['"Dancing Script"', 'cursive'].join(','),
  },
  backEnd: {
    marginTop: theme.spacing(2.5),
    fontSize: 18,
    letterSpacing: theme.spacing(0.4),
    fontFamily: ['Orbitron', 'sans-serif'].join(','),
    // fontFamily: ['"Long Cang"', 'cursive'].join(','),
  },
  mobile: {
    fontSize: 22,
    marginTop: theme.spacing(2),
    letterSpacing: theme.spacing(0.5),
    fontFamily: ['Quicksand', 'sans-serif'].join(','),
  },
}));
