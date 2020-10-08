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
        <title>Marco Mesén - Software Engineer</title>
        <meta name="description" content="Hi there! My Name is Marco Mesén Software Engineer from CR &#x1f1e8;&#x1f1f7;"/>
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
