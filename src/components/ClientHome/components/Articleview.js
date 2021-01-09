import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import TopCard from './TopCard.js';

import TopBar from './TopBar';
import Nav from './Nav';
import KonnectSlider from './KonnectSlider';
import Footer from './Footer';
import "../css/animate.css";
import "../css/theme.css";
 
import "../assets/bootstrap/css/bootstrap.css";
import "../css/konnect-slider.css";
import "../css/green.css";
import "../assets/font-awesome/css/font-awesome.min.css";


export default function Articleview(props) {
  // Used this method so that for backend this method can be used to extract the course id and used appropriate data
  const str = window.location.href.split("/");
  const image = str[str.length - 1];
    return (
        <>
        <TopBar/>
        <Nav/>
 
        <TopCard pagename = "Single Article"/>
<section class="section-bottom-border">
  <div class="container">
    <div class="row">
      <div class="col-md-8 list-container post"> 
        {/* <!-- Course Social Sharing icons --> */}
        <div class="post-social-share"> <span>Share On</span> <Link to="javascript:void(0)"><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></Link> <Link to="javascript:void(0)"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></Link> <Link to="javascript:void(0)"><i class="fa fa-google-plus fa-2x" aria-hidden="true"></i></Link> <Link to="javascript:void(0)"><i class="fa fa-whatsapp fa-2x" aria-hidden="true"></i></Link> <Link to="javascript:void(0)"><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></Link> </div>
        {/* <!-- Course description --> */}
        {/* <hr> */}
       <img src={require("../img/news/"+image+".jpg")} class="img-responsive" alt="" />
        <p>Sed a pulvinar risus. Donec aliquam tincidunt nunc, eget eleifend eros maximus a. Praesent quis quam eros. Mauris tristique leo a lorem auctor, vel rutrum eros tempor. Donec fringilla nunc enim, sed posuere velit pellentesque ut. Integer faucibus massa vitae magna ullamcorper, vulputate sagittis metus dictum. Donec lobortis, lorem in vehicula eleifend, velit lectus viverra libero, et tincidunt augue ante quis velit. Donec in volutpat diam.</p>
        <h2 class="single-post-heading">Heaging comes here</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a consequat mi. Mauris ullamcorper lacinia elit, at porttitor elit facilisis nec. Sed eleifend ornare turpis ac scelerisque. Donec in euismod erat. Cras luctus dapibus nibh, ac tincidunt magna semper sit amet. Nullam ligula lectus, convallis nec turpis id, efficitur convallis diam. Nunc ut leo tincidunt, interdum neque vitae, pulvinar nunc. Mauris quis placerat dui, non commodo tortor. Duis quis dolor massa. In placerat molestie facilisis. Sed id tempus nulla. In blandit porta mi, vel accumsan eros consequat eget.</p>
        {/* <hr> */}
        {/* <!-- Course social sharing icons --> */}
        <div class="post-social-share"> <span>Share On</span> <Link to="javascript:void(0)"><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></Link> <Link to="javascript:void(0)"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></Link> <Link to="javascript:void(0)"><i class="fa fa-google-plus fa-2x" aria-hidden="true"></i></Link> <Link to="javascript:void(0)"><i class="fa fa-whatsapp fa-2x" aria-hidden="true"></i></Link> <Link to="javascript:void(0)"><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></Link> </div>
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
       {/*Sidebar Call to Action*/}
       <div className="sidebar-cta">
         <div> <img src={require("../img/e-book.png")} alt="e book" />
           <h3>Please Download E-book</h3>
           <button className="btn-download">Download</button>
         </div>
       </div>
       <hr />
       {/*Sidebar Categories*/}
       <h2>Categories</h2>
       <ul className="sidebar-list">
         <li><a href="javascript:void(0)">Category one</a></li>
         <li><a href="javascript:void(0)">Category two</a></li>
         <li><a href="javascript:void(0)">Category three</a></li>
         <li><a href="javascript:void(0)">Category four</a></li>
         <li><a href="javascript:void(0)">Category five</a></li>
         <li><a href="javascript:void(0)">Category six</a></li>
       </ul>
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
</>
)
}
{/* <script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','../../www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-77800499-1', 'auto');
ga('send', 'pageview');

</script> */}