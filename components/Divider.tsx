import React from 'react';
import { makeStyles, Theme, createStyles, Grid, Link } from '@material-ui/core';
import Image from 'next/image';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#314368',
      height: '80px',
      textAlign: 'center',
      position: 'relative',
    },
  })
);
const Divider = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        alignContent="flex-start"
        alignItems="flex-start"
        justify="flex-start"
      >
        <Grid item xs={4}>
          <Link href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">
            <Image
              src="/images/js.png"
              alt="javascript"
              width={60}
              height={60}
            />
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link href="https://reactjs.org/">
            <Image
              src="/images/react.png"
              alt="react"
              width={135}
              height={78}
            />
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link href="https://www.typescriptlang.org/">
            <Image
              src="/images/ts.png"
              alt="typescript"
              width={60}
              height={60}
            />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Divider;
