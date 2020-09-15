import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  content: {
    width: '100vw',
    background: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    position: 'fixed',
    bottom: 0,
  },
}));
