import React, { useState } from 'react';
import { useLocation, Route, Redirect, Switch, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { initialData } from '../src/constants';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Stops from '../src/pages/Stops';
import Map from '../src/pages/Map';
import './App.css';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: '#000'
  }
});

function App() {
  const [data, setData] = useState(initialData);
  const classes = useStyles();
  const { pathname } = useLocation()

  return (
    <AppBar position="static" className={classes.root}>
      <Tabs
        value={pathname}
        TabIndicatorProps={{ style: { background: '#fff' } }}
        variant="fullWidth"
        centered
      >
        <Tab label={`Stops (${data.length})`} value="/" component={Link} to='/' />
        <Tab label="Map" value="/map" component={Link} to='/map' />
      </Tabs>
      <Switch>
        <Route exact path='/' render={() => <Stops data={data} setData={setData} />} />
        <Route exact path='/map' render={() => <Map data={data} />} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </AppBar>
  );
}

export default App;
