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

export default function Detailteamview(props) {
  // Used this method so that for backend this method can be used to extract the course id and used appropriate data
  const str = window.location.href.split("/");
  const image = str[str.length - 1];
    return (
        <>
         <TopBar/>
        <Nav/>
 
        <TopCard pagename = "DETAIL ABOUT TEAM MEMBER"/>


        <section class="section-bottom-border">
        <div class="container">
            <div class="row">
                <div class="col-md-8 list-container post">


                    <hr/>
                    <p>Name</p>
                    <a href="javascript:void(0)">
                        <div  style={{width: "100%",height:"auto",backgroundSize: "100% 100%",border: "2px solid #5DC560"}}>

                        <img src={require("../Content/img/"+image+".jpg")} class="img-responsive" alt="" />
                            <div></div>
                        </div>
                    </a> <span class="caption text-muted">Designation</span>
                    <p>Short_Description</p>
                    <p>Long_Description</p>



                    <h3>Tags</h3>
                    <div class="sidebar-tags"> <a href="javascript:void(0)">HTML5</a> <a href="javascript:void(0)">Bootstrap</a> <a href="javascript:void(0)">CSS3</a> <a href="javascript:void(0)">jquery</a> </div>
                    <hr/>
                    <div class="post-social-share">
                        <span>Share On</span> <a href="javascript:void(0)">
                            <a href="https://www.facebook.com/sharer.php?u=https://www.learndigitaly.com/Home/detailTeamview/@Model.Team_Id&@Model.Name&intent=share" target="_blank"><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></a>
                            <a href="javascript:void(0)">
                                <a href="https://twitter.com/share?url=https://www.learndigitaly.com/Home/detailTeamview/@Model.Team_Id&@Model.Name&intent=share" target="_blank"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
                                 <a href="javascript:void(0)"><a href="https://www.linkedin.com/shareArticle/?mini=true&url=https://www.learndigitaly.com/Home/detailTeamview/@Model.Team_Id&@Model.Name&intent=share" target="_blank">
                                 <i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
                   </a> </a>
                   </a></div>
                    <hr/>
                </div>
                <div class="col-md-4 sidebar">

                    <h2>Popular Posts</h2>
                    
                        <div class="sidebar-post">
                            <a href="javascript:void(0)"><span>@items.team.Name</span></a>
                            <p class="post-meta">Posted by <a href="javascript:void(0)">@items.team.Designation</a> </p>
                        </div>
                  

                    <hr/>
                    <div class="sidebar-cta">
                        <div>
                            <img src="img/e-book.png" alt="e book" />
                            <h3>Please Download E-book</h3>
                            <button class="btn-download">Download</button>
                        </div>
                    </div>
                    <hr/>
                    <h2>Categories</h2>
                    <ul class="sidebar-list">
                        <li><a href="javascript:void(0)">Category one</a></li>
                        <li><a href="javascript:void(0)">Category two</a></li>
                        <li><a href="javascript:void(0)">Category three</a></li>
                        <li><a href="javascript:void(0)">Category four</a></li>
                        <li><a href="javascript:void(0)">Category five</a></li>
                        <li><a href="javascript:void(0)">Category six</a></li>
                    </ul>
                    <hr/>
                    <h2>Popular Tags</h2>
                    <div class="sidebar-tags"> <a href="javascript:void(0)">HTML5</a> <a href="javascript:void(0)">Bootstrap</a> <a href="javascript:void(0)">CSS3</a> <a href="javascript:void(0)">jquery</a> <a href="javascript:void(0)">Blog</a> <a href="javascript:void(0)">HTML Blog</a> <a href="javascript:void(0)">Themeforest</a> <a href="javascript:void(0)">Sidebar</a> </div>
                </div>
            </div>
        </div>
    </section>


        
        <KonnectSlider/>
        <Footer/>
        </>
        )
        }