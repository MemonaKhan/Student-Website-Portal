import React from "react"

import { Link } from 'react-router-dom';
import TopBar from './TopBar';
import Nav from './Nav';
import KonnectSlider from './KonnectSlider';
import Footer from './Footer';
const ApplyCourse=()=>{

    return(
        <>
        <TopBar />
        <Nav />
        <section className="section-bottom-border login-signup">
        <header className="inner"> 

  <div className="header-content">
  <div className="container">
    <div className="row">
      <div className="col-sm-12 mb-5">
        <h1 id="homeHeading"><Link to="/">Home</Link> / <span>Apply Course</span></h1>
      </div>
    </div>
  </div>
  </div>
</header>
  <div className="container">
    <div className="row">
      <div className="login-main template-form">
        <h2>Apply Course</h2>
        <div className="template-space"></div>
        <form>
          <div className="form-group">
            <label for="inputEmail">Select Course</label>
            <select className="form-control">
              <option>PHP</option>
              <option>Physics</option>
              <option>Html</option>
              <option>jQuery</option>
            </select>
          </div>
          <div className="form-group">
            <label for="inputUsername">Your Name</label>
            <input id="inputUsername" type="text" className="form-control">
         </input> </div>
         <div className="form-group">
            <label for="inputEmail">Your Email</label>
            <input id="inputEmail" type="text" className="form-control">
       </input>   </div>
          <div className="form-group">
            <label for="inputPhone">Phone Number</label>
            <input id="inputPhone" type="text" className="form-control">
        </input>  </div>
          <div className="form-group">
            <label for="inputNote">Note</label>
            <textarea id="inputNote" className="form-control"></textarea>
          </div>
          <button type="submit" className="btn btn btn-primary"> Apply </button>
        </form>
      </div>
    </div>
  </div>
</section>
      <KonnectSlider/>
      <Footer/>  
        </>)
}
export default ApplyCourse;