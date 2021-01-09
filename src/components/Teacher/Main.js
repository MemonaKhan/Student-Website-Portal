import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import TSideBar from './SideNavBar'
import THome from "./Home";
import TAddArticle from './AddArticle';
import TEditArticle from './EditArticle';
import TViewArticle from './ViewArticle'
import TAddAssignment from './AddAssignment';
import TEditAssignment from './EditAssignment';
import TViewAssignment from './ViewAssignment';
import TAddNotes from './AddNotes';
import TEditNotes from './EditNotes';
import TViewNotes from './ViewNotes';
import TAddOnlineTest from './AddOnlineTest';
import TEditOnlineTest from './EditOnlineTest';
import TViewOnlineTest from './ViewOnlineTest';
import TAddTestFile from './AddTestFile';
import TEditTestFile from './EditTestFile';
import TViewTestFile from './ViewTestFile';
import TDiscussion from './Discussion';
import TAnnouncement from './Announcement';
import TResults from './Results';
import TProfile from './Profile';


import { Container, Row, Col, Card, Button } from 'react-bootstrap';



// import './assets/css/style.css'
import './assets/css/style.css';

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

            {/* <Route from="/teacher/" render={props => <TSideBar {...props} />} /> */}

          <TSideBar />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
              <Route exact from="/teacher/" render={props => <THome {...props} />} />
              <Route exact path="/teacher/article/add" render={props => <TAddArticle {...props} />} />
              <Route exact path="/teacher/article/edit" render={props => <TEditArticle {...props} />} />
              <Route exact path="/teacher/article/view" render={props => <TViewArticle {...props} />} />
              <Route exact path="/teacher/assignment/add" render={props => <TAddAssignment {...props} />} />
              <Route exact path="/teacher/assignment/edit" render={props => <TEditAssignment {...props} />} />
              <Route exact path="/teacher/assignment/view" render={props => <TViewAssignment {...props} />} />
              <Route exact path="/teacher/notes/add" render={props => <TAddNotes {...props} />} />
              <Route exact path="/teacher/notes/edit" render={props => <TEditNotes {...props} />} />
              <Route exact path="/teacher/notes/view" render={props => <TViewNotes {...props} />} />
              <Route exact path="/teacher/onlinetest/add" render={props => <TAddOnlineTest {...props} />} />
              <Route exact path="/teacher/onlinetest/edit" render={props => <TEditOnlineTest {...props} />} />
              <Route exact path="/teacher/onlinetest/view" render={props => <TViewOnlineTest {...props} />} />
              <Route exact path="/teacher/testfile/add" render={props => <TAddTestFile {...props} />} />
              <Route exact path="/teacher/testfile/edit" render={props => <TEditTestFile {...props} />} />
              <Route exact path="/teacher/testfile/view" render={props => <TViewTestFile {...props} />} />
              <Route exact path="/teacher/discussion" render={props => <TDiscussion {...props} />} />
              <Route exact path="/teacher/announcement" render={props => <TAnnouncement {...props} />} />
              <Route exact path="/teacher/result" render={props => <TResults {...props} />} />
              <Route exact path="/teacher/profile" render={props => <TProfile {...props} />} />
            </Switch>
          </main>
        </div>
      </>
    </Router>
  );
}

export default Main;
