import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import { Footer } from '$layout/Footer';
import { SocialMedia } from '$components/SocialMedia';

const useStyles = makeStyles(theme => ({
  safeArea: {
    marginBottom: 150,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  containerAPP: {
    minheight: '95vh',
    width: '100%',
    margin: 0,
    padding: 0,
    position: 'relative',
  },
  bgImage: {
    overflow: 'hidden',
    position: 'absolute',
    height: 300,
    zIndex: -1,
    [theme.breakpoints.down('md')]: {
      height: 200,
    },
    [theme.breakpoints.down('sm')]: {
      height: 150,
    },
  },
  bgLeft: {
    top: -70,
    left: -60,
    transform: 'rotate(270deg)',
    [theme.breakpoints.down('sm')]: {
      top: -40,
      left: -60,
    },
  },
  bgRigth: {
    top: -100,
    right: 0,
    [theme.breakpoints.down('sm')]: {
      top: -65,
    },
  },
}));

export const Layout = ({ loading = false, children }) => {
  const classes = useStyles();
  return (
    <div className={classes.containerAPP}>
      <img src='/assets/bg.svg' alt='Background' className={clsx(classes.bgImage, classes.bgLeft)} />
      <img src='/assets/bg.svg' alt='Background' className={clsx(classes.bgImage, classes.bgRigth)} />
      <SocialMedia />
      <div className={classes.safeArea}>{children}</div>
      <Footer />
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color='primary' />
      </Backdrop>
    </div>
  );
};
