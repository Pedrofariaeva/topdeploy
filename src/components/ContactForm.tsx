import React, { useState } from 'react';
import {
  Button,
  Container,
  createStyles,
  Input,
  makeStyles,
  Paper,
  TextField,
  Theme,
  Typography,
} from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';
import { Radio } from '@material-ui/core';
import { RadioGroup } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import axios from 'axios';
import SnackBar from './SnackBar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
      backgroundColor: '#F7F7F7',
      textAlign: 'center',
      padding: '20px',
    },
    paper: {
      height: '500px',
      width: '50%',
      marginTop: theme.spacing(4),
      marginLeft: '50%',
      transform: 'translate(-50%)',
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },
    title: {
      marginTop: theme.spacing(5),
      marginLeft: '50%',
      transform: 'translate(-50%)',
    },
    container: {
      padding: '20px',
    },
    textField: {
      backgroundColor: '#F7F7F7',
      width: '85%',
    },
    button: {
      backgroundColor: '#3E71B8',
      color: 'white',
      width: '150px',
      '&:hover': {
        backgroundColor: '#23456D',
      },
    },
  })
);

const initialValues = {
  name: '',
  email: '',
  contact: '',
  nif: '',
  inscrito: 'sim',
  message: '',
};

const ContactForm = () => {
  const classes = useStyles();

  const [formData, setFormData] = useState(initialValues);
  const [openFeedback, setOpenFeedBack] = useState<boolean>(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { name, email, contact, nif, inscrito, message } = formData;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    const response = await axios({
      url: `/api/contact`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(formData),
    });
    if (response.data) {
      setOpenFeedBack(true);
      console.log(openFeedback);
      setFormData({ ...formData, message: response.data.message });
      setTimeout(() => {
        setFormData({ ...formData, message: '' });
      }, 3000);
    }
  };
  return (
    <div className={classes.root} id="contact">
      {message ? (
        <SnackBar openFeedback={openFeedback} message={message} />
      ) : null}

      <Container maxWidth="md">
        <Typography variant="h1" color="primary" className={classes.title}>
          Inscrição
        </Typography>
        <Paper elevation={3} className={classes.paper}>
          <form noValidate autoComplete="off" onSubmit={onSubmit}>
            <Grid container spacing={2} className={classes.container}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="nome"
                  label="Nome Completo"
                  variant="outlined"
                  name="name"
                  type="text"
                  value={name}
                  className={classes.textField}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="email"
                  label="E-mail"
                  variant="outlined"
                  name="email"
                  type="email"
                  value={email}
                  className={classes.textField}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="contacto"
                  label="Contacto"
                  variant="outlined"
                  name="contact"
                  type="text"
                  value={contact}
                  className={classes.textField}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="nif"
                  label="Nif"
                  variant="outlined"
                  name="nif"
                  type="text"
                  value={nif}
                  className={classes.textField}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" color="primary">
                  Encontras-te inscrito/a no centro de emprego?
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <RadioGroup
                    aria-label="gender"
                    name="inscrito"
                    value={inscrito}
                    onChange={handleChange}
                    row
                  >
                    <FormControlLabel
                      value="sim"
                      control={<Radio color="primary" />}
                      label="Sim"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="nao"
                      control={<Radio color="primary" />}
                      label="Não"
                      labelPlacement="start"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button
                  className={classes.button}
                  type="submit"
                  disabled={name && email && contact && nif ? false : true}
                >
                  Enviar
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default ContactForm;
