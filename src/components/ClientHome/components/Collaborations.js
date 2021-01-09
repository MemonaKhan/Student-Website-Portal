import React from 'react';
import TopCard from './TopCard.js';
import { Link } from 'react-router-dom';
import './style.css';


import TopBar from './TopBar';
import Nav from './Nav';
import KonnectSlider from './KonnectSlider';
import Footer from './Footer';

import kid from "../Content/img/kid.jpg"
class Collaborations extends React.Component {
  render(){
   return(
    <div>
    <TopBar/>
<Nav/>
    <TopCard pagename = "COLLABORATIONS"/>
    <section className="section-bottom-border">
      <div className="container">
      
        <div className="row">
          <div className="col-md-8 list-container"> 
          <div className="post-preview"> 
          <Link to="/Home/Collaborationsview/kid">
          <div > <Link to="/Home/Collaborationsview/kid">
              <img className="list-thumb" src={kid}/></Link>
                <div />
              </div>
              
              
              <h2 className="post-title"> The Adventures of Aladdin </h2>
            </Link>
            <p className="post-meta">Posted by <a href="javascript:void(0)">Kids Stories</a> on July 8, 2016</p>
          </div>
                
            <hr />
            {/*Post */}
            <div className="post-preview"> 
            <Link to="/Home/Collaborationsview/kid">
            <div > <Link to="/Home/Collaborationsview/kid">
                <img className="list-thumb" src={kid}/></Link>
                  <div />
                </div>
                
                
                <h2 className="post-title"> The Adventures of Aladdin </h2>
              </Link>
              <p className="post-meta">Posted by <a href="javascript:void(0)">Kids Stories</a> on July 8, 2016</p>
            </div>
            <hr />
            {/*Post */}
            <div className="post-preview"> 
            <Link to="/Home/Collaborationsview/kid">
            <div > <Link to="/Home/Collaborationsview/kid">
                <img className="list-thumb" src={kid}/></Link>
                  <div />
                </div>
                
                
                <h2 className="post-title"> The Adventures of Aladdin </h2>
              </Link>
              <p className="post-meta">Posted by <a href="javascript:void(0)">Kids Stories</a> on July 8, 2016</p>
            </div>
            <hr />
            {/*Post */}
            <div className="post-preview"> 
            <Link to="/Home/Collaborationsview/kid">
            <div > <Link to="/Home/Collaborationsview/kid">
                <img className="list-thumb" src={kid}/></Link>
                  <div />
                </div>
                
                
                <h2 className="post-title"> The Adventures of Aladdin </h2>
              </Link>
              <p className="post-meta">Posted by <a href="javascript:void(0)">Kids Stories</a> on July 8, 2016</p>
            </div>
            <hr />
            {/* Pager */}
            <ul className="pager">
              <li className="prev"> <a href="javascript:void(0)">← New Posts</a> </li>
              <li className="next"> <a href="javascript:void(0)">Older Posts →</a> </li>
            </ul>
          </div>
          {/* ==== Sidebar Starts Here ==== */}
          <div className="col-md-4 sidebar"> 
            {/*Sidebar Social Links*/}
            <div className="sidebar-social"> 
           <i className="fa fa-facebook" aria-hidden="true" /><i className="fa fa-twitter" aria-hidden="true" /><i className="fa fa-google-plus" aria-hidden="true" /><i className="fa fa-whatsapp" aria-hidden="true" /><i className="fa fa-linkedin" aria-hidden="true" /><i className="fa fa-youtube" aria-hidden="true" /></div>
            <hr />
            {/*Sidebar Popular Posts*/}
            <h2>Popular Posts</h2>
            <div className="sidebar-post"> <a href="javascript:void(0)">Curabitur efficitur malesuada velit, in ultricies nisi ornare eu.</a>
              <p className="post-meta">Posted by <a href="javascript:void(0)">Author Name</a> on July 8, 2016</p>
            </div>
            <div className="sidebar-post"> <a href="javascript:void(0)">Curabitur efficitur malesuada velit, in ultricies nisi ornare eu.</a>
              <p className="post-meta">Posted by <a href="javascript:void(0)">Author Name</a> on July 8, 2016</p>
            </div>
            <div className="sidebar-post"> <a href="javascript:void(0)">Curabitur efficitur malesuada velit, in ultricies nisi ornare eu.</a>
              <p className="post-meta">Posted by <a href="javascript:void(0)">Author Name</a> on July 8, 2016</p>
            </div>
            <div className="sidebar-post sidebar-post-last"> <a href="javascript:void(0)">Curabitur efficitur malesuada velit, in ultricies nisi ornare eu.</a>
              <p className="post-meta">Posted by <a href="javascript:void(0)">Author Name</a> on July 8, 2016</p>
            </div>
            <hr />
            
            
            {/*Sidebar Popular Tags*/}
            <h2>Popular Tags</h2>
            <div className="sidebar-tags"> <a href="javascript:void(0)">HTML5</a> <a href="javascript:void(0)">Bootstrap</a> <a href="javascript:void(0)">CSS3</a> <a href="javascript:void(0)">jquery</a> <a href="javascript:void(0)">Blog</a> <a href="javascript:void(0)">HTML Blog</a> <a href="javascript:void(0)">Themeforest</a> <a href="javascript:void(0)">Sidebar</a> </div>
          </div>
          {/* ==== Sidebar Ends Here ==== */} 
        </div>
      </div>
    </section>
    <KonnectSlider/>
    <Footer/>
  </div>
        );
    }
  }

   
  export default Collaborations;