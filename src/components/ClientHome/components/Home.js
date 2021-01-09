import React from 'react'
import { Link } from 'react-router-dom';
import TopBar from './TopBar';
import Nav from './Nav';
import KonnectSlider from './KonnectSlider';
import Footer from './Footer';

import kid from "../Content/img/kid.jpg"
import News1 from "../img/news/news1.jpg"
import News2 from "../img/news/news2.jpg"
import News3 from "../img/news/news3.jpg"
const Home=()=>{
    return(
        <>
        <TopBar />
        <Nav />
        <div class='konnect-carousel carousel-image carousel-image-pagination carousel-image-arrows flexslider'>
        <ul class='slides'>
          <li class='item'>
            <div class='container'>
              <div class='row pos-rel'>
                <div class='col-sm-12 col-md-6 animate'>
                  <h1 class='big fadeInDownBig animated'>Online and Class Room Training</h1>
                  <p class='normal fadeInUpBig animated delay-point-five-s'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tincidunt mauris. Etiam arcu enim, laoreet vitae orci vel, rutrum feugiat nibh. Integer feugiat ligula tellus, non pulvinar justo pharetra eu. Nullam vehicula lorem ut diam tincidunt sagittis. Morbi est ligula, posuere in laoreet ac, porta porttitor dui</p>
                  <a class='btn btn-bordered btn-white btn-lg fadeInRightBig animated delay-one-s' href='#'> Show more </a> </div>
                <div class='col-md-6 animate pos-sta hidden-xs hidden-sm'> <img class="img-responsive img-right fadeInUpBig animated delay-one-point-five-s" alt="iPhone" src="img/slider/student-1.png" /> </div>
              </div>
            </div>
          </li>
          
          <li class='item'>
            <div class='container'>
              <div class='row pos-rel'>
                <div class='col-md-6 animate pos-sta hidden-xs hidden-sm'> <img class="img-responsive img-left fadeInUpBig animated" alt="Circle" src="../img/slider/student-2.png" /> </div>
                <div class='col-sm-12 col-md-6 animate'>
                  <h2 class='big fadeInUpBig animated delay-point-five-s'>Based on Bootstrap</h2>
                  <p class='normal fadeInDownBig animated delay-one-s'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tincidunt mauris. Etiam arcu enim, laoreet vitae orci vel, rutrum feugiat nibh. Integer feugiat ligula tellus, non pulvinar justo pharetra eu. Nullam vehicula lorem ut diam tincidunt sagittis. Morbi est ligula, posuere in laoreet ac, porta porttitor dui</p>
                  <a class='btn btn-bordered btn-white btn-lg fadeInLeftBig animated delay-one-point-five-s' href='#'> Show more </a> </div>
              </div>
            </div>
          </li>
          
          <li class='item'>
            <div class='container'>
              <div class='row pos-rel'>
                <div class='col-sm-12 col-md-6 animate'>
                  <h2 class='big fadeInLeftBig animated'>Clean and Flat</h2>
                  <p class='normal fadeInRightBig animated delay-point-five-s'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tincidunt mauris. Etiam arcu enim, laoreet vitae orci vel, rutrum feugiat nibh. Integer feugiat ligula tellus, non pulvinar justo pharetra eu. Nullam vehicula lorem ut diam tincidunt sagittis. Morbi est ligula, posuere in laoreet ac, porta porttitor dui</p>
                  <a class='btn btn-bordered btn-white btn-lg fadeInUpBig animated delay-one-s' href='#'> Show more </a> </div>
                <div class='col-md-6 animate pos-sta hidden-xs hidden-sm'> <img class="img-responsive img-right fadeInUpBig animated delay-one-point-five-s" alt="Man" src="../img/slider/student-3.png" /> </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      
      <div class="container banner">
        <div class="row">
          <div class="col-sm-4">
            <div class="banner-bar"> <img src={require('../img/icons/classroom.png')} alt="icon"/>
              <h3><span>Experienced Trainers</span></h3>
              <p>Curabitur ut est a mi fermentum tristique. Aliquam et ante odio. Donec elementum odio eget ex porta, vel laoreet nisl fermentum.</p>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="banner-bar"> 
            <img src={require("../img/icons/certificate.png")} alt="icon"/>
              <h3><span>Certification</span></h3>
              <p>Curabitur ut est a mi fermentum tristique. Aliquam et ante odio. Donec elementum odio eget ex porta, vel laoreet nisl fermentum.</p>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="banner-bar"> <img src={require("../img/icons/job-support.png")} alt="icon"/>
              <h3><span>Job Support</span></h3>
              <p>Curabitur ut est a mi fermentum tristique. Aliquam et ante odio. Donec elementum odio eget ex porta, vel laoreet nisl fermentum.</p>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-md-12"> 
              <h2 class="section-heading">Who We Are?</h2>
              <div class="template-space"></div>
            </div>
            <div class="col-md-6">
              <h2 class="para-heading">About EduCourse Template.</h2>
              <p>Curabitur ut est a mi fermentum tristique. Aliquam et ante odio. Donec elementum odio eget ex porta, vel laoreet nisl fermentum. Nam risus purus, hendrerit id placerat sit amet, tempor a urna. Maecenas id quam et dolor facilisis pulvinar.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <Link class="service-box-button" to="/Client/About">View More</Link> </div>
            <div class="col-md-6"> <img src={require("../img/students.jpg")} class="img-responsive img-hide-sm" alt="Company"/> </div>
          </div>
        </div>
      </section>
      
      <section class="light-bg">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2 class="section-heading">EduCourse Stats</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque erat, ultrices cursus nisi at, hendrerit tristique.</p>
              <div class="template-space"></div>
            </div>
            <div class="company-stats">
              <div class="col-md-3 col-sm-6">
                <div class="profile-box"> <img src={require("../img/icons/tool.png")} alt="icon"/>
                  <h4><span>500+</span> professionals trained</h4>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="profile-box"> <img src={require("../img/icons/expert.png")} alt="icon"/>
                  <h4><span>10+ Years</span> of Experience</h4>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="profile-box"> <img src={require("../img/icons/clients.png")} alt="icon"/>
                  <h4><span>15+</span> Companies Association</h4>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="profile-box"> <img src={require("../img/icons/success.png")} alt="icon"/>
                  <h4><span>99%</span> Job Guarantee</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="template-news">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2 class="section-heading text-dark">Offering Courses</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque erat, ultrices cursus nisi at, hendrerit tristique.</p>
              <div class="template-space"></div>
            </div>
          </div>
          <div class="row"> 
            <div class="col-sm-4 article-box">
              <article>
                <div class="news-post">
                  <div class="img-box"> <span>$150</span><a href="#"><img src={News1}/></a> </div>
                  <div class="post-content-text">
                    <h4><span>Course One</span></h4>
                    <h4><i class="fa fa-calendar-check-o" aria-hidden="true"></i> 3-4 Weeks</h4>
                    <div class="post-more"><Link to="/Client/SingleCourse/news1" >Attend</Link> </div>
                  </div>
                </div>
              </article>
            </div>
            
            <div class="col-sm-4 article-box">
              <article>
                <div class="news-post">
                  <div class="img-box"> <span>$110</span><a href="#"><img src={News2}/></a> </div>
                  <div class="post-content-text">
                    <h4><span>Course Two</span></h4>
                    <h4><i class="fa fa-calendar-check-o" aria-hidden="true"></i> 3-4 Weeks</h4>
                    <div class="post-more"><Link to="/Client/SingleCourse/news2">Attend</Link> </div>
                  </div>
                </div>
              </article>
            </div>
            
            <div class="col-sm-4 article-box">
              <article>
                <div class="news-post">
                  <div class="img-box"> <span>$90</span><a href="#"><img src={News3}/></a> </div>
                  <div class="post-content-text">
                    <h4><span>Course Three</span></h4>
                    <h4><i class="fa fa-calendar-check-o" aria-hidden="true"></i> 4-5 Weeks</h4>
                    <div class="post-more"><Link to="/Client/SingleCourse/news3">Attend</Link> </div>
                  </div>
                </div>
              </article>
            </div>
            <div class="col-md-12 text-center margin-10"> <Link to="/Client/Course" class="service-box-button">View More Courses</Link> </div>
        
          </div>
        </div>
        <section class="template-news">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2 class="section-heading text-dark">LEARNING TIPS</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque erat, ultrices cursus nisi at, hendrerit tristique.</p>
              <div class="template-space"></div>
            </div>
          </div>
          <div class="col-md-12 text-center margin-10"> <Link to="/Client/LearningTips" class="service-box-button">VIEW MORE LEARNING TIPS</Link> </div>
        
          </div>
          </section>
    {/*kids story*/}
    <section class="template-news">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2 class="section-heading text-dark">ARTICLE</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque erat, ultrices cursus nisi at, hendrerit tristique.</p>
          <div class="template-space"></div>
        </div>
      </div>
      <div class="row"> 
        <div class="col-sm-4 article-box">
          <article>
            <div class="news-post">
              <div class="img-box"> <span>$150</span><a href="#"><img src={News1}/></a> </div>
              <div class="post-content-text">
                <h4><span>
                Article 1</span></h4>
                <h4><i class="fa fa-calendar-check-o" aria-hidden="true"></i> 
                Posted by Admin on 8/25/2020 9:43:01 AM</h4>
                <div class="post-more"><Link to="/Client/Articleview/news1" >View</Link> </div>
              </div>
            </div>
          </article>
        </div>
        
        <div class="col-sm-4 article-box">
          <article>
            <div class="news-post">
              <div class="img-box"> <span>$110</span><a href="#"><img src={News2}/></a> </div>
              <div class="post-content-text">
                <h4><span>
                Article 2</span></h4>
                <h4><i class="fa fa-calendar-check-o" aria-hidden="true"></i> 
                Posted by Proffesor on 8/25/2020 9:43:01 AM</h4>
                <div class="post-more"><Link to="/Client/Articleview/news2">View</Link> </div>
              </div>
            </div>
          </article>
        </div>
        <div class="col-sm-4 article-box">
          <article>
            <div class="news-post">
              <div class="img-box"> <span>$90</span><a href="#"><img src={News2}/></a> </div>
              <div class="post-content-text">
                <h4><span>
                Article 3</span></h4>
                <h4><i class="fa fa-calendar-check-o" aria-hidden="true"></i> 
                Posted by Teacher on 8/25/2020 9:43:01 AM</h4>
                <div class="post-more"><Link to="/Client/Articleview/news2">View</Link> </div>
              </div>
            </div>
          </article>
        </div>
        <div class="col-md-12 text-center margin-10"> <Link to="/Client/Articles" class="service-box-button">View More Articles</Link> </div>
    
      </div>
    </div>
    <section class="template-news">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2 class="section-heading text-dark">KIDS TELENT</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque erat, ultrices cursus nisi at, hendrerit tristique.</p>
          <div class="template-space"></div>
        </div>
      </div>
      <div class="col-md-12 text-center margin-10"> <Link to="/Client/kidstalent" class="service-box-button">VIEW MORE KIDS TELENT</Link> </div>
    
      </div>
      </section>
      <section class="template-news">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2 class="section-heading text-dark">KIDS STORIES</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque erat, ultrices cursus nisi at, hendrerit tristique.</p>
              <div class="template-space"></div>
            </div>
          </div>
          <div class="col-sm-4 article-box">
          <article>
            <div class="news-post">
              <div class="img-box"> <span>$110</span><a href="#"><img src={kid}/></a> </div>
              <div class="post-content-text">
                <h4><span>
                The Adventures of Aladdin</span></h4>
                <h4><i class="fa fa-calendar-check-o" aria-hidden="true"></i> 
                Posted by Kids Stories on 8/25/2020 9:43:01 AM</h4>
                <div class="post-more"><Link to="/Client/kidstoryview/kid">View</Link> </div>
              </div>
            </div>
          </article>
        </div>
        <div class="col-sm-4 article-box">
        <article>
          <div class="news-post">
            <div class="img-box"> <span>$110</span><a href="#"><img src={kid}/></a> </div>
            <div class="post-content-text">
              <h4><span>
              The Adventures of Aladdin</span></h4>
              <h4><i class="fa fa-calendar-check-o" aria-hidden="true"></i> 
              Posted by Kids Stories on 8/25/2020 9:43:01 AM</h4>
              <div class="post-more"><Link to="/Client/kidstoryview/kid">View</Link> </div>
            </div>
          </div>
        </article>
      </div>
      <div class="col-sm-4 article-box">
      <article>
        <div class="news-post">
          <div class="img-box"> <span>$110</span><a href="#"><img src={kid}/></a> </div>
          <div class="post-content-text">
            <h4><span>
            The Adventures of Aladdin</span></h4>
            <h4><i class="fa fa-calendar-check-o" aria-hidden="true"></i> 
            Posted by Admin on 8/25/2020 9:43:01 AM</h4>
            <div class="post-more"><Link to="/Client/kidstoryview/kid">View</Link> </div>
          </div>
        </div>
      </article>
    </div>

         </div>
      </section>
     
      {/* job */}
      <section class="template-news">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="section-heading text-dark">JOBS</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque erat, ultrices cursus nisi at, hendrerit tristique.</p>
            <div class="template-space"></div>
          </div>
        </div>
        <div class="col-sm-4 article-box">
        <article>
          <div class="news-post">
            <div class="img-box"> <span>$110</span><a href="#"><img src={News1}/></a> </div>
            <div class="post-content-text">
              <h4><span>
Job Opportunity - Senior Officer - Dubai Islamic Bank</span></h4>
              <h4><i class="fa fa-calendar-check-o" aria-hidden="true"></i> 
              Posted on 1/8/2021 5:55:46 PM</h4>
              <div class="post-more"><Link to="/Client/Jobsingle/news1">View</Link> </div>
            </div>
          </div>
        </article>
      </div>
      <div class="col-sm-4 article-box">
      <article>
        <div class="news-post">
          <div class="img-box"> <span>$110</span><a href="#"><img src={News2}/></a> </div>
          <div class="post-content-text">
            <h4><span>
           
Job Opportunity - Senior Officer - Dubai Islamic Bank</span></h4>
            <h4><i class="fa fa-calendar-check-o" aria-hidden="true"></i> 
            Posted on 1/8/2021 5:55:46 PM</h4>
            <div class="post-more"><Link to="/Client/Jobsingle/news2">View</Link> </div>
          </div>
        </div>
      </article>
    </div>
    <div class="col-sm-4 article-box">
    <article>
      <div class="news-post">
        <div class="img-box"> <span>$110</span><a href="#"><img src={News3}/></a> </div>
        <div class="post-content-text">
          <h4><span>
          
Job Opportunity - Senior Officer - Dubai Islamic Bank</span></h4>
          <h4><i class="fa fa-calendar-check-o" aria-hidden="true"></i> 
          Posted on 1/8/2021 5:55:46 PM</h4>
          <div class="post-more"><Link to="/Client/Jobsingle/news3">View</Link> </div>
        </div>
      </div>
    </article>
  </div>
  <div class="col-md-12 text-center margin-10"> <Link to="/Client/Job" class="service-box-button">VIEW MORE JOB DETAILS</Link> </div>
    
       </div>
    </section>

     
     </section>
     <KonnectSlider/>

        <Footer/>
        </section>
     </>
     
        )
};


export default Home;