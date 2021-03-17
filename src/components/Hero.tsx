import React from 'react';
import {
  Container,
  makeStyles,
  createStyles,
  Theme,
  Typography,
  Paper,
  Grid,
  Link,
} from '@material-ui/core';
import Image from 'next/image';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    image: {
      height: 'calc(100vh - 65px)',
      width: '100vw',
      overflow: 'hidden',
      zIndex: -1,
    },
    layer: {
      backgroundColor: '#314368',
      opacity: '0.3',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    },
    container: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '20px',
    },
    paper: {
      backgroundColor: '#314368',
      padding: '10px',
      marginTop: '10px',
      textAlign: 'center',
      width: 'fit-content',
      marginLeft: '50%',
      transform: 'translate(-50%)',
    },
    paperLink: {
      cursor: 'pointer',
    },
    center: {
      textAlign: 'center',
    },
    spaceText: {
      marginTop: '40px',
      [theme.breakpoints.down('sm')]: {
        width: '80%',
        marginTop: '10px',
      },
    },

    mail: {
      [theme.breakpoints.down('sm')]: {
        marginTop: '5px',
      },
    },
  })
);
const Hero = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.image}>
        <Image
          src="/images/main-page.svg"
          alt="hero image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className={classes.layer}></div>

      <Container maxWidth="md" className={classes.container}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12} sm={6}>
            <Typography variant="h1" color="secondary">
              FrontEnd Fullstack React Typescript
            </Typography>
            <Typography
              variant="h3"
              color="secondary"
              className={classes.spaceText}
            >
              FORMAÇÃO E ESTÁGIO PROFISSIONAL REMUNERADOS PARA INSCRITOS NO
              CENTRO DE EMPREGO
            </Typography>
            <Typography
              variant="h3"
              color="secondary"
              className={classes.spaceText}
            >
              Curso Intensivo de 450h de formação online + 300h de estágio
              integrado
            </Typography>
            <Typography
              variant="h3"
              color="secondary"
              className={classes.spaceText}
            >
              Formação Prática, Self Paced
            </Typography>
            <Typography
              variant="h3"
              color="secondary"
              className={classes.spaceText}
            >
              Início: 15 de Abril
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.mail}>
            <Typography
              variant="h1"
              color="secondary"
              className={classes.center}
            >
              Inscrições
            </Typography>
            <Paper className={classes.paper}>
              <Link href="mailto:education@jobdeploy.com" underline="none">
                <Typography
                  variant="h4"
                  color="secondary"
                  className={classes.paperLink}
                >
                  education@jobdeploy.com
                </Typography>
              </Link>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Hero;
