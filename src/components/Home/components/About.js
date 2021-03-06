import React, { useState } from 'react';

import TopBar from './TopBar';
import Nav from './Nav';
import KonnectSlider from './KonnectSlider';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const About = () => {
  const [isHover, setIsHover] = useState(true);

  const changeHeadingColors = (e) => {
    setIsHover(!isHover);
  };

  return (
 <>
 <TopBar />
 <Nav />
 

<section>
  <div className="container">
   
    <header className="inner"> 

  <div className="header-content">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <h1 id="homeHeading"><Link to="/">Home</Link> / <span>About US</span></h1>
      </div>
    </div>
  </div>
  </div>
</header>
<div className="row">
      <div className="col-md-6">
        <h2 className="para-heading">About EduCourse Template.</h2>
        <p>Curabitur ut est a mi fermentum tristique. Aliquam et ante odio. Donec elementum odio eget ex porta, vel laoreet nisl fermentum. Nam risus purus, hendrerit id placerat sit amet, tempor a urna. Maecenas id quam et dolor facilisis pulvinar.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <p>Curabitur ut est a mi fermentum tristique. Aliquam et ante odio. Donec elementum odio eget ex porta, vel laoreet nisl fermentum. Nam risus purus, hendrerit id placerat sit amet, tempor a urna. Maecenas id quam et dolor facilisis pulvinar.</p>
         </div>
      <div className="col-md-6"> <img src={require('../img/students.jpg')} className="img-responsive img-hide-sm" alt="Company"/> </div>
    </div>
  </div>
</section>
<section className="light-bg">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h2 className="section-heading">Associated Companies</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque erat, ultrices cursus nisi at, hendrerit tristique.</p>
        <div className="template-space"></div>
      </div>
 
      <div className="col-md-12 client-box">
        <div className="client-single"> <img src={require("../img/clients/1.png")} alt="icon"/></div>
        <div className="client-single"> <img src={require("../img/clients/2.png")} alt="icon"/></div>
        <div className="client-single"> <img src={require("../img/clients/3.png")} alt="icon"/></div>
        <div className="client-single"> <img src={require("../img/clients/4.png")} alt="icon"/></div>
        <div className="client-single"> <img src={require("../img/clients/5.png")} alt="icon"/></div>
        <div className="client-single"> <img src={require("../img/clients/1.png")} alt="icon"/></div>
      </div>
    </div>
  </div>
</section>

<section>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h2 className="section-heading text-dark">Our Talented Trainers</h2>
        <div className="template-space"></div>
      </div>
    </div>
    <div className="row"> 
      <div className="col-md-3 col-sm-6 article-box">
        <article>
          <div className="team-box">
            <div className="img-box"> <span>Photography</span><img src={require("../img/users/user1.png")} alt="it's me Image"/></div>
            <div className="team-content-text">
              <h4>Sherly Mithali</h4>
              <div className="team-more"><a href="#"> <i className="fa fa-twitter"></i> </a> <a href="#"> <i className="fa fa-facebook"></i> </a> <a href="#"> <i className="fa fa-google-plus"></i> </a> <a href="#"> <i className="fa fa-rss"></i> </a> <a href="#"> <i className="fa fa-instagram"></i> </a> </div>
            </div>
          </div>
        </article>
      </div>
      <div className="col-md-3 col-sm-6 article-box">
        <article>
          <div className="team-box">
            <div className="img-box"> <span>Political Science</span><img src={require("../img/users/user2.png")} alt="it's me Image"/></div>
            <div className="team-content-text">
              <h4>Satya Raman</h4>
              <div className="team-more"><a href="#"> <i className="fa fa-twitter"></i> </a> <a href="#"> <i className="fa fa-facebook"></i> </a> <a href="#"> <i className="fa fa-google-plus"></i> </a> <a href="#"> <i className="fa fa-rss"></i> </a> <a href="#"> <i className="fa fa-instagram"></i> </a></div>
            </div>
          </div>
        </article>
      </div>
      <div className="col-md-3 col-sm-6 article-box">
        <article>
          <div className="team-box">
            <div className="img-box"> <span>Physics</span><img src={require('../img/users/user3.png')} alt="it's me Image"/></div>
            <div className="team-content-text">
              <h4>Hillary John</h4>
              <div className="team-more"><a href="#"> <i className="fa fa-twitter"></i> </a> <a href="#"> <i className="fa fa-facebook"></i> </a> <a href="#"> <i className="fa fa-google-plus"></i> </a> <a href="#"> <i className="fa fa-rss"></i> </a> <a href="#"> <i className="fa fa-instagram"></i> </a></div>
            </div>
          </div>
        </article>
      </div>
      <div className="col-md-3 col-sm-6 article-box">
        <article>
          <div className="team-box">
            <div className="img-box"> <span>DataBase</span>
            <img alt="icon"  src={require('../img/users/user4.png')} />
        
            </div>
            <div className="team-content-text">
              <h4>Damodar</h4>
              <div className="team-more"><a href="#"> <i className="fa fa-twitter"></i> </a> <a href="#"> <i className="fa fa-facebook"></i> </a> <a href="#"> <i className="fa fa-google-plus"></i> </a> <a href="#"> <i className="fa fa-rss"></i> </a> <a href="#"> <i className="fa fa-instagram"></i> </a></div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>

<aside className="dark-bg aside-cta">
  <div className="container text-center">
    <div className="row">
      <div className="col-sm-12 col-xs-12">
        <h3 className="margin-10 text-white cta-heading">Are you Looking for good Trainer?</h3>
        <Link href="javascript:void(0)" to="/Home/Contact" className="template-button"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Contact Now</Link> </div>
    </div>
  </div>
</aside>
<KonnectSlider/>
<Footer/>
 </>
  );
};

export default About;
