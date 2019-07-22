import React from 'react';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
  textField: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

export default function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Random Phone Number Generator
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Generate random phone numbers!
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={4}>
              <Grid item key={1} xs={12}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Generated numbers
                    </Typography>
                    <Typography>1. 0899858342</Typography>
                    <Typography>3. 0899858342</Typography> 
                    <Typography>4. 0899858342</Typography>
                    <Typography>5. 0899858342</Typography>
                    <Typography>6. 0899858342</Typography>
                    <Typography>7. 0899858342</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid> 
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={4}>
              <Grid item key={2} xs={12}>
                <Container>
                  <Typography>
                    How many phone numbers?
                  </Typography>
                  <TextField
                    id="standard-number"
                    placeholder="Enter quantity"
                    value={"#"}
                    // onChange={handleChange('number')}
                    type="number"
                    className={classes.textField}
                    // margin="normal"
                    variant="outlined"
                  />
                  <ThemeProvider theme={theme}>
                    <Button variant="contained" color="primary">
                      Generate Numbers
                    </Button>
                  </ThemeProvider>
                  <Typography className={classes.textField}>
                    Max Phone Number: 0789223784
                  </Typography>
                  <Typography>
                   Min Phone Number: 0567312786
                  </Typography>
                  <Typography className={classes.textField}>
                   Total Phone Numbers Generated: 10000
                  </Typography>
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
