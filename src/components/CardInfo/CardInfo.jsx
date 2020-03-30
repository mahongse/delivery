import React, { useMemo, memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import InfoIcon from '@material-ui/icons/Info';
import NavigationIcon from '@material-ui/icons/Navigation';
import DoneIcon from '@material-ui/icons/Done';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    width: 350,
    cursor: 'pointer',
    margin: 8,
    backgroundColor: '#E1E4E4',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  textLeft: {
    textAlign: 'left',
  },
  textRight: {
    textAlign: 'right'
  },
  infoIcon: {
    color: '#C4291B',
    marginRight: 4
  },
  infoTime: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 16
  },
  navigation: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 10,
    paddingRight: 20,
    color: '#5689EA'
  },
  spacer: {
    marginRight: 50,
  },
  activeRoot: {
    width: 350,
    cursor: 'pointer',
    margin: 8,
    backgroundColor: '#fff'
  },
  doneRoot: {
    width: 350,
    cursor: 'pointer',
    margin: 8,
    backgroundColor: '#56666B',
    color: '#fff'
  },
  navIcons: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  doneIcon: {
    backgroundColor: '#5689EA'
  },
  activeIconColor: {
    backgroundColor: '#D62E55'
  },
  etaColor: {
    color: '#6CB26A'
  }
}));

const CardInfo = ({ info, index, handleActiveChange, handleDone }) => {
  const { barcode, time, eta, address, status, done } = info;
  const infoStatus = useMemo(() => !(parseInt(time.slice(-5)) > parseInt(eta.slice(0, 2))), [eta, time]);
  const classes = useStyles();

  const handlePageNavigate = () => {
    const mapURL = `https://maps.google.com?q=${address.position.lat},${address.position.lng}`;
    window.open(mapURL);
  };

  return (
    <Paper
      elevation={done ? 0 : 3}
      className={classes[status && !done ? 'activeRoot' : done ? 'doneRoot' : 'root']}
      onClick={handleActiveChange}>
      <Grid container className={classes.content} >
        <Grid item xs={2}>
          <Avatar className={classes[done ? 'doneIcon' : !status ? '' : 'activeIconColor']}>{done ? <DoneIcon /> : index + 1}</Avatar>
        </Grid>
        <Grid item xs={6} className={classes.textLeft}>
          <Typography component="p">{barcode}</Typography>
          <Typography variant="body2" color={!done ? "textSecondary" : "inherit"} component="p">
            {address.name}
          </Typography>
        </Grid>
        {!done && <Grid item xs={4} className={classes.textRight}>
          <div className={classes.infoTime}>
            {infoStatus && <InfoIcon className={classes.infoIcon} />}
            <Typography variant="body2" component="p" className={infoStatus ? classes.infoIcon : classes.etaColor}>
              {eta}
            </Typography>
          </div>
          <Typography variant="body2" color="textSecondary" component="p">
            {time}
          </Typography>
        </Grid>}
      </Grid>

      {(status && !done) && <>
        <Divider variant="inset" />
        <Grid className={classes.navigation}>
          <div className={`${classes.navIcons} ${classes.spacer}`} onClick={handlePageNavigate}>
            <NavigationIcon />
            <Typography>Navigate</Typography>
          </div>
          <div className={classes.navIcons} onClick={handleDone} >
            <DoneIcon />
            <Typography>Finish</Typography>
          </div>
        </Grid >
      </>}
    </Paper >
  );
};

export default memo(CardInfo);