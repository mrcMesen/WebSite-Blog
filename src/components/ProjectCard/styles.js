import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  content: {
    marginBottom: 10,
    position: 'relative',
    display: 'inline-block',
    overflow: 'hidden',
    borderRadius: 20,
    height: 300,
    width: '100%',
    color: theme.palette.primary.dark,
    // color: theme.palette.secondary.light,
    boxShadow: '0px 0px 8px 0px rgba(100,100,100,0.2)',
    '&:hover': {
      // color: theme.palette.secondary.light,
      '& > img': {
        animation: `$wBlur 0.5s`,
        animationFillMode: 'forwards',
        animationDuration: theme.transitions.easing.easeInOut,
      },
      '& section': {
        // backgroundColor: 'rgba(255,255,255,0.6)',
      },
    },
  },
  projectInfo: {
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 300,
    transform: ' translate(-50%, -50%)',
    borderRadius: 10,
    padding: 24,
    // paddingLeft: 10,
    // paddingRight: 10,
    backgroundColor: 'rgba(200,200,200,0.8)',
  },
  imagebg: {
    overflow: 'hidden',
    position: 'absolute',
    width: '100%',
    height: 300,
    objectFit: 'cover',
    animation: `$woBlur 0.5s`,
    animationFillMode: 'forwards',
  },
  '@keyframes woBlur': {
    '0%': {
      filter: 'blur(4px) contrast(50%)',
    },
    '100%': {
      filter: 'blur(1px) contrast(80%)',
    },
  },
  '@keyframes wBlur': {
    '0%': {
      filter: 'blur(1px) contrast(80%)',
    },
    '100%': {
      filter: 'blur(4px) contrast(50%)',
    },
  },
  center: {
    textAlign: 'center',
  },
  wrapperIcons: {
    display: 'flex',
    justifyContent: 'center',
  },
  techIcon: {
    margin: 4,
    height: 32,
    // maxWidth: 42,
  },
}));
