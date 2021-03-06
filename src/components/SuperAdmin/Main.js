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
import AddTalent from './AddTalent';
import ViewTalent from "./ViewTalent";
import AddEvent from './AddEvent';
import ViewEvent from "./ViewEvent";
import EditEvent from "./EditEvent";
import AddSchool from './AddSchool';
import ViewSchool from "./ViewSchool";
import EditSchool from "./EditSchool";
import AddQContext from './AddQContext';
import ViewQContext from './ViewQContext';
import ClientApproval from './ClientApproval';
import SchoolApproval from './SchoolApproval';
import CourseApproval from './CourseApproval';
import ArticleApproval from './ArticleApproval';
import ClientDetail from './ClientDetail';
import SchoolDetail from './SchoolDetail';
import ArticleDetail from './ArticleDetail';
import AddTest from './AddOnlineTest';
import ViewTest from './ViewOnlineTest';
import AddBOffer from './AddBOffer';
import TypeBOffer from './TypeBOffer';
import ViewBOffer from './ViewBOffer';
import EditBOffer from './EditBOffer';
import AddCourses from './AddCourse';
import ViewCourses from './ViewCourses';
import EditCourses from './EditCourse';
import ViewCollaboration from "./ViewColl";
import AddCollaboration from "./AddColl";
import SComplain from './ViewSComplain'
import SComplainReply from "./AddSComplain";
import CComplain from './ViewCComplain'
import CComplainReply from "./AddCComplain";
import AddDptTeam from './AddDptTeam';
import AddDptAdBoard from './AddDptAdBoard';
import AddTeam from './AddTeam';
import ViewTeam from './ViewTeam';
import EditTeam from './EditTeam';
import AddAdBoard from './AddAdBoard';
import ViewAdBoard from './ViewAdBoard';
import EditAdBoard from './EditAdBoard';
import ClientFeedback from "./ClientFeedback";
import AddWebAd from './AddWebAd';
import ViewWebAd from './ViewWebAd';
import EditWebAd from './EditWebAd';


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
              <Route exact from="/superAdmin/talent/add" render={props => <AddTalent {...props} />} />
              <Route exact from="/superAdmin/talent/view" render={props => <ViewTalent {...props} />} />
              <Route exact from="/superAdmin/event/add" render={props => <AddEvent {...props} />} />
              <Route exact from="/superAdmin/event/view" render={props => <ViewEvent {...props} />} />
              <Route exact from="/superAdmin/event/edit" render={props => <EditEvent {...props} />} />
              <Route exact from="/superAdmin/school/add" render={props => <AddSchool {...props} />} />
              <Route exact from="/superAdmin/school/view" render={props => <ViewSchool {...props} />} />
              <Route exact from="/superAdmin/school/edit" render={props => <EditSchool {...props} />} />
              <Route exact from="/superAdmin/context/add" render={props => <AddQContext {...props} />} />
              <Route exact from="/superAdmin/context/view" render={props => <ViewQContext {...props} />} />
              <Route exact from="/superAdmin/client/approval" render={props => <ClientApproval {...props} />} />
              <Route exact from="/superAdmin/school/approval" render={props => <SchoolApproval {...props} />} />
              <Route exact from="/superAdmin/course/approval" render={props => <CourseApproval {...props} />} />
              <Route exact from="/superAdmin/article/approval" render={props => <ArticleApproval {...props} />} />
              <Route exact from="/superAdmin/client/detail" render={props => <ClientDetail {...props} />} />
              <Route exact from="/superAdmin/school/detail" render={props => <SchoolDetail {...props} />} />
              {/* <Route exact from="/superAdmin/course/detail" render={props => <CourseDetail {...props} />} /> */}
              <Route exact from="/superAdmin/article/detail" render={props => <ArticleDetail {...props} />} />
              <Route exact from="/superAdmin/test/add" render={props => <AddTest {...props} />} />
              <Route exact from="/superAdmin/test/view" render={props => <ViewTest {...props} />} />
              <Route exact from="/superAdmin/boffer/add" render={props => <AddBOffer {...props} />} />
              <Route exact from="/superAdmin/boffer/type" render={props => <TypeBOffer {...props} />} />
              <Route exact from="/superAdmin/boffer/view" render={props => <ViewBOffer {...props} />} />
              <Route exact from="/superAdmin/boffer/edit" render={props => <EditBOffer {...props} />} />
              <Route exact from="/superAdmin/course/add" render={props => <AddCourses {...props} />} />
              <Route exact from="/superAdmin/course/view" render={props => <ViewCourses {...props} />} />
              <Route exact from="/superAdmin/course/edit" render={props => <EditCourses {...props} />} />
              <Route exact from="/superAdmin/collaboration/add" render={props => <AddCollaboration {...props} />} />
              <Route exact from="/superAdmin/collaboration/view" render={props => <ViewCollaboration {...props} />} />
              <Route exact from="/superAdmin/complain/school" render={props => <SComplain {...props} />} />
              <Route exact from="/superAdmin/complain/school/reply" render={props => <SComplainReply {...props} />} />
              <Route exact from="/superAdmin/complain/client" render={props => <CComplain {...props} />} />
              <Route exact from="/superAdmin/complain/client/reply" render={props => <CComplainReply {...props} />} />
              <Route exact from="/superAdmin/dept/team/add" render={props => <AddDptTeam {...props} />} />
              <Route exact from="/superAdmin/dept/adBoard/add" render={props => <AddDptAdBoard {...props} />} />
              <Route exact from="/superAdmin/team/add" render={props => <AddTeam {...props} />} />
              <Route exact from="/superAdmin/team/view" render={props => <ViewTeam {...props} />} />
              <Route exact from="/superAdmin/team/edit" render={props => <EditTeam {...props} />} />
              <Route exact from="/superAdmin/adBoard/add" render={props => <AddAdBoard {...props} />} />
              <Route exact from="/superAdmin/adBoard/view" render={props => <ViewAdBoard {...props} />} />
              <Route exact from="/superAdmin/adBoard/edit" render={props => <EditAdBoard {...props} />} />
              <Route exact from="/superAdmin/clientfeedback" render={props => <ClientFeedback {...props} />} />
              <Route exact from="/superAdmin/ad/add" render={props => <AddWebAd {...props} />} />
              <Route exact from="/superAdmin/ad/view" render={props => <ViewWebAd {...props} />} />
              <Route exact from="/superAdmin/ad/edit" render={props => <EditWebAd {...props} />} />
              
            </Switch>
          </main>
        </div>
      </>
    </Router>
  );
}

export default Main;
