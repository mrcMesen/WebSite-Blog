import React from 'react';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';

import { Hero } from '$components/Hero';
import { WrapperWriting } from '$components/WrapperWriting';
import { Layout } from '$layout';

const useStyles = makeStyles(theme => ({
  content: {
    height: '72vh',
    display: 'flex',
    paddingTop: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      paddingTop: 10,
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Marco Mesén Developer</title>
      </Head>
      <Layout>
        <section className={classes.content}>
          <Hero />
          <WrapperWriting />
        </section>
      </Layout>
    </>
  );
}
