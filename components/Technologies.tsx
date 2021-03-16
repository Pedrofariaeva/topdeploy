import React from 'react';
import { technologies, organizations } from '../fixtures/technologies';
import {
  Container,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: '#F7F7F7',
      marginLeft: '50%',
      transform: 'translate(-50%)',
      padding: '20px',
      textAlign: 'center',
    },
    spaceTop: {
      marginTop: '100px',
    },
    lista: {
      textAlign: 'left',
      marginTop: '50px',
    },
    info: {
      marginTop: '150px',
      marginLeft: '50%',
      transform: 'translate(-50%)',
      width: '70%',
      [theme.breakpoints.down('sm')]: {
        width: '80%',
      },
    },
    info2: {
      marginTop: '40px',
      marginLeft: '50%',
      transform: 'translate(-50%)',
      width: '70%',
      [theme.breakpoints.down('sm')]: {
        width: '80%',
      },
    },
  })
);

const Technologies = () => {
  const classes = useStyles();
  const renderTecnologies = technologies.map((tech) => {
    return (
      <li key={tech}>
        <Typography>{tech}</Typography>
      </li>
    );
  });

  const renderOrganizations = organizations.map((tech) => {
    return (
      <li key={tech}>
        <Typography>{tech}</Typography>
      </li>
    );
  });
  return (
    <Container maxWidth="lg" className={classes.container} id="technologies">
      <Grid container direction="row" justify="center" alignItems="flex-start">
        <Grid item xs={12} sm={12} md={6} className={classes.spaceTop}>
          <Typography variant="h1" color="primary">
            TECNOLOGIAS ABORDADAS
          </Typography>

          <ul className={classes.lista}>{renderTecnologies}</ul>
        </Grid>

        <Grid item xs={12} sm={12} md={6} className={classes.spaceTop}>
          <Typography variant="h1" color="primary">
            ORGANIZAÇÃO
          </Typography>
          <ul className={classes.lista}>{renderOrganizations}</ul>
        </Grid>
      </Grid>
      <Typography className={classes.info} color="primary">
        Curso Completo para iniciados sem qualquer formação WebDesign, com o
        apoio da Udemy e IEFP com direito a bolsa mensal
      </Typography>
      <Typography className={classes.info2} color="primary">
        Método inovador de formação prática num modelo de self-paced com
        orientação de formador a tempo inteiro em Inglês
      </Typography>
    </Container>
  );
};

export default Technologies;
