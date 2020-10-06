import React from 'react';
import { Layout } from '$layout';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import BuildIcon from '@material-ui/icons/Build';

const useStyles = makeStyles(theme => ({
  content: {
    height: '50vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    fontSize: 18,
  },
  buildIcon: {
    marginTop: theme.spacing(2),
    animation: `$animate 2s infinite ${theme.transitions.easing.easeInOut}`,
    animationDelay: '0.5s, 0.5s',
    fontSize: 64,
  },
  '@keyframes animate': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '5%': {
      transform: 'rotate(-6deg)',
    },
    '10%': {
      transform: 'rotate(4deg)',
    },
    '15%': {
      transform: 'rotate(-4deg)',
    },
    '20%': {
      transform: 'rotate(6deg)',
    },
    '25%': {
      transform: 'rotate(0deg)',
    },
  },
}));

export default function Blog() {
  const classes = useStyles();
  return (
    <Layout>
      <Container maxWidth='lg' className={classes.content}>
        <Typography variant='caption' className={classes.title}>
          Coming Soon 😄
        </Typography>
        <BuildIcon color='primary' className={classes.buildIcon} />
      </Container>
    </Layout>
  );
}
