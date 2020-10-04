import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  center: {
    textAlign: 'center',
  },
  justify: {
    textAlign: 'justify',
  },
  techUsed: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      overflowX: 'scroll',
    },
  },
  iconTech: {
    margin: 8,
    height: 90,
    [theme.breakpoints.down('sm')]: {
      height: 40,
    },
  },
}));
