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

// import superadmin components
import ApproveClient from './components/Superadmin/ApproveClient';

import ViewTest from './components/Superadmin/ViewTest';
import ViewTeam from './components/Superadmin/ViewTeam';
import ViewSchool from './components/Superadmin/ViewSchool';
import ViewCourse from './components/Superadmin/ViewCourse';
import ClientApproval from './components/Superadmin/ClientApproval';
import AddSchool from './components/Superadmin/AddSchool';
import Dashboard from './components/Superadmin/Dashboard';
import D from './components/Superadmin/D'
import AddSupportForm from './components/Superadmin/AddSupportForm';
import AddBlog from './components/Superadmin/AddBlog';
import AddArticle from './components/Superadmin/AddArticle';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About';
//import Card from './components/Card'
import ApplyCourse from './components/ApplyCourse';
import Course from './components/Course';
import SingleCourse from './components/SingleCourse';
import Contact from './components/Contact';
import Articles from './components/Articles';

import Faq from './components/Faq';
import Privacy from './components/Privacy';
import TermsCondition from './components/TermsCondition';
import AddAnnouncement from './components/Superadmin/AddAnnouncement';
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
          <Route path='/Home' component={Home} />
          <Route exact path='/Dashboard' component={Dashboard} />
         
          <Route path='/Dashboard/AddAnnouncement' component={AddAnnouncement} />
          <Route path='/Dashboard/AddSupportForm' component={AddSupportForm} />
          <Route path='/Dashboard/ApproveClient' component={ApproveClient} />
          
          <Route path='/Dashboard/ClientApproval' component={ClientApproval} />
          <Route path='/Dashboard/AddSchool' component={AddSchool} />
          <Route path='/Dashboard/AddArticle' component={AddArticle} />
          <Route path='/Dashboard/AddBlog' component={AddBlog} />
          <Route exact path='/Dashboard/ViewSchool' component={ViewSchool} />
          <Route path='/Dashboard/ViewTeam' component={ViewTeam} />
          <Route path='/Dashboard/ViewTest' component={ViewTest} />
          <Route path='/Dashboard/ViewCourse' component={ViewCourse} />
          <Route path='/Home/login' component={Login} />
          <Route path='/Home/register' component={Register} />
          <Route path='/Home/About' component={About} />
          <Route path='/Home/Articles' component={Articles} />
          <Route exact path='/Home/Privacy' component={Privacy} />
        
          <Route path='/Home/Faq' component={Faq} />
          <Route path='/Home/TermsCondition' component={TermsCondition} />
        <Route exact path='/Home/card' component={Card} />
          <Route path='/ApplyCourse' component={ApplyCourse} />
          <Route path='/Home/SingleCourse' component={SingleCourse} />
          <Route path='/Home/Course' component={Course} />
          <Route path='/Home/Contact' component={Contact} />
        
        
    

          <TSideBar />
          <main className={classes.content}>
            <div className={classes.toolbar} />
      
             <Route exact from="/" render={props => <THome {...props} />} />
              <Route exact path="/article/add" render={props => <TAddArticle {...props} />} />
              <Route exact path="/assignment/edit" render={props => <TEditAssignment {...props} />} />
              <Route exact path="/assignment/view" render={props => <TViewAssignment {...props} />} />
              <Route exact path="/notes/add" render={props => <TAddNotes {...props} />} />
              <Route exact path="/notes/edit" render={props => <TEditNotes {...props} />} />
              <Route exact path="/notes/view" render={props => <TViewNotes {...props} />} />
              <Route exact path="/onlinetest/add" render={props => <TAddOnlineTest {...props} />} />
              <Route exact path="/onlinetest/edit" render={props => <TEditOnlineTest {...props} />} />
              <Route exact path="/onlinetest/view" render={props => <TViewOnlineTest {...props} />} />
              <Route exact path="/testfile/add" render={props => <TAddTestFile {...props} />} />
              <Route exact path="/testfile/edit" render={props => <TEditTestFile {...props} />} />
              <Route exact path="/testfile/view" render={props => <TViewTestFile {...props} />} />
              <Route exact path="/discussion" render={props => <TDiscussion {...props} />} />
              <Route exact path="/announcement" render={props => <TAnnouncement {...props} />} />
              <Route exact path="/result" render={props => <TResults {...props} />} />
              <Route exact path="/profile" render={props => <TProfile {...props} />} />
           
          </main>
        </div>
       
       </Switch>
        </div>
        
     
      </Router>
  );
}

export default App;
