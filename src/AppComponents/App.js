import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Header from "./header";
import RandomNUmbers from './numbers';
import InputNumber from './inputNumber';
import Report from  './report';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Header/>
        <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={3}>
          <RandomNUmbers/>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={4}>
              <Grid item key={2} xs={12}>
                <Container>
                  <InputNumber />
                  <Report />
                </Container>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}
