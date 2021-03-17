import {
  Container,
  Typography,
  Grid,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    outer: {
      position: 'relative',
      width: '100%',
      height: 'auto',
      backgroundColor: '#75809A',
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
    text: {
      marginTop: '5%',
    },
  })
);
const ModulesIII = () => {
  const classes = useStyles();
  return (
    <div className={classes.outer}>
      <Container maxWidth="md" className={classes.container}>
        <Typography variant="h1" color="secondary" className={classes.title}>
          MÓDULO III - 300h
        </Typography>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={12} className={classes.text}>
            <Typography variant="h5" color="secondary">
              Estágio integrado em contexto empresarial como FrontEnd Developer
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ModulesIII;
