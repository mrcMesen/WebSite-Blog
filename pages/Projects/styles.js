import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // [theme.breakpoints.down('xs')]: {
    //   paddingTop: 50,
    // },
  },
  center: {
    textAlign: 'center',
    // marginBottom: theme.spacing(2),
  },
  title: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  projects: {
    width: '100%',
    height: '100%',
  },
}));
