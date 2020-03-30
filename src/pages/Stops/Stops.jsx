import React from 'react';
import CardInfo from '../../components/CardInfo';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    backgroundColor: '#56666B'
  }
}));

const Stops = ({ data, setData }) => {
  const classes = useStyles();

  const handleActiveChange = index => {
    data[index].status = !data[index].status;
    setData([...data]);
  };

  const handleDone = index => {
    data[index].done = true;
    setData([...data]);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container justify="center">
          {data && data.map((item, index) => (
            <Grid key={item.id} item>
              <CardInfo info={item} index={index} handleActiveChange={() => handleActiveChange(index)} handleDone={() => handleDone(index)} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Stops;