import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
    marginBottom: 5,
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      height: 100,
      // marginBottom: 24,
    },
  },
  contentInfo: {
    backgroundColor: 'white',
  },
  textInfo: {
    textAlign: 'center',
    color: theme.palette.primary.main,
  },
  wrapperIcons: {
    display: 'flex',
    justifyContent: 'center',
  },
  icon: {
    margin: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(0),
    },
  },
}));
