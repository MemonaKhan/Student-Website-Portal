import React from 'react';
import TopCard from './TopCard.js';
import { Link } from 'react-router-dom';
import './style.css';


import TopBar from './TopBar';
import Nav from './Nav';
import KonnectSlider from './KonnectSlider';
import Footer from './Footer';

class Events extends React.Component {
  render(){
   return(
    <div>
    <TopBar/>
<Nav/>
    <TopCard pagename = "Events"/>

    <section class="section-bottom-border">
    <div class="container">
        <div class="row">
                <div class="col-sm-4 article-box">
                    <article>
                        <div class="news-post">
                            <div class="img-box"><a href="#">
                            <img src="/Content/img/gallery/gallery-one.jpg"/>
                            
                            <div class="post-content-text">
                                <h4><span>Title</span></h4>
                            </div>
                           </a>
                        </div>
                        </div>
                    </article>
                </div>
        </div>

        <div class="row">
            <div class="col-12">
              
                    <ul class="pagination">
                      
                    <li>
                             
                    </li>
                    <li>
                             
                            </li>
                            <li>
                             
                            </li>
                            <li>
                             
                            </li>
                            <li>
                             
                            </li>


                    </ul>



                
            </div>
        </div>

    </div>
</section>




    <KonnectSlider/>
    <Footer/>
  </div>
        );
    }
  }

   
  export default Events;