import React from 'react';
import '../style.css';

import { Link, useLocation } from 'react-router-dom';
class Clientdashboard extends React.Component{
    render(){
        return(
            
      <div id="wrapper">
      {/* Sidebar */}
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        {/* Sidebar - Brand */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/Cliente/Home/dashboard">
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink" />
          </div>
          <div className="sidebar-brand-text mx-3">CLIENT Dashboard</div>
        </a>
        {/* Divider */}
        <hr className="sidebar-divider my-0" />
        {/* Nav Item - Dashboard */}
        <li className="nav-item ">
          <a className="nav-link" href="/Cliente/Home/dashboard">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>DASHBOARD</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Cliente/MainHome">
            <i className="far fa-newspaper" />
            <span>Home</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Cliente/Home/addarticle">
            <i className="far fa-newspaper" />
            <span>ARTICLE</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsezee" aria-expanded="true" aria-controls="collapseTwo">
            <i className="fa fa-user" aria-hidden="true" />
            <span>Course</span>
          </a>
          <div id="collapsezee" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <Link className="collapse-item" to="/Dashboard/AddSchool">Courses </Link>
              <a className="collapse-item" href="/Cliente/Home/MyCourses">MYCourses </a>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Cliente/Home/result">
            <i className="fa fa-envelope-open" aria-hidden="true" />
            <span>RESULT</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Cliente/Home/paymenform">
            <i className="fa fa-credit-card" aria-hidden="true" />
            <span>PAYMENT</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Cliente/Home/addfeedback">
            <i className="fa fa-comments" aria-hidden="true" />
            <span>FEEDBACK </span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsezero" aria-expanded="true" aria-controls="collapseTwo">
            <i className="fa fa-user" aria-hidden="true" />
            <span>Complain</span>
          </a>
          <div id="collapsezero" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <a className="collapse-item" href="/Cliente/Home/addComplainform">ADD COMPLAIN </a>
              <a className="collapse-item" href="/Cliente/Home/viewComplainform">VIEW COMPLAIN</a>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseze" aria-expanded="true" aria-controls="collapseTwo">
            <i className="fa fa-user" aria-hidden="true" />
            <span>TECHNICAL TIPS</span>
          </a>
          <div id="collapseze" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <a className="collapse-item" href="/Cliente/Home/TechnicalTips">ADD </a>
              <a className="collapse-item" href="/Cliente/Home/viewTechnicalTips">VIEW </a>
            </div>
          </div>
        </li>
        {/*- nav item article , book-*/}
        {/* Nav Item - Tables */}
        {/* Divider */}
        <hr className="sidebar-divider d-none d-md-block" />
        {/* Sidebar Toggler (Sidebar) */}
        <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle" />
        </div>
      </ul>
      {/* End of Sidebar */}
      {/* Content Wrapper */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
          {/* Topbar */}
          <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            {/* Sidebar Toggle (Topbar) */}
            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
              <i className="fa fa-bars" />
            </button>
            {/* Topbar Search */}
            {/* Topbar Navbar */}
            <ul className="navbar-nav ml-auto">
              {/* Nav Item - Search Dropdown (Visible Only XS) */}
              <li className="nav-item dropdown no-arrow d-sm-none">
                <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fas fa-search fa-fw" />
                </a>
                {/* Dropdown - Messages */}
                <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                  <form className="form-inline mr-auto w-100 navbar-search">
                    <div className="input-group">
                      <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                          <i className="fas fa-search fa-sm" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </li>
              {/* Nav Item - Alerts */}
              {/* Nav Item - Messages */}
              {/* Nav Item - User Information */}
              <li className="nav-item dropdown no-arrow">
                <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className="mr-2 d-none d-lg-inline text-gray-600 small">Jp</span>
                  <img className="img-profile rounded-circle" src="/Content/img/user.png" />
                </a>
                {/* Dropdown - User Information */}
                <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                  <a className="dropdown-item" href="/Cliente/Home/Profile">
                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                    Settings
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="/Home/Logout">
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </nav>
          <div>
            {/* Begin Page Content */}
            <div className="container-fluid">
              {/* Page Heading */}
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Super Admin Dashboard</h1>
              </div>
              <div className="row">
                {/* Earnings (Monthly) Card Example */}
                <div className="col-xl-3 col-md-6 col-sm-6  col-12 mb-4">
                  <div className="card  shadow   align-items-center">
                    <img src="/Content/img/img_avatar.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <div className="card-title" />
                      <a href="/Cliente/MainHome" className="btn btn-success">ADD ANNOUNCEMENT</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-6  col-12 mb-4">
                  <div className="card  shadow   align-items-center">
                    <img src="/Content/img/img_avatar.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <div className="card-title" />
                      <Link to="/Dashboard/AddSchool" className="btn btn-success">ADD SCHOOL</Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-6  col-12 mb-4">
                  <div className="card  shadow   align-items-center">
                    <img src="/Content/img/img_avatar.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <div className="card-title" />
                      <Link  to="/Dashboard/AddSchool" className="btn btn-success">ADD SUPPORT FORM</Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-6  col-12 mb-4">
                  <div className="card  shadow   align-items-center">
                    <img src="/Content/img/img_avatar.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <div className="card-title" />
                      <a href="/Cliente/Home/paymenform" className="btn btn-success">ADD ARTICLE</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-3 col-md-6 col-sm-6  col-12 mb-4">
                  <div className="card  shadow   align-items-center">
                    <img src="/Content/img/img_avatar.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <div className="card-title" />
                      <a href="/Cliente/Home/addfeedback" className="btn btn-success">ADD BLOG</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-6  col-12 mb-4">
                  <div className="card  shadow   align-items-center">
                    <img src="/Content/img/img_avatar.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <div className="card-title" />
                      <a href="/Cliente/Home/addComplainform" className="btn btn-success">CLIENT APPROVAL</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-6  col-12 mb-4">
                  <div className="card  shadow   align-items-center">
                    <img src="/Content/img/img_avatar.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <div className="card-title" />
                      <a href="/Cliente/Home/viewComplainform" className="btn btn-success">SCHOOL APPROVAL</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-6  col-12 mb-4">
                  <div className="card  shadow   align-items-center">
                    <img src="/Content/img/img_avatar.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <div className="card-title" />
                      <a href="/Cliente/Home/detailcomplainform" className="btn btn-success">COURSE APPROVAL</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-6  col-12 mb-4">
                  <div className="card  shadow   align-items-center">
                    <img src="/Content/img/img_avatar.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <div className="card-title" />
                      <a href="/Cliente/Home/detailcomplainform" className="btn btn-success">ADD TEST</a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 col-sm-6  col-12 mb-4">
                <div className="card  shadow   align-items-center">
                  <img src="/Content/img/img_avatar.png" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <div className="card-title" />
                    <a href="/Cliente/Home/detailcomplainform" className="btn btn-success">VIEW TEST</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-6  col-12 mb-4">
              <div className="card  shadow   align-items-center">
                <img src="/Content/img/img_avatar.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="card-title" />
                  <a href="/Cliente/Home/detailcomplainform" className="btn btn-success">COURSE</a>
                </div>
              </div>
         
              </div>
              <div className="col-xl-3 col-md-6 col-sm-6  col-12 mb-4">
              <div className="card  shadow   align-items-center">
                <img src="/Content/img/img_avatar.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className="card-title" />
                  <a href="/Cliente/Home/detailcomplainform" className="btn btn-success">CERTIFICATE ISSUE</a>
                </div>
              </div>
         
              </div>
         
                </div>
            </div></div></div></div></div>
        );
    }
    
}

export default Clientdashboard;