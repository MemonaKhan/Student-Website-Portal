import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SideBar from './SideNavBar'

import Home from "./Home";
import AddComplaint from './AddComplaint';
import EditComplaint from './EditComplaint';
import ViewComplaint from './ViewComplaint'
import Attendance from './Attendance';
import ClassSchdule from './ClassSchdule';
import Enrolled from './Enrolled';
import Announcement from './Announcement';
import Results from './Results';
import Profile from './Profile';


// import { Container, Row, Col, Card, Button } from 'react-bootstrap';



import './assets/css/style.css'

// import './App.css';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Main() {
  const classes = useStyles();

  return (
    <Router>
      <>

        <div className={classes.root}>

          <SideBar />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
              <Route exact from="/parent/" render={props => <Home {...props} />} />
              <Route exact path="/parent/complaint/add" render={props => <AddComplaint {...props} />} />
              <Route exact path="/parent/complaint/edit" render={props => <EditComplaint {...props} />} />
              <Route exact path="/parent/complaint/view" render={props => <ViewComplaint {...props} />} />
              <Route exact path="/parent/Attendance/view" render={props => <Attendance {...props} />} />
              <Route exact path="/parent/ClassSchdule/view" render={props => <ClassSchdule {...props} />} />
              <Route exact path="/parent/Enrolled" render={props => <Enrolled {...props} />} />
              <Route exact path="/parent/announcement" render={props => <Announcement {...props} />} />
              <Route exact path="/parent/result" render={props => <Results {...props} />} />
              <Route exact path="/parent/profile" render={props => <Profile {...props} />} />
            </Switch>
          </main>
        </div>
      </>
    </Router>
  );
}

export default Main;
