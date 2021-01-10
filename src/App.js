import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Teacher from './components/Teacher/Main';
import Parent from './components/Parent/Main';
import Client from './components/Client/Main';
import Principal from './components/Principal/Main';
import Student from './components/Student/dashboard/dashboard';
import Home from './components/Home/Main';
import ClientHome from './components/ClientHome/App';
import SuperAdmin from './components/SuperAdmin/Sidebar';

function App() {

  return (
    <Router>
      <>

        {/* <div className={classes.root}> */}
            <Switch>
              <Route exact from="/" render={props => <Home {...props} />} />
              <Route from="/clientHome" render={props => <ClientHome {...props} />} />
              <Route from="/superAdmin" render={props => <SuperAdmin {...props} />} />
              <Route from="/teacher" render={props => <Teacher {...props} />} />
              <Route from="/client" render={props => <Client {...props} />} />
              <Route from="/parent" render={props => <Parent {...props} />} />
              <Route from="/principal" render={props => <Principal {...props} />} />
              <Route from="/student" render={props => <Student {...props} />} />
            </Switch>
        {/* </div> */}
      </>
    </Router>
  );
}

export default App;
