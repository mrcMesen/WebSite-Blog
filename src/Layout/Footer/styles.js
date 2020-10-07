import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  content: {
    width: '100vw',
    // backgroundColor: 'rgba(198, 82, 45, 0.5)',
    backgroundImage: 'url(/assets/bgFooter.svg)',
    backgroundPosition: 'bottom',
    backgroundSize: 320,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    position: 'fixed',
    bottom: 0,
    [theme.breakpoints.down('sm')]: {
      backgroundSize: 200,
    },
  },
}));
