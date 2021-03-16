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
import {
  modulesI,
  modulesI2,
  modulesII,
  modulesII2,
} from '../fixtures/modules';
import { modulesProps } from '../interfaces/index';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      position: 'absolute',
      height: 'calc(100vh - 50px)',
      width: '100vw',
      overflow: 'hidden',
      zIndex: -1,
    },
    imageBottom: {
      position: 'absolute',
      height: 'calc(100vh + 100px)',
      width: '100vw',
      overflow: 'hidden',
      zIndex: -1,
    },
    container: {
      position: 'relative',
      top: '80px',
      height: 'calc(100vh - 100px)',
      [theme.breakpoints.down('sm')]: {
        top: '80px',
      },
    },
    moduloIII: {
      position: 'relative',
      top: '50px',
      height: '100px',
    },

    left: {
      marginTop: '30px',
      width: '50%',
      [theme.breakpoints.down('sm')]: {
        width: '90%',
      },
    },
    right: {
      marginTop: '100px',
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

  const renderModulesFirst = modulesI.map((module: modulesProps) => {
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
          <li className={classes.itemList}>{module.objectivo1}</li>
          <li className={classes.itemList}>{module.objectivo2}</li>
          {module.objectivo3 ? (
            <li className={classes.itemList}>{module.objectivo3}</li>
          ) : null}
        </ul>
      </div>
    );
  });

  const renderModulesSecond = modulesI2.map((module: modulesProps) => {
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
          <li className={classes.itemList}>{module.objectivo1}</li>
          <li className={classes.itemList}>{module.objectivo2}</li>
        </ul>
      </div>
    );
  });

  const renderModulesIIFirst = modulesII.map((module: modulesProps) => {
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
          <li className={classes.itemList}>{module.objectivo1}</li>
          <li className={classes.itemList}>{module.objectivo2}</li>
        </ul>
      </div>
    );
  });

  const renderModulesIISecond = modulesII2.map((module: modulesProps) => {
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
          <li className={classes.itemList}>{module.objectivo1}</li>
          <li className={classes.itemList}>{module.objectivo2}</li>
          {module.objectivo3 ? (
            <li className={classes.itemList}>{module.objectivo3}</li>
          ) : null}
        </ul>
      </div>
    );
  });
  return (
    <div id="modules">
      <div className={classes.image}>
        <Image
          src="/images/background-1.svg"
          alt="background-1"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h1" color="primary">
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
      <div className={classes.image}>
        <Image
          src="/images/background-2.svg"
          alt="background-2"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
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

      <div className={classes.image}>
        <Image
          src="/images/background-3.svg"
          alt="background-3"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h1" color="secondary">
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
      <div className={classes.imageBottom}>
        <Image
          src="/images/background-4.svg"
          alt="background-4"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
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
        <div className={classes.moduloIII}>
          <Typography variant="h1" color="secondary">
            MÓDULO III - 300h
          </Typography>
          <Typography
            variant="h5"
            color="secondary"
            className={classes.objectives}
          >
            Estágio integrado em contexto empresarial como FrontEnd Developer
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default Modules;
