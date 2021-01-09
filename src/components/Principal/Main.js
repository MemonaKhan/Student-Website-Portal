import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SideBar from './SideNavBar'
// home
import Home from "./Home";
// article
import AddArticle from './AddArticle';
import EditArticle from './EditArticle';
import ViewArticle from './ViewArticle';


// room allocation
import Addroom from './Addroom';
// import EditTestFile from './EditTestFile';
import Viewroom from './Viewroom.js';
import Unallocaterooms from  './unallocate_all_rooms.js';
import Editroom from './editroom.js';


// announcement
import AddAnnouncement from './addAnnouncement';
// import Announcement from './Announcement';
import EditAnnouncement from './EditAnnouncement';
import ViewAnnouncement from './ViewAnnouncement';

// result
import Results from './Results';
// profile
import Profile from './Profile';
// complains
import Complains from './Viewcomplains.js';
import Addcomplains from './Addcomplain.js';
import EditComplains from './editcomplains.js';

// class
import Classview from './addclass.js';
import Addclass from './viewclass.js';
import Editclass from './editclass.js';
// section
import Addsec from './addsection.js';
import Viewsec from './viewsection.js';
import Editsection from './editsection.js';
// course
import Addcourse from './addcourse.js';
import Addcourseassign from './addcourseassign.js';
import Addenrolment from './addenrolment.js';
import Uneassign from './unassignall.js';

// register
import Addstudent from './addstudent.js';
import Addteacher from './addteacher.js';
import Viewstudent from './viewstudent.js';
import Viewteacher from './viewteacher.js';
import Editstudent from './editstudent.js';
import Editteacher from './editteacher.js';




import './assets/css/style.css'
// import './App.css';
import { makeStyles} from '@material-ui/core/styles';


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
      

        <div className={classes.root}>

          <SideBar />
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Switch>
              <Route exact from="/principal/" render={props => <Home {...props} />} />
              <Route exact path="/principal/article/add" render={props => <AddArticle {...props} />} />
              <Route exact path="/principal/article/edit" render={props => <EditArticle {...props} />} />
              <Route exact path="/principal/article/view" render={props => <ViewArticle {...props} />} />
              <Route exact path="/principal/announcement/add" render={props => <AddAnnouncement {...props} />} />
              <Route exact path="/principal/announcement/edit" render={props => <EditAnnouncement {...props} />} />
              <Route exact path="/principal/announcement/view" render={props => <ViewAnnouncement {...props} />} />
              <Route exact path="/principal/complain/add" render={props => <Addcomplains {...props} />} />
              <Route exact path="/principal/complain/edit" render={props => <EditComplains {...props} />} />
              <Route exact path="/principal/complain/view" render={props => <Complains {...props} />} />
              <Route exact path="/principal/class/add" render={props => <Addclass {...props} />} />
              <Route exact path="/principal/class/view" render={props => <Classview {...props} />} />
              <Route exact path="/principal/class/edit" render={props => <Editclass {...props} />} />
              <Route exact path="/principal/room/add" render={props => <Addroom {...props} />} />
              <Route exact path="/principal/room/remove" render={props => <Unallocaterooms {...props} />} />
              <Route exact path="/principal/room/view" render={props => <Viewroom {...props} />} />
              <Route exact path="/principal/room/edit" render={props => <Editroom {...props} />} />
              <Route exact path="/principal/result" render={props => <Results {...props} />} />
              <Route exact path="/principal/profile" render={props => <Profile {...props} />} />
              <Route exact path="/principal/section/add" render={props => <Addsec {...props} />} /> 
              <Route exact path="/principal/section/view" render={props => <Viewsec {...props} />} />
              <Route exact path="/principal/section/edit" render={props => <Editsection {...props} />} />
              <Route exact path="/principal/course/add" render={props => <Addcourse {...props} />} /> 
              <Route exact path="/principal/course/assign" render={props => <Addcourseassign {...props} />} /> 
              <Route exact path="/principal/enroll/add" render={props => <Addenrolment {...props} />} /> 
              <Route exact path="/principal/unassignall/remove" render={props => <Uneassign {...props} />} /> 
              <Route exact path="/principal/student/add" render={props => <Addstudent {...props} />} /> 
              <Route exact path="/principal/teacher/add" render={props => <Addteacher {...props} />} /> 
              <Route exact path="/principal/student/view" render={props => <Viewstudent {...props} />} /> 
              <Route exact path="/principal/teacher/view" render={props => <Viewteacher {...props} />} />
              <Route exact path="/principal/student/edit" render={props => <Editstudent {...props} />} />
              <Route exact path="/principal/teacher/edit" render={props => <Editteacher {...props} />} />

              
            </Switch>
          </main>
        </div>
    </Router>
  );
}

export default Main;
