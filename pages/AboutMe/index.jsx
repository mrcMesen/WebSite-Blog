import React from 'react';
import { Layout } from '$layout';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
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

export default function AboutMe() {
  const classes = useStyles();
  return (
    <Layout>
      <Container maxWidth='lg'>
        <section className={classes.title}>
          <Typography variant='h3' color='primary' className={classes.center}>
            About Me
          </Typography>
          <Typography variant='h6' className={classes.center} paragraph={true} component='h1'>
            Hi there! I'm Marco Mesén, dev from Costa Rica &#x1f1e8;&#x1f1f7;
          </Typography>
        </section>
        <Typography variant='h5' color='primary' className={classes.center}>
          Introduce
        </Typography>
        <Typography variant='body1' className={classes.justify} paragraph={true}>
          I'm 26 years old and I'm married and I have a daughter and a new born son, about my hobbies, I'm a lover of
          music, I play guitar and other instruments, I also like artistic photography.
        </Typography>
        <Typography variant='body1' className={classes.justify} paragraph={true}>
          I started to study my profession at the National University of Costa Rica, I'm finished my studies at the
          fidelitas university, I have been specializing in programming, specifically in new technologies, I love some
          technologies such as reactJs, nodeJs with expressJS, and I know a litle but I also like vanilla javascript,
          and i want to learn python.
        </Typography>
        <Typography variant='body1' className={classes.justify} paragraph={true}>
          I consider myself a person with professional ambition, a desire to succeed, learn and grow, my mentality is to
          always be the best in what I do, contribute to my team with the best version of myself, I know the importance
          of a good work environment, communication and good leadership to achieve results, my greatest motivation is my
          family, who pushes me to be and give my best in every day of my life.
        </Typography>
        <section className={classes.familyPicture}>
          <img className={classes.image} src='/assets/images/family.JPG' alt='Family' />
        </section>
        {/* <Typography variant='h5' color='primary' className={classes.center}>
          Hobbies
        </Typography> */}
      </Container>
    </Layout>
  );
}
