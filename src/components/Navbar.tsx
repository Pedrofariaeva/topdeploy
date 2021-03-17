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
      '&:hover': {
        cursor: 'pointer',
        color: '#225890',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '12px',
      },
    },
    links: {
      marginRight: '50px',
      '&:hover': {
        cursor: 'pointer',
        color: '#225890',
      },
      [theme.breakpoints.down('xs')]: {
        marginRight: '15px',
        fontSize: '8px',
      },
    },
    toolBar: {
      backgroundColor: '#E6E6E6',
    },
    insc: {
      [theme.breakpoints.down('xs')]: {
        fontSize: '8px',
      },
      '&:hover': {
        cursor: 'pointer',
        color: '#225890',
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
            className={classes.links}
            href="#modules"
          >
            MÓDULOS
          </Link>
          <Link
            variant="h2"
            color="primary"
            underline="none"
            className={classes.insc}
            href="#contact"
          >
            INSCRIÇÃO
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
