import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  contentTitle: {
    position: 'relative',
    height: 200,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      height: 100,
    },
  },
  contentSubTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  backgroundFont: {
    position: 'absolute',
    textAlign: 'center',
    letterSpacing: theme.spacing(3),
    fontWeight: '900',
    fontSize: 180,
    color: theme.palette.primary.light,
    [theme.breakpoints.down('md')]: {
      fontSize: 150,
      letterSpacing: theme.spacing(2),
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 100,
      letterSpacing: theme.spacing(1),
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 70,
      letterSpacing: theme.spacing(0.5),
    },
  },
  fontName: {
    position: 'absolute',
    textAlign: 'center',
    fontWeight: '100',
    fontSize: 40,
    letterSpacing: theme.spacing(2),
    color: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      fontSize: 25,
    },
    [theme.breakpoints.down('xs')]: {
      letterSpacing: theme.spacing(0.5),
      fontSize: 20,
    },
  },
  sunglasses: {
    height: 50,
    width: 100,
    opacity: 0.2,
  },
  developer: {
    fontSize: 18,
    marginBottom: theme.spacing(2),
    letterSpacing: theme.spacing(1),
    color: theme.palette.secondary.main,
    [theme.breakpoints.down('xs')]: {
      letterSpacing: theme.spacing(0.5),
      fontSize: 14,
    },
  },
  skills: {
    fontSize: 16,
    marginBottom: theme.spacing(2),
    letterSpacing: theme.spacing(0.7),
    color: theme.palette.secondary.main,
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
    },
  },
}));
