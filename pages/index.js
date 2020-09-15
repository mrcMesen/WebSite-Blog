import React from 'react';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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
      paddingTop: 50,
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Marco Mesén - WebSite</title>
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
