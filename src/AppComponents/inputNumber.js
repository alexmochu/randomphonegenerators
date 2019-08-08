import React, { Fragment } from 'react';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
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

function InputNumber() {
    const classes = useStyles();
    return (
        <Fragment>
            <Typography>
                <strong>How many phone numbers?</strong>
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
        </Fragment>
      );
  }

export default InputNumber;
