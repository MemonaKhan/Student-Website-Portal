import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SideBar from './SideNavBar'

import Home from "./Home";
import AddArticle from './AddArticle';
import Courses from './Courses';
import MyCourses from './MyCourses';
import AddFeedback from './AddFeedback';
import ViewResults from "./ViewResult";
import AddComplain from "./AddComplain";
import ViewComplain from "./ViewComplain";
import DetailComplain from "./DetailComplain";
import AddTips from "./AddTips";
import ViewTips from "./ViewTips";
import Profile from './Profile';
import PaymentForm from './PaymentForm';


import { Container, Row, Col, Card, Button } from 'react-bootstrap';



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
              <Route exact from="/client/" render={props => <Home {...props} />} />
              <Route exact path="/client/article/add" render={props => <AddArticle {...props} />} />
              <Route exact path="/client/courses" render={props => <Courses {...props} />} />
              <Route exact path="/client/my/courses" render={props => <MyCourses {...props} />} />
              <Route exact path="/client/result/view" render={props => <ViewResults {...props} />} />
              <Route exact path="/client/feedback/add" render={props => <AddFeedback {...props} />} />
              <Route exact path="/client/complain/add" render={props => <AddComplain {...props} />} />
              <Route exact path="/client/complain/detail" render={props => <DetailComplain {...props} />} />
              <Route exact path="/client/complain/view" render={props => <ViewComplain {...props} />} />
              <Route exact path="/client/tips/add" render={props => <AddTips {...props} />} />
              <Route exact path="/client/tips/view" render={props => <ViewTips {...props} />} />
              <Route exact path="/client/profile" render={props => <Profile {...props} />} />
              <Route exact path="/client/paymentform" render={props => <PaymentForm {...props} />} />
            </Switch>
          </main>
        </div>
      </>
    </Router>
  );
}

export default Main;
