import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SideBar from './Sidebar'

import Home from "./Home";
import Profile from './Profile'
import Announcement from './ViewAnnouncement';
import AddArticle from './AddArticle';
import TypeArticle from './TypeArticle';
import ViewArticle from './ViewArticle';
import EditArticle from './EditArticle';
import AddBlog from './AddBlog';
import TypeBlog from './TypeBlog';
import ViewBlog from './ViewBlog';
import EditBlog from './EditBlog';
import AddKidsStory from './AddKidsStory';
import TypeKidsStory from './TypeKidsStory';
import ViewKidsStory from './ViewKidsStory';
import EditKidsStory from './EditKidsStory';
import AddTips from './AddTips';
import ViewTips from "./ViewTips";
// import Courses from './Courses';
// import MyCourses from './MyCourses';
// import AddFeedback from './AddFeedback';
// import ViewResults from "./ViewResult";
// import AddComplain from "./AddComplain";
// import ViewComplain from "./ViewComplain";
// import DetailComplain from "./DetailComplain";
// import AddTips from "./AddTips";
// import ViewTips from "./ViewTips";
// import Profile from './Profile';
// import PaymentForm from './PaymentForm';


// import { Container, Row, Col, Card, Button } from 'react-bootstrap';



import './assets/css/style.css'

// import './App.css';
import { makeStyles } from '@material-ui/core/styles';

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
              <Route exact from="/superAdmin/" render={props => <Home {...props} />} />
              <Route exact from="/superAdmin/profile" render={props => <Profile {...props} />} />
              <Route exact from="/superAdmin/announcement" render={props => <Announcement {...props} />} />
              <Route exact from="/superAdmin/article/add" render={props => <AddArticle {...props} />} />
              <Route exact from="/superAdmin/article/type" render={props => <TypeArticle {...props} />} />
              <Route exact from="/superAdmin/article/view" render={props => <ViewArticle {...props} />} />
              <Route exact from="/superAdmin/article/edit" render={props => <EditArticle {...props} />} />
              <Route exact from="/superAdmin/blog/add" render={props => <AddBlog {...props} />} />
              <Route exact from="/superAdmin/blog/type" render={props => <TypeBlog {...props} />} />
              <Route exact from="/superAdmin/blog/view" render={props => <ViewBlog {...props} />} />
              <Route exact from="/superAdmin/blog/edit" render={props => <EditBlog {...props} />} />
              <Route exact from="/superAdmin/story/add" render={props => <AddKidsStory {...props} />} />
              <Route exact from="/superAdmin/story/type" render={props => <TypeKidsStory {...props} />} />
              <Route exact from="/superAdmin/story/view" render={props => <ViewKidsStory {...props} />} />
              <Route exact from="/superAdmin/story/edit" render={props => <EditKidsStory {...props} />} />
              <Route exact from="/superAdmin/tips/add" render={props => <AddTips {...props} />} />
              <Route exact from="/superAdmin/tips/view" render={props => <ViewTips {...props} />} />
              <Route exact from="/superAdmin/talent/add" render={props => <Home {...props} />} />
              <Route exact from="/superAdmin/talent/view" render={props => <Home {...props} />} />
              <Route exact from="/superAdmin/event/add" render={props => <Home {...props} />} />
              <Route exact from="/superAdmin/event/view" render={props => <Home {...props} />} />
              <Route exact from="/superAdmin/school/add" render={props => <Home {...props} />} />
              <Route exact from="/superAdmin/school/view" render={props => <Home {...props} />} />
              <Route exact from="/superAdmin/context/add" render={props => <Home {...props} />} />
              <Route exact from="/superAdmin/context/view" render={props => <Home {...props} />} />
              <Route exact from="/superAdmin/client/approval" render={props => <Home {...props} />} />
              <Route exact from="/superAdmin/school/approval" render={props => <Home {...props} />} />
              <Route exact from="/superAdmin/course/approval" render={props => <Home {...props} />} />
              <Route exact from="/superAdmin/article/approval" render={props => <Home {...props} />} />
              <Route exact from="/superAdmin/test/add" render={props => <Home {...props} />} />
              <Route exact from="/superAdmin/test/view" render={props => <Home {...props} />} />
              <Route exact from="/superAdmin/boffer/add" render={props => <Home {...props} />} />
              <Route exact from="/superAdmin/boffer/type" render={props => <Home {...props} />} />
              <Route exact from="/superAdmin/boffer/view" render={props => <Home {...props} />} />
              <Route exact from="/superAdmin/course/add" render={props => <Home {...props} />} />
              <Route exact from="/superAdmin/course/view" render={props => <Home {...props} />} />
              <Route exact from="/superAdmin/collaboration/add" render={props => <Home {...props} />} />
              <Route exact from="/superAdmin/collaboration/view" render={props => <Home {...props} />} />
              <Route exact from="/superAdmin/complain/school" render={props => <Home {...props} />} />
              <Route exact from="/superAdmin/complain/client" render={props => <Home {...props} />} />
              <Route exact from="/superAdmin/dept/team/add" render={props => <Home {...props} />} />
              <Route exact from="/superAdmin/dept/adBoard/add" render={props => <Home {...props} />} />
              <Route exact from="/superAdmin/team/add" render={props => <Home {...props} />} />
              <Route exact from="/superAdmin/team/view" render={props => <Home {...props} />} />
              <Route exact from="/superAdmin/adBoard/add" render={props => <Home {...props} />} />
              <Route exact from="/superAdmin/adBoard/view" render={props => <Home {...props} />} />
              <Route exact from="/superAdmin/clientfeedback" render={props => <Home {...props} />} />
              <Route exact from="/superAdmin/ad/add" render={props => <Home {...props} />} />
              <Route exact from="/superAdmin/ad/view" render={props => <Home {...props} />} />
              {/* <Route exact from="/superAdmin/" render={props => <Home {...props} />} /> */}
              
            </Switch>
          </main>
        </div>
      </>
    </Router>
  );
}

export default Main;
