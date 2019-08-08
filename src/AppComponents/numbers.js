import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardContent: {
      flexGrow: 1,
    }
  }));

function RandomNumbers() {
    const classes = useStyles();
    return (
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
      );
  }

export default RandomNumbers;