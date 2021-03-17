import React from 'react';
import Head from 'next/head';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import { makeStyles } from '@material-ui/core';
import Divider from '../src/components/Divider';
import Technologies from '../src/components/Technologies';
import Modules from '../src/components/Modules';
import ModulesII from '../src/components/ModulesII';
import ModulesIII from '../src/components/ModulesIII';
import ContactForm from '../src/components/ContactForm';
import Footer from '../src/components/Footer';

const useStyles = makeStyles({
  main: {
    height: '100vh',
    width: '100%',
    backgroundColor: '#F7F7F7',
  },
  technologies: {
    minHeight: '100%',
    width: '100%',
    marginTop: '20px',
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
      <ModulesII />
      <ModulesIII />
      <ContactForm />
      <Footer />
    </div>
  );
}
