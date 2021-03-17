import React from 'react';
import {
  Container,
  makeStyles,
  createStyles,
  Theme,
  Typography,
  Grid,
} from '@material-ui/core';
import Image from 'next/image';
import { modulesII, modulesII2 } from '../fixtures/modules';
import { ModulesProps } from '../interfaces/index';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      position: 'absolute',
      width: '100%',
      height: 'fit-content',
    },
    outer: {
      position: 'relative',
      width: '100%',
      height: 'auto',
      marginTop: '-10px',
    },
    container: {
      position: 'relative',
      height: 'fit-content',
      padding: '50px',

      [theme.breakpoints.down('sm')]: {
        padding: '30px',
      },
    },
    title: {
      marginTop: theme.spacing(6),
    },
    left: {
      marginTop: '10%',
      width: '50%',
      [theme.breakpoints.down('sm')]: {
        width: '90%',
      },
    },
    right: {
      marginTop: '15%',
      marginLeft: '50%',
      width: '50%',
      [theme.breakpoints.down('sm')]: {
        marginLeft: '0%',
        width: '90%',
      },
    },
    itemList: {
      marginTop: '10px',
      padding: '5px',
    },
    objectives: {
      marginTop: '20px',
    },
    colorWhite: {
      color: 'white',
    },
    colorGrey: {
      color: '#4D4D4D',
    },
  })
);

const ModulesII = () => {
  const classes = useStyles();

  const renderModulesIIFirst = modulesII.map((module: ModulesProps) => {
    return (
      <div
        key={module.title}
        className={module.float === 'right' ? classes.right : classes.left}
      >
        <Typography variant="h5" color="secondary">
          {module.title}
        </Typography>
        <Typography
          variant="h5"
          color="secondary"
          className={classes.objectives}
        >
          Objetivos:
        </Typography>
        <ul className={classes.colorWhite}>
          <li className={classes.itemList}>
            <Typography variant="body1">{module.objectivo1}</Typography>
          </li>
          <li className={classes.itemList}>
            <Typography variant="body1">{module.objectivo2}</Typography>
          </li>
          {module.objectivo3 ? (
            <li className={classes.itemList}>
              <Typography variant="body1">{module.objectivo3}</Typography>
            </li>
          ) : null}
        </ul>
      </div>
    );
  });

  const renderModulesIISecond = modulesII2.map((module: ModulesProps) => {
    return (
      <div
        key={module.title}
        className={module.float === 'right' ? classes.right : classes.left}
      >
        <Typography variant="h5" color="secondary">
          {module.title}
        </Typography>
        <Typography
          variant="h5"
          color="secondary"
          className={classes.objectives}
        >
          Objetivos:
        </Typography>
        <ul className={classes.colorWhite}>
          <li className={classes.itemList}>
            <Typography variant="body1">{module.objectivo1}</Typography>
          </li>
          <li className={classes.itemList}>
            <Typography variant="body1">{module.objectivo2}</Typography>
          </li>
          {module.objectivo3 ? (
            <li className={classes.itemList}>
              <Typography variant="body1">{module.objectivo3}</Typography>
            </li>
          ) : null}
        </ul>
      </div>
    );
  });
  return (
    <>
      <div className={classes.outer}>
        <Image
          src="/images/background-3.svg"
          alt="background-3"
          layout="fill"
          objectFit="cover"
          quality={100}
          className={classes.image}
        />

        <Container maxWidth="md" className={classes.container}>
          <Typography variant="h1" color="secondary" className={classes.title}>
            MÓDULO II - 200h
          </Typography>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item xs={12}>
              {renderModulesIIFirst}
            </Grid>
          </Grid>
        </Container>
      </div>

      <div className={classes.outer}>
        <Image
          src="/images/background-4.svg"
          alt="background-4"
          layout="fill"
          objectFit="cover"
          quality={100}
          className={classes.image}
        />

        <Container maxWidth="md" className={classes.container}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item xs={12}>
              {renderModulesIISecond}
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default ModulesII;
