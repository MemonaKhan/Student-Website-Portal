import React from "react"

import { Link } from 'react-router-dom';
import TopBar from './TopBar';
import Nav from './Nav';
import KonnectSlider from './KonnectSlider';
import Footer from './Footer';
const Contact=()=>{
    return(<>
      <TopBar/>
      <Nav/>
        <section className="contact-page">
        <div className="container">
          <div className="row"> 
            <div className="col-sm-6 template-form">
              <h2 className="contact-heading">Get in <span>Touch with us</span></h2>
              <div className="template-space"></div>
              <form  id="contactForm">
                <input type="text" className="form-control" id="name" placeholder="Your Name" required></input>
                <input type="text" className="form-control" id="phone" placeholder="Your Phone number" required></input>
                <input type="email" className="form-control" id="email" placeholder="Enter Your E-Mail" required></input>
                <textarea className="form-control" id="comment" placeholder="Comment here..." required></textarea>
                <button type="submit" className="service-box-button">Submit</button>
              </form>
            </div>
            <div className="col-sm-6 small-map">
              <div id="map"></div>
              <div id="cont" style={{display:"none"}}>
              <img style={{width:"120"}} alt="logo" src={require('../img/logo-green.png')} />
        
                <p style={{color: "#333",fontSize: "16px",fontWeight: "400;"}}>Koramangala, Banglore<br/>
                  Karnatka, IND</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <aside className="light-bg contact-address">
        <div className="container">
          <div className="row"> 
            <div className="col-md-4 contact-box">

            <img alt="icon" className="template-contact-icon" src={require('../img/icons/location.png')} />
        
              <p>#Koramangala, Banglore<br/>
                Karnataka, INDIA</p>
            </div>
            
            <div className="col-md-4 contact-box"> 
            <img alt="icon" className="template-contact-icon" src={require('../img/icons/phone.png')} />
        
              <p>+91 123-456789<br/>
                +91 123-456780</p>
            </div>
            
            <div className="col-md-4 contact-box"> 
            <img alt="icon" className="template-contact-icon" src={require('../img/icons/email.png')} />
        
              <p>info@konnectplugins.com<br/>
                sales@konnectplugins.com</p>
            </div>
          </div>
        </div>
      </aside>
      
      
      <aside className="dark-bg aside-cta">
        <div className="container text-center">
          <div className="row">
            <div className="col-sm-12 col-xs-12">
              <h3 className="margin-10 text-white cta-heading">Are you Looking for good Trainer??</h3>
              <Link to="/Home/Contact" href="javascript:void(0)" className="template-button"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Contact Now</Link> </div>
          </div>
        </div>
      </aside>
        <KonnectSlider/>
        <Footer/>
        </>
        )
}
export default Contact;