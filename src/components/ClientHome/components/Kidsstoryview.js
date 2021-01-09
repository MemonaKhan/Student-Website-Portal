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

// import News1 from "../img/news/news1.jpg"
// import News2 from "../img/news/news2.jpg"
// import News3 from "../img/news/news3.jpg"


export default function SingleCourse(props) {
  // Used this method so that for backend this method can be used to extract the course id and used appropriate data
  const str = window.location.href.split("/");
  const image = str[str.length - 1];
    return (
        <>
        <TopBar/>
        <Nav/>
 
        <TopCard pagename = " SINGLE STORY "/>
<section class="section-bottom-border">
  <div class="container">
    <div class="row">
      <div class="col-md-8 list-container post"> 
      <h2>The Adventures of Aladdin      </h2>
        {/* <!-- Course Social Sharing icons --> */}
        <div class="post-social-share"> <span>Share On</span> <Link to="javascript:void(0)"><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></Link> <Link to="javascript:void(0)"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></Link> <Link to="javascript:void(0)"><i class="fa fa-google-plus fa-2x" aria-hidden="true"></i></Link> <Link to="javascript:void(0)"><i class="fa fa-whatsapp fa-2x" aria-hidden="true"></i></Link> <Link to="javascript:void(0)"><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></Link> </div>
        {/* <!-- Course description --> */}
        {/* <hr> */}<div class="list-thumb" style={{width: "100%",height:"auto",backgroundSize: "100% 100%",border: "2px solid #5DC560"}}>
                         
       <img src={require("../Content/img/"+image+".jpg")} class="img-responsive" alt="" /></div>
        <p>Sed a pulvinar risus. Donec aliquam tincidunt nunc, eget eleifend eros maximus a. Praesent quis quam eros. Mauris tristique leo a lorem auctor, vel rutrum eros tempor. Donec fringilla nunc enim, sed posuere velit pellentesque ut. Integer faucibus massa vitae magna ullamcorper, vulputate sagittis metus dictum. Donec lobortis, lorem in vehicula eleifend, velit lectus viverra libero, et tincidunt augue ante quis velit. Donec in volutpat diam.</p>
        <h2 class="single-post-heading">The Adventures of Aladdin</h2>
        <p style={{textAlign:"justify"}}>Once upon a time, a widow had an only son whose name was Aladdin. They were very poor and lived from hand to mouth, though Aladdin did what he could to earn some pennies, by picking bananas in faraway places.

        One day, as he was looking for wild figs in a grove some way from the town, Aladdin met a mysterious stranger. This smartly dressed dark-eyed man with a trim black beard and a splendid sapphire in his turban, asked Aladdin an unusual question:
        
        "Come here, boy," he ordered. "How would you like to earn a silver penny?"
        
        "A silver penny!" exclaimed Aladdin. "Sir, I'd do anything for that kind of payment."
        "Ssh. Don't let him hear you. Take this powder and put it into his tea. Trust me." The powder quickly took effect and the wizard fell into a deep sleep. Aladdin hunted for the lamp high and low, but it was nowhere to be seen. But it had to be there. How, otherwise, had the wizard moved the palace? As Aladdin gazed at his sleeping enemy, he thought of peering underneath the pillow. "The lamp! At last," sighed Aladdin, hastily rubbing it.
        
        "Welcome back, Master!" exclaimed the genie. "Why did you leave me at another's service for so long?"
        
        "Welcome," replied Aladdin. "I'm glad to see you again. I've certainly missed you! It's just as well I have you by me again."
        
        "At your command," smiled the genie.
        
        "First, put this wicked wizard in chains and take him far away from where he'll never be found again." The genie grinned with pleasure, nodded his head, and the wizard vanished. Halima clutched Aladdin in fear:
        
        "What's going on? Who is that genie?"
        
        
        #learndigitally #kidsstories #stories #kids #adventureofaladdin #alladinkashrag #alladdin #chirag</p>
        {/* <hr> */}
        {/* <!-- Course social sharing icons --> */}
        <div class="post-social-share"> <span>Share On</span> <Link to="javascript:void(0)"><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></Link> <Link to="javascript:void(0)"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></Link> <Link to="javascript:void(0)"><i class="fa fa-google-plus fa-2x" aria-hidden="true"></i></Link> <Link to="javascript:void(0)"><i class="fa fa-whatsapp fa-2x" aria-hidden="true"></i></Link> <Link to="javascript:void(0)"><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></Link> </div>
         {/* Pager */}
         <ul className="pager">
         <li className="prev"> <a href="javascript:void(0)">← New Posts</a> </li>
         <li className="next"> <a href="javascript:void(0)">Older Posts →</a> </li>
       </ul>
     </div>
     <hr/>
                    
               
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