import React from "react";


import TopBar from './TopBar';
import Nav from './Nav';
import KonnectSlider from './KonnectSlider';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "../css/animate.css";
import "../css/theme.css";

import "../assets/bootstrap/css/bootstrap.css";
import "../css/konnect-slider.css";
import "../css/green.css";

import News1 from "../img/news/news1.jpg"
import News2 from "../img/news/news2.jpg"
import News3 from "../img/news/news3.jpg"

export default function Job() {
    return (
      <>
<TopBar/>
<Nav/>
<section className="section-bottom-border">
  <div className="container">
  <header class="inner"> 

  <div class="header-content">
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1 id="homeHeading"><Link to="/">Home</Link> / <span>Job Classified</span></h1>
      </div>
    </div>
  </div>
  </div>
</header>
    <div className="row"> 
      {/* <!--Job--> */}
      <div className="col-sm-4 article-box">
        <article>
         <div className="news-post">
          
            <img src={News1} alt="it's me Image" />
            <div className="post-content-text">
              <h4><span>
              Job Opportunity - Sr. System Administrator - Meezan Bank</span></h4>
              <h4><i class="fa fa-calendar-check-o" aria-hidden="true"></i>  Posted by Meezan Bank Ltd seeks applications for the positions of Sr.System Administrator in Information Technology Department Head Office based at Karachi, Pakistan. on 1/8/2021 5:44:05 PM
              </h4>
              {/* <h4><Icon icon={calendarCheckO} /> 3-4 Weeks</h4> */}
              <div className="post-more"><Link to="/Client/Jobsingle/news1">Attend</Link> </div>
            </div>
          </div>
        </article>
      </div>
      <div className="col-sm-4 article-box">
      <article>
       <div className="news-post">
        
          <img src={News1} alt="it's me Image" />
          <div className="post-content-text">
            <h4><span>
            Job Opportunity - Sr. System Administrator - Meezan Bank</span></h4>
            <h4><i class="fa fa-calendar-check-o" aria-hidden="true"></i>  Posted by Meezan Bank Ltd seeks applications for the positions of Sr.System Administrator in Information Technology Department Head Office based at Karachi, Pakistan. on 1/8/2021 5:44:05 PM
            </h4>
            {/* <h4><Icon icon={calendarCheckO} /> 3-4 Weeks</h4> */}
            <div className="post-more"><Link to="/Client/Jobsingle/news1">Attend</Link> </div>
          </div>
        </div>
      </article>
    </div>
    <div className="col-sm-4 article-box">
    <article>
     <div className="news-post">
      
        <img src={News1} alt="it's me Image" />
        <div className="post-content-text">
          <h4><span>
          Job Opportunity - Sr. System Administrator - Meezan Bank</span></h4>
          <h4><i class="fa fa-calendar-check-o" aria-hidden="true"></i>  Posted by Meezan Bank Ltd seeks applications for the positions of Sr.System Administrator in Information Technology Department Head Office based at Karachi, Pakistan. on 1/8/2021 5:44:05 PM
          </h4>
          {/* <h4><Icon icon={calendarCheckO} /> 3-4 Weeks</h4> */}
          <div className="post-more"><Link to="/Client/Jobsingle/news1">Attend</Link> </div>
        </div>
      </div>
    </article>
  </div>
  <div className="col-sm-4 article-box">
  <article>
   <div className="news-post">
    
      <img src={News1} alt="it's me Image" />
      <div className="post-content-text">
        <h4><span>
        Job Opportunity - Sr. System Administrator - Meezan Bank</span></h4>
        <h4><i class="fa fa-calendar-check-o" aria-hidden="true"></i>  Posted by Meezan Bank Ltd seeks applications for the positions of Sr.System Administrator in Information Technology Department Head Office based at Karachi, Pakistan. on 1/8/2021 5:44:05 PM
        </h4>
        {/* <h4><Icon icon={calendarCheckO} /> 3-4 Weeks</h4> */}
        <div className="post-more"><Link to="/Client/Jobsingle/news1">Attend</Link> </div>
      </div>
    </div>
  </article>
</div>
<div className="col-sm-4 article-box">
<article>
 <div className="news-post">
  
    <img src={News1} alt="it's me Image" />
    <div className="post-content-text">
      <h4><span>
      Job Opportunity - Sr. System Administrator - Meezan Bank</span></h4>
      <h4><i class="fa fa-calendar-check-o" aria-hidden="true"></i>  Posted by Meezan Bank Ltd seeks applications for the positions of Sr.System Administrator in Information Technology Department Head Office based at Karachi, Pakistan. on 1/8/2021 5:44:05 PM
      </h4>
      {/* <h4><Icon icon={calendarCheckO} /> 3-4 Weeks</h4> */}
      <div className="post-more"><Link to="/Client/Jobsingle/news1">Attend</Link> </div>
    </div>
  </div>
</article>
</div>
<div className="col-sm-4 article-box">
<article>
 <div className="news-post">
  
    <img src={News1} alt="it's me Image" />
    <div className="post-content-text">
      <h4><span>
      Job Opportunity - Sr. System Administrator - Meezan Bank</span></h4>
      <h4><i class="fa fa-calendar-check-o" aria-hidden="true"></i>  Posted by Meezan Bank Ltd seeks applications for the positions of Sr.System Administrator in Information Technology Department Head Office based at Karachi, Pakistan. on 1/8/2021 5:44:05 PM
      </h4>
      {/* <h4><Icon icon={calendarCheckO} /> 3-4 Weeks</h4> */}
      <div className="post-more"><Link to="/Client/Jobsingle/news1">Attend</Link> </div>
    </div>
  </div>
</article>
</div>
<div className="col-sm-4 article-box">
<article>
 <div className="news-post">
  
    <img src={News1} alt="it's me Image" />
    <div className="post-content-text">
      <h4><span>
      Job Opportunity - Sr. System Administrator - Meezan Bank</span></h4>
      <h4><i class="fa fa-calendar-check-o" aria-hidden="true"></i>  Posted by Meezan Bank Ltd seeks applications for the positions of Sr.System Administrator in Information Technology Department Head Office based at Karachi, Pakistan. on 1/8/2021 5:44:05 PM
      </h4>
      {/* <h4><Icon icon={calendarCheckO} /> 3-4 Weeks</h4> */}
      <div className="post-more"><Link to="/Client/Jobsingle/news1">Attend</Link> </div>
    </div>
  </div>
</article>
</div>
<div className="col-sm-4 article-box">
<article>
 <div className="news-post">
  
    <img src={News1} alt="it's me Image" />
    <div className="post-content-text">
      <h4><span>
      Job Opportunity - Sr. System Administrator - Meezan Bank</span></h4>
      <h4><i class="fa fa-calendar-check-o" aria-hidden="true"></i>  Posted by Meezan Bank Ltd seeks applications for the positions of Sr.System Administrator in Information Technology Department Head Office based at Karachi, Pakistan. on 1/8/2021 5:44:05 PM
      </h4>
      {/* <h4><Icon icon={calendarCheckO} /> 3-4 Weeks</h4> */}
      <div className="post-more"><Link to="/Client/Jobsingle/news1">Attend</Link> </div>
    </div>
  </div>
</article>
</div>
<div className="col-sm-4 article-box">
<article>
 <div className="news-post">
  
    <img src={News1} alt="it's me Image" />
    <div className="post-content-text">
      <h4><span>
      Job Opportunity - Sr. System Administrator - Meezan Bank</span></h4>
      <h4><i class="fa fa-calendar-check-o" aria-hidden="true"></i>  Posted by Meezan Bank Ltd seeks applications for the positions of Sr.System Administrator in Information Technology Department Head Office based at Karachi, Pakistan. on 1/8/2021 5:44:05 PM
      </h4>
      {/* <h4><Icon icon={calendarCheckO} /> 3-4 Weeks</h4> */}
      <div className="post-more"><Link to="/Client/Jobsingle/news1">Attend</Link> </div>
    </div>
  </div>
</article>
</div>
     
    </div>
  </div>
</section>
<KonnectSlider/>
<Footer/>
</>
    )
}