import React from 'react';
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
}));

export const Layout = ({ loading = false, children }) => {
  const classes = useStyles();
  return (
    <>
      <SocialMedia />
      <div className={classes.safeArea}>{children}</div>
      <Footer />
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color='primary' />
      </Backdrop>
    </>
  );
};
