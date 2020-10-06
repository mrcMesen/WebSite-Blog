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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    marginTop: 5,
    marginLeft: -8,
  },
  line: {
    width: '100%',
    height: 1.5,
  },
  jobLine: {
    backgroundColor: 'rgb(179, 0, 0)',
  },
  contentSubTitle: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  educationLine: {
    backgroundColor: theme.palette.primary.main,
  },
  title: {
    marginTop: 6,
    textAlign: 'center',
  },
  secondaryText: {
    color: 'rgb(100,100,100)',
    letterSpacing: 1,
    fontSize: 12,
  },
  contentSkills: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  chipEducation: {
    margin: '1.5px',
    background: theme.palette.secondary.main,
  },
  chipJob: {
    margin: '1.5px',
    background: 'rgb(179, 0, 0)',
  },
}));
