import React from 'react';
import {
  makeStyles,
  Theme,
  createStyles,
  AppBar,
  Toolbar,
  Typography,
  Divider,
  IconButton,
  Box,
} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Image from 'next/image';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      bottom: 0,
      top: 'auto',
    },
    local: {
      flexGrow: 1,
    },
    text: {
      width: '200px',
      [theme.breakpoints.down('xs')]: {
        fontSize: '7px',
        width: '100px',
      },
    },
    toolBar: {
      backgroundColor: '#2A2A2A',
      height: '120px',
    },
    toolBar2: {
      backgroundColor: '#2A2A2A',
    },
    divider: {
      background: 'white',
      width: '80%',
      marginLeft: '50%',
      transform: 'translate(-50%)',
    },
    box: {
      backgroundColor: '#2A2A2A',
    },
    iefp: {
      padding: '10px',
      marginLeft: '10px',
      textAlign: 'center',
    },
    socialMedia: {
      '&:hover': {
        backgroundColor: 'transparent',
        transform: 'scale(1.07)',
      },
    },
  })
);

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="relative" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <LocationOnIcon />
          <Typography variant="h6" className={classes.text}>
            ENTER Altice Labs Rua de Campolide nº28 1070-036 Lisboa
          </Typography>
          <LocationOnIcon />
          <div className={classes.local}>
            <Typography variant="h6" className={` ${classes.text} `}>
              CEI - Centro de Empresas Inovadoras Av. do Empresário 1, room 1.01
              6000-763 Castelo Branco
            </Typography>
          </div>
          <div>
            <Image
              src="/images/top.png"
              alt="top logo"
              width={200}
              height={10}
            />
            <div className={classes.iefp}>
              <Image
                src="/images/jobDeploy.png"
                alt="jobDeploy logo"
                width={100}
                height={15}
              />
              <Image
                src="/images/iefp.png"
                alt="iefp logo"
                width={30}
                height={28}
              />
            </div>
          </div>
        </Toolbar>
        <Box className={classes.box}>
          <Divider light variant="middle" className={classes.divider} />
        </Box>

        <Toolbar className={classes.toolBar2}>
          <Typography variant="h6" className={classes.local}>
            © 2021 Track on Performance
          </Typography>
          <IconButton
            color="secondary"
            aria-label="FacebookIcon"
            href="https://www.facebook.com/TrackonPerformance"
            target="_blank"
            rel="noopener"
            className={classes.socialMedia}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="secondary"
            aria-label="InstagramIcon"
            href="https://www.instagram.com/track_on_performance/"
            target="_blank"
            rel="noopener"
            className={classes.socialMedia}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            color="secondary"
            aria-label="LinkedInIcon"
            href="https://www.linkedin.com/company/track-on-performance"
            target="_blank"
            rel="noopener"
            className={classes.socialMedia}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            color="secondary"
            aria-label="TwitterIcon"
            href="https://twitter.com/tronperformance"
            target="_blank"
            rel="noopener"
            className={classes.socialMedia}
          >
            <TwitterIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Footer;
