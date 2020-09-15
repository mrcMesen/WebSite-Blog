import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
// import sunglasses from '$assets/images/sunglasses';
import CodeIcon from '@material-ui/icons/Code';

import { useStyles } from './styles';
import { IconButtomBar } from '$components/IconButtomBar';
export const Footer = () => {
  const classes = useStyles();
  return (
    // <footer className={classes.content}>
    <footer className={classes.content}>
      <IconButtomBar />
    </footer>
  );
};
