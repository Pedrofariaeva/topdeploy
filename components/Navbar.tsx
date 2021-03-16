import React from 'react';
import {
  makeStyles,
  Theme,
  createStyles,
  AppBar,
  Link,
  Toolbar,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      [theme.breakpoints.down('xs')]: {
        fontSize: '15px',
      },
    },
    links: {
      marginRight: '50px',
      [theme.breakpoints.down('xs')]: {
        marginRight: '25px',
        fontSize: '15px',
      },
    },
    toolBar: {
      backgroundColor: '#E6E6E6',
    },
    modulos: {
      [theme.breakpoints.down('xs')]: {
        fontSize: '15px',
      },
    },
  })
);

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.toolBar}>
          <Link
            variant="h2"
            className={classes.title}
            color="primary"
            underline="none"
            href="/"
          >
            TOP DEPLOY ACADEMY
          </Link>
          <Link
            variant="h2"
            className={classes.links}
            color="primary"
            underline="none"
            href="#technologies"
          >
            TECNOLOGIAS
          </Link>
          <Link
            variant="h2"
            color="primary"
            underline="none"
            className={classes.modulos}
            href="#modules"
          >
            MÓDULOS
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
