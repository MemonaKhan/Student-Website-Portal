import React, { useState } from 'react';
import {withRouter} from 'react-router'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Single from './components/Single.js';
import "./css/animate.css";
import "./css/theme.css";

import './assets/css/style.css';
import "./assets/bootstrap/css/bootstrap.css";
import "./css/konnect-slider.css";
import "./css/green.css";

import Collaborationsview from './components/Collaborationsview';
import Collaborations from './components/Collaborations';
import Donar from './components/Donar';

import Job from './components/Job';

import Jobsingle from './components/Jobsingle';
import Events from './components/Events';
import Detailteamview from './components/Detailteamview';
import Team from './components/Team';
import Help from './components/Help';
import AdvisoryBoardview from './components/AdvisoryBoardview';
import LearningTipsview from './components/LearningTipsview';
import LearningTips from './components/LearningTips';
import Kidsstoryview from './components/Kidsstoryview';
import Kidsstory from './components/Kidsstory';
import Kidstalentview from './components/Kidstalentview';
import Kidstalent from './components/Kidstalent';
import AddTopic from './components/AddTopic';
import ViewTopic from './components/ViewTopic';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About';
import Card from './components/Card'
import ApplyCourse from './components/ApplyCourse';
import Course from './components/Course';
import SingleCourse from './components/SingleCourse';
import Contact from './components/Contact';
import Error from './components/Error';

import Articleview from './components/Articleview';
import Articles from './components/Articles';
import Faq from './components/Faq';
import Privacy from './components/Privacy';
import TermsCondition from './components/TermsCondition';
function App() {
  return (
    <Router>

  
      <div className='App'>
        <div className='loading'>
          <div className='loader'></div>
        </div>
        <a id='scroll-up'>
          <i className='fa fa-angle-up'></i>
        </a>

        <div className='theme-settings' id='switcher'>
          {' '}
          <span className='theme-click'>
            <i className='fa fa-cog fa-spin' aria-hidden='true'></i>
          </span>{' '}
          <span
            className='theme-color theme-default theme-active'
            data-color='green'
          ></span>{' '}
          <span className='theme-color theme-blue' data-color='blue'></span>{' '}
          <span className='theme-color theme-red' data-color='red'></span>{' '}
          <span className='theme-color theme-violet' data-color='violet'></span>
          <p>(Or) Your favorite color</p>
        </div>
        
        <Switch>
          <Route exact path='/' component={Home} />
          <Route  path='/Client/register' component={Register} />
          <Route  path='/Client/About' component={About} />
          <Route  path='/Client/login' component={Login} />
          <Route  path='/Client/Articles' component={Articles} />
          
          <Route  path='/Client/Team' component={Team} />
          <Route  path='/Client/Articleview' component={Articleview} />
          <Route  path='/Client/Privacy' component={Privacy} />
          <Route  path='/Client/Faq' component={Faq} />
          <Route  path='/Client/TermsCondition' component={TermsCondition} />
          <Route  path='/Client/Blog' component={Card} />
          <Route  path='/ApplyCourse' component={ApplyCourse} />
          <Route  path='/Client/SingleCourse' component={SingleCourse} />
          <Route  path='/Client/Course' component={Course} />
          
          <Route  path='/Client/Gallery' component={Gallery} />
          <Route  path='/Client/Contact' component={Contact} />
          
          <Route  path='/Client/AddTopic' component={AddTopic} />
          <Route  path='/Client/ViewTopic' component={ViewTopic} />
          
          <Route  path='/Client/Kidsstoryview' component={Kidsstoryview} />
          <Route  path='/Client/Kidsstory' component={Kidsstory} />
          <Route  path='/Client/Kidstalentview' component={Kidstalentview} />

          <Route  path='/Client/Kidstalent' component={Kidstalent} />
          
          <Route  path='/Client/LearningTipsview' component={LearningTipsview} />
          <Route  path='/Client/LearningTips' component={LearningTips} />
          
          <Route  path='/Client/Collaborationsview' component={Collaborationsview} />
          <Route  path='/Client/Collaborations' component={Collaborations} />
          <Route  path='/Client/Donar' component={Donar} />
          
          <Route  path='/Client/Events' component={Events} />
          <Route  path='/Client/Team' component={Team} />
          <Route  path='/Client/Help' component={Help} />
          
          <Route  path='/Client/Job' component={Job} />
          
          <Route  path='/Client/Jobsingle' component={Jobsingle} />
          <Route  path='/Client/Detailteamview' component={Detailteamview} />
          <Route  path='/Client/AdvisoryBoardview' component={AdvisoryBoardview} />
          <Route component={Error} />
        
        
       
       </Switch>
        </div>
        
     
      </Router>
  );
}

export default App;
