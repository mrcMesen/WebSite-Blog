import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  content: {
    //
  },
  activeImage: {
    margin: 'auto',
    display: 'block',
    border: 'solid 0.5px rgba(200,200,200,0.5)',
    width: '70vw',
    [theme.breakpoints.down('md')]: {
      width: '90vw',
    },
  },
  wrapperSmallImages: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  smallImage: {
    border: 'solid 0.5px rgba(200,200,200,0.5)',
    margin: '5px 3px',
    height: 80,
    width: 100,
    cursor: 'pointer',
    [theme.breakpoints.down('md')]: {
      height: 55,
      width: 55,
    },
    '&:hover': {
      animation: `$scaleImage 0.3s ${theme.transitions.easing.easeOut}`,
      animationFillMode: 'forwards',
    },
  },
  '@keyframes scaleImage': {
    '0%': {
      transform: 'scale(1)',
    },
    '100%': {
      transform: 'scale(1.5)',
    },
  },
}));
