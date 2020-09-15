import React from 'react';
import { Layout } from '$layout';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // [theme.breakpoints.down('xs')]: {
    //   paddingTop: 50,
    // },
  },
}));

export default function AboutMe() {
  const classes = useStyles();
  return (
    <Layout>
      <div>
        About Me
        {/*
         */}
      </div>
    </Layout>
  );
}