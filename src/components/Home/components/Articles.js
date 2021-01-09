import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';
import '../index.css';
import "../css/animate.css";
import "../css/theme.css";
import '../assets/css/style.css';
import "../assets/bootstrap/css/bootstrap.css";
import "../css/konnect-slider.css";
import "../css/green.css";


import TopBar from './TopBar';
import Nav from './Nav';
import KonnectSlider from './KonnectSlider';
import Footer from './Footer';
const Articles = () => {
  const Background = '../img/news/news1.jpg';
  return (
    <div>
    <TopBar/>
    <Nav/>
     
     
      {/*<!-- blogs  --> */}
      <section className='section-bottom-border'>
        <div className='container'>
        <header classNameName='inner'>
        {/*<!-- Banner --> */}
        <div classNameName='header-content'>
          <div classNameName='container'>
            <div classNameName='row'>
              <div classNameName='col-sm-12'>
                <h1 id='homeHeading'>
                  <Link
                    to='/Home/About'
                    style={{
                      color: '#5dc560',
                      fontWeight: 'bold',
                      fontSize: '30px',
                    }}
                  >
                    Articles
                  </Link>
                </h1>
              </div>
            </div>
          </div>
        </div>
        </header>
          <div className='row'>
            <div className='col-md-8 list-container'>
              {/*<!--Post -->*/}
              <div className='post-preview'>
                {' '}
                <a href='blog-single.html'>
                  <div
                    className='list-thumb'
                    style={{ backgroundImage: `url(../img/news/news1.jpg)` }}
                  >
                    <div></div>
                  </div>
                  <h2 className='post-title'>
                    {' '}
                    In consequat lacus nec suscipit ullamcorper. Cras viverra
                    rhoncus est molestie sollicitudin.
                  </h2>
                </a>
                <p className='post-meta'>
                  Posted by <a href='javascript:void(0)'>Author Name</a> on
                  September 24, 2016
                </p>
              </div>
              <hr />
              {/*<!--Post -->*/}
              <div className='post-preview'>
                {' '}
                <a href='blog-single.html'>
                  <div
                    className='list-thumb'
                    style={{ backgroundImage: `url(../img/news/news2.jpg)` }}
                  >
                    <div></div>
                  </div>
                  <h2 className='post-title'>
                    {' '}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam a ipsum in.{' '}
                  </h2>
                </a>
                <p className='post-meta'>
                  Posted by <a href='javascript:void(0)'>Author Name</a> on
                  September 18, 2016
                </p>
              </div>
              <hr />
              {/*<!--Post -->*/}
              <div className='post-preview'>
                {' '}
                <a href='blog-single.html'>
                  <div
                    className='list-thumb'
                    style={{ backgroundImage: `url(../img/news/news3.jpg)` }}
                  >
                    <div></div>
                  </div>
                  <h2 className='post-title'>
                    {' '}
                    In consequat lacus nec suscipit ullamcorper. Cras viverra
                    rhoncus est molestie sollicitudin.{' '}
                  </h2>
                </a>
                <p className='post-meta'>
                  Posted by <a href='javascript:void(0)'>Author Name</a> on
                  August 24, 2016
                </p>
              </div>
              <hr />
              {/*<!--Post -->*/}
              <div className='post-preview'>
                {' '}
                <a href='blog-single.html'>
                  <div
                    className='list-thumb'
                    style={{ backgroundImage: `url(${Background})` }}
                  >
                    <div></div>
                  </div>
                  <h2 className='post-title'>
                    {' '}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam a ipsum in.{' '}
                  </h2>
                </a>
                <p className='post-meta'>
                  Posted by <a href='javascript:void(0)'>Author Name</a> on July
                  8, 2016
                </p>
              </div>
              <hr />
              {/*<!--Post -->*/}
              <ul className='pager'>
                <li className='prev'>
                  {' '}
                  <a href='javascript:void(0)'>&larr; New Posts</a>{' '}
                </li>
                <li className='next'>
                  {' '}
                  <a href='javascript:void(0)'>Older Posts &rarr;</a>{' '}
                </li>
              </ul>
            </div>

            {/*<!-- ==== Sidebar Starts Here ==== -->*/}
            <div className='col-md-4 sidebar'  style={{backgroundColor:'white'}}>
              {/*<!--Sidebar Social Links-->*/}
              <div className='sidebar-social'>
                {' '}
                <a href='javascript:void(0)'>
                  <i className='fa fa-facebook' aria-hidden='true'></i>
                </a>{' '}
                <a href='javascript:void(0)'>
                  <i className='fa fa-twitter' aria-hidden='true'></i>
                </a>{' '}
                <a href='javascript:void(0)'>
                  <i className='fa fa-google-plus' aria-hidden='true'></i>
                </a>{' '}
                <a href='javascript:void(0)'>
                  <i className='fa fa-whatsapp' aria-hidden='true'></i>
                </a>{' '}
                <a href='javascript:void(0)'>
                  <i className='fa fa-linkedin' aria-hidden='true'></i>
                </a>{' '}
                <a href='javascript:void(0)'>
                  <i className='fa fa-youtube' aria-hidden='true'></i>
                </a>{' '}
              </div>
              <hr />
              {/*<!--Sidebar Popular Posts-->*/}
              <h2>Popular Posts</h2>
              <div className='sidebar-post' style={{backgroundColor:'white'}}>
                {' '}
                <a href='javascript:void(0)'>
                  Curabitur efficitur malesuada velit
                </a>
                <p className='post-meta'>
                  Posted by <a href='javascript:void(0)'>Author Name</a> on July
                  8, 2016
                </p>
              </div>
              <div className='sidebar-post'>
                {' '}
                <a href='javascript:void(0)' style={{textAlign:'center'}}>
                  Curabitur efficitur malesuada velit
                </a>
                <p className='post-meta'>
                  Posted by <a href='javascript:void(0)'>Author Name</a> on July
                  8, 2016
                </p>
              </div>
              <div className='sidebar-post'>
                {' '}
                <a href='javascript:void(0)'>
                  Curabitur efficitur malesuada velit
                </a>
                <p className='post-meta'>
                  Posted by <a href='javascript:void(0)'>Author Name</a> on July
                  8, 2016
                </p>
              </div>
              <div className='sidebar-post sidebar-post-last'>
                {' '}
                <a href='javascript:void(0)'>
                  Curabitur efficitur malesuada velit
                </a>
                <p className='post-meta'>
                  Posted by <a href='javascript:void(0)'>Author Name</a> on July
                  8, 2016
                </p>
              </div>
              <hr />
              {/*<!--Sidebar Call to Action-->*/}
              <div className='sidebar-cta'>
                <div>
                  {' '}
                  <img src='../img/e-book.png' alt='e book' />
                  <h3>Please Download E-book</h3>
                  <button className='btn-download'>Download</button>
                </div>
              </div>
              <hr />
              {/*<!--Sidebar Categories-->*/}
              <h2>Categories</h2>
              <ul className='sidebar-list'>
                <li>
                  <a href='javascript:void(0)'>Category one</a>
                </li>
                <li>
                  <a href='javascript:void(0)'>Category two</a>
                </li>
                <li>
                  <a href='javascript:void(0)'>Category three</a>
                </li>
                <li>
                  <a href='javascript:void(0)'>Category four</a>
                </li>
                <li>
                  <a href='javascript:void(0)'>Category five</a>
                </li>
                <li>
                  <a href='javascript:void(0)'>Category six</a>
                </li>
              </ul>
              <hr />
              {/*<!--Sidebar Popular Tags-->*/}
              <h2>Popular Tags</h2>
              <div className='sidebar-tags'>
                {' '}
                <a href='javascript:void(0)'>HTML5</a>{' '}
                <a href='javascript:void(0)'>Bootstrap</a>{' '}
                <a href='javascript:void(0)'>CSS3</a>{' '}
                <a href='javascript:void(0)'>jquery</a>{' '}
                <a href='javascript:void(0)'>Blog</a>{' '}
                <a href='javascript:void(0)'>HTML Blog</a>{' '}
                <a href='javascript:void(0)'>Themeforest</a>{' '}
                <a href='javascript:void(0)'>Sidebar</a>{' '}
              </div>
            </div>
            {/*<!-- ==== Sidebar Ends Here ==== --> */}
          </div>
        </div>
      </section>
    <KonnectSlider/>
    <Footer/>
    
      </div>
  );
};

export default Articles;
