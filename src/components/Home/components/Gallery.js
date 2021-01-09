import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import TopBar from './TopBar';
import Nav from './Nav';
import KonnectSlider from './KonnectSlider';
import Footer from './Footer';

const About = () => {
  const [isHover, setIsHover] = useState(true);

  const changeHeadingColors = (e) => {
    setIsHover(!isHover);
  };

  return (
 <>
 <TopBar />
 <Nav />
 <body>
 <header className="inner">
     <div className="header-content">
         <div className="container">
             <div className="row">
                 <div className="col-sm-12">
                     <h1 id="homeHeading"><Link to="/">Home</Link> / <span>Gallery</span></h1>
                 </div>
             </div>
         </div>
     </div>
 </header>

 <section>
     <div className="container">
         <div className="row">
             
             <div className="col-sm-3 gallery-box"> <a href="#" data-toggle="modal" data-target=".pop-up-1"> <img src="/Content/img/gallery/gallery-one.jpg" className="img-responsive center-block" alt=""/> </a> </div>
             
             <div className="col-sm-3 gallery-box"> <a href="#" data-toggle="modal" data-target=".pop-up-2"> <img src="/Content/img/gallery/gallery-two.jpg" className="img-responsive center-block" alt=""/> </a> </div>
             
             <div className="col-sm-3 gallery-box"> <a href="#" data-toggle="modal" data-target=".pop-up-3"> <img src="/Content/img/gallery/gallery-three.jpg" className="img-responsive center-block" alt=""/> </a> </div>
             
             <div className="col-sm-3 gallery-box"> <a href="#" data-toggle="modal" data-target=".pop-up-4"> <img src="/Content/img/gallery/gallery-four.jpg" className="img-responsive center-block" alt=""/> </a> </div>
             
             <div className="col-sm-3 gallery-box"> <a href="#" data-toggle="modal" data-target=".pop-up-3"> <img src="/Content/img/gallery/gallery-three.jpg" className="img-responsive center-block" alt=""/> </a> </div>
             
             <div className="col-sm-3 gallery-box"> <a href="#" data-toggle="modal" data-target=".pop-up-4"> <img src="/Content/img/gallery/gallery-four.jpg" className="img-responsive center-block" alt=""/> </a> </div>
             
             <div className="col-sm-3 gallery-box"> <a href="#" data-toggle="modal" data-target=".pop-up-2"> <img src="/Content/img/gallery/gallery-two.jpg" className="img-responsive center-block" alt=""/> </a> </div>
             
             <div className="col-sm-3 gallery-box"> <a href="#" data-toggle="modal" data-target=".pop-up-1"> <img src="/Content/img/gallery/gallery-one.jpg" className="img-responsive center-block" alt=""/> </a> </div>
             
             <div className="col-sm-3 gallery-box"> <a href="#" data-toggle="modal" data-target=".pop-up-1"> <img src="/Content/img/gallery/gallery-one.jpg" className="img-responsive center-block" alt=""/> </a> </div>
             
             <div className="col-sm-3 gallery-box"> <a href="#" data-toggle="modal" data-target=".pop-up-2"> <img src="/Content/img/gallery/gallery-two.jpg" className="img-responsive center-block" alt=""/> </a> </div>
             
             <div className="col-sm-3 gallery-box"> <a href="#" data-toggle="modal" data-target=".pop-up-3"> <img src="/Content/img/gallery/gallery-three.jpg" className="img-responsive center-block" alt=""/> </a> </div>
             
             <div className="col-sm-3 gallery-box"> <a href="#" data-toggle="modal" data-target=".pop-up-4"> <img src="/Content/img/gallery/gallery-four.jpg" className="img-responsive center-block" alt=""/> </a> </div>
             <div className="col-md-12 text-center margin-10"> </div>

             <div className="modal fade pop-up-4" tabindex="-1" role="dialog" aria-hidden="true">
                 <div className="modal-dialog">
                     <div className="modal-content">
                         <div className="modal-body">
                             <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                             <img src="/Content/img/gallery/gallery-four.jpg" className="img-responsive center-block" alt=""/>
                         </div>
                     </div>
                 </div>
             </div>

         </div>
     </div>
 </section>
 <aside className="dark-bg aside-cta">
     <div className="container text-center">
         <div className="row">
             <div className="col-sm-12 col-xs-12">
                 <h3 className="margin-10 text-white cta-heading">Are you Looking for good Trainer?</h3>
                 <Link to='/Home/Contact' href="javascript:void(0)" className="template-button"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Contact Now</Link>
             </div>
         </div>
     </div>
 </aside>

</body>

<KonnectSlider/>
<Footer/>
 </>
  );
};

export default About;
