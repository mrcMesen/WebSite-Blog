import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  content: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  wrapperWriter: {
    display: 'flex',
    justifyContent: 'center',
  },
  pointer: {
    height: 30,
    marginLeft: 2,
    borderRightWidth: 2,
    borderRightColor: theme.palette.secondary.main,
    borderRight: 'solid',
  },
  writing: {
    animation: `$doWrite 0.8s infinite ${theme.transitions.easing.easeOut}`,
  },
  noWriting: {
    opacity: 0,
  },
  '@keyframes doWrite': {
    '0%': {
      opacity: 0,
    },
    '60%': {
      opacity: 1,
    },
    '100%': {
      opacity: 0,
    },
  },
}));
