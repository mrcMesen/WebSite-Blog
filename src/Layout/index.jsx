import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Footer } from '$layout/Footer';
import { SocialMedia } from '$components/SocialMedia';

const useStyles = makeStyles(theme => ({
  safeArea: {
    marginBottom: 150,
  },
}));

export const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <SocialMedia />
      <div className={classes.safeArea}>{children}</div>
      <Footer />
    </>
  );
};
