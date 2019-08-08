import React, { Fragment } from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    textField: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
      }
  }));

function Report() {
    const classes = useStyles();
    return (
        <Fragment>
            <Typography className={classes.textField}>
                <strong>Max Phone Number:</strong> 0789223784
            </Typography>
            <Typography>
                <strong>Min Phone Number:</strong> 0567312786
            </Typography>
            <Typography className={classes.textField}>
                <strong>Total Phone Numbers Generated:</strong> 10000
            </Typography>
        </Fragment>
      );
  }

export default Report;