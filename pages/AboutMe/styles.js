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
  justify: {
    textAlign: 'justify',
  },
  title: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  familyPicture: {
    maxWidth: '100%',
    overflow: 'hidden',
    marginBottom: theme.spacing(2),
  },
  image: {
    maxWidth: '100%',
    objectFit: 'scale-down',
  },
}));
