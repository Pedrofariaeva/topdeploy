import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { makeStyles } from '@material-ui/core';
import Divider from '../components/Divider';
import Technologies from '../components/Technologies';
import Modules from '../components/Modules';
import Footer from '../components/Footer';
const useStyles = makeStyles({
  main: {
    height: 'calc(100% - 64px)',
    width: '100%',
    backgroundColor: '#F7F7F7',
  },
  technologies: {
    minHeight: '100%',
    width: '100%',
    backgroundColor: '#F7F7F7',
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>TOP Deploy Academy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes.main}>
        <Navbar />
        <Hero />
        <Divider />
      </div>
      <div className={classes.technologies}>
        <Technologies />
      </div>
      <Modules />
      <Footer />
    </div>
  );
}
