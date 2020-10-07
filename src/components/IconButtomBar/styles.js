import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: 100,
    [theme.breakpoints.down('xs')]: {
      height: 65,
    },
  },
  wrapperIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    boxSizing: 'border-box',
    maxWidth: 225,
    paddingTop: 8,
    paddingBottom: 8,
    padding: 20,
    borderRadius: 25,
    background: 'rgba(200,200,200,0.3)',
    [theme.breakpoints.down('sm')]: {
      marginbottom: 4,
      padding: 5,
    },
  },
  icon: {
    transition: '0.2s ease-in-out',
    margin: '0 2px',
    '&:hover': {
      transform: 'scale(1.5) translateY(-8px)',
      marginLeft: 10,
      marginRight: 10,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 28,
    },
  },
  activePath: {
    transform: 'scale(1.5) translateY(-8px)',
    scale: 1.5,
    translateY: -8,
    marginLeft: 10,
    marginRight: 10,
  },
  buttomName: {
    letterSpacing: 1.5,
    [theme.breakpoints.down('sm')]: {
      // display: 'none',
    },
  },
}));
