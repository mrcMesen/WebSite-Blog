import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  content: {
    width: '100%',
    boxSizing: 'border-box',
    padding: '15px 12px 15px 0',
    display: 'flex',
  },
  contentEvent: {
    backgroundColor: theme.palette.primary.light,
    borderRadius: 10,
    padding: '10px 10px 15px 10px',
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconType: {
    fontSize: 14,
    marginRight: 3,
  },
  iconTypeBg: {
    bottom: 5,
    left: 5,
    position: 'absolute',
    fontSize: 32,
    color: 'rgba(100,100,100,0.2)',
  },
  arrow: {
    marginTop: 5,
    marginLeft: -8,
  },
  arrowEducation: {
    color: theme.palette.primary.main,
  },
  arrowJob: {
    color: 'rgb(179, 0, 0)',
  },
  line: {
    width: '100%',
  },
  jobLine: {
    backgroundColor: 'rgb(179, 0, 0)',
  },
  educationLine: {
    backgroundColor: theme.palette.primary.main,
  },
  contentSubTitle: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      textAlign: 'center',
    },
  },
  title: {
    marginTop: 6,
    textAlign: 'center',
  },
  secondaryText: {
    color: 'rgb(100,100,100)',
    letterSpacing: 1,
    fontSize: 12,
    [theme.breakpoints.down('sm')]: {
      fontSize: 11,
    },
  },
  contentSkills: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  chipEducation: {
    margin: '1.5px',
    background: theme.palette.secondary.dark,
  },
  chipJob: {
    margin: '1.5px',
    background: 'rgba(179, 0, 0, 0.8)',
  },
}));
