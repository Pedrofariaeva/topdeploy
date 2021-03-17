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
import { modulesI, modulesI2 } from '../fixtures/modules';
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

const Modules = () => {
  const classes = useStyles();

  const renderModulesFirst = modulesI.map((module: ModulesProps) => {
    return (
      <div
        key={module.title}
        className={module.float === 'right' ? classes.right : classes.left}
      >
        <Typography variant="h5" color="primary">
          {module.title}
        </Typography>
        <Typography variant="h5" color="primary" className={classes.objectives}>
          Objetivos:
        </Typography>
        <ul className={classes.colorGrey}>
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

  const renderModulesSecond = modulesI2.map((module: ModulesProps) => {
    return (
      <div
        key={module.title}
        className={module.float === 'right' ? classes.right : classes.left}
      >
        <Typography variant="h5" color="primary">
          {module.title}
        </Typography>
        <Typography variant="h5" color="primary" className={classes.objectives}>
          Objetivos:
        </Typography>
        <ul className={classes.colorGrey}>
          <li className={classes.itemList}>
            <Typography variant="body1">{module.objectivo1}</Typography>
          </li>
          <li className={classes.itemList}>
            <Typography variant="body1">{module.objectivo2}</Typography>
          </li>
        </ul>
      </div>
    );
  });

  return (
    <div id="modules">
      <div className={classes.outer}>
        <Image
          src="/images/background-1.svg"
          alt="background-1"
          layout="fill"
          objectFit="cover"
          quality={100}
          className={classes.image}
        />

        <Container maxWidth="md" className={classes.container}>
          <Typography variant="h1" color="primary" className={classes.title}>
            MÓDULO I - 150h
          </Typography>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Grid item xs={12}>
              {renderModulesFirst}
            </Grid>
          </Grid>
        </Container>
      </div>

      <div className={classes.outer}>
        <Image
          src="/images/background-2.svg"
          alt="background-2"
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
              {renderModulesSecond}
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Modules;
