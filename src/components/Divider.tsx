import React from 'react';
import { makeStyles, Theme, createStyles, Grid, Link } from '@material-ui/core';
import Image from 'next/image';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#314368',
      height: '80px',
      width: '100%',
      textAlign: 'center',
      position: 'relative',
    },
    logo: {
      padding: '10px',
      height: '80px',
    },
  })
);
const Divider = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        justify="center"
        alignItems="center"
        alignContent="center"
        className={classes.logo}
      >
        <Grid item xs={4}>
          <Link
            href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
            target="_blank"
            rel="noopener"
          >
            <Image
              src="/images/dividerLogos/js.png"
              alt="javascript"
              width={50}
              height={50}
            />
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link href="https://reactjs.org/" target="_blank" rel="noopener">
            <Image
              src="/images/dividerLogos/react.png"
              alt="react"
              width={135}
              height={43}
            />
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener"
          >
            <Image
              src="/images/dividerLogos/ts.png"
              alt="typescript"
              width={50}
              height={50}
            />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Divider;
