import React from 'react'
import { Link } from 'react-router-dom';
import TopBar from './TopBar';
import Nav from './Nav';
import KonnectSlider from './KonnectSlider';
import Footer from './Footer';

import kid from "../Content/img/kid.jpg"
const Team=()=>{
    return(
        <>
        <TopBar />
        <Nav />
<body>
    
    <header class="inner">
        <div class="header-content">
            <div class="container" style={{marginTop:"8%"}}>
                <div class="row">
                    <div class="col-sm-12">
                          <h1 id="homeHeading"><Link to='/'>Home</Link> / <span>Team</span></h1>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <section class="section-bottom-border">
        <div class="container">
            <div class="row">
                <div class="col-md-8 list-container post">
                   <div class="post-social-share"> <span>Share On</span> <a href="javascript:void(0)"><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></a> <a href="javascript:void(0)"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a> <a href="javascript:void(0)"><i class="fa fa-google-plus fa-2x" aria-hidden="true"></i></a> <a href="javascript:void(0)"><i class="fa fa-whatsapp fa-2x" aria-hidden="true"></i></a> <a href="javascript:void(0)"><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></a> </div>
                    
                        <hr/>
                        <div class="row">

                            <div class="col-md-4 col-sm-3 col-xs-4">

                                <a href="javascript:void(0)"> <img src={kid} width="150" height="100" alt="Responsive image" class="img-thumbnail float-left" /> </a> <span class="caption text-muted"></span>
                            </div>
                            <div class="col-md-8 col-sm-8 col-xs-8 cc" style={{marginTop:"-10px;"}}>
                                <h2 class="single-post-heading">Name</h2>
                                <h4>Designation</h4>
                                <p>Short_Description</p>


                                <div class='more'>    </div>

                                <div class="content">Long_Description</div>

                                <a href="#" class="show_hide" data-content="toggle-text">Read More</a>

                            </div>
                            
                                <Link className="service-box-button" to='/Client/Detailteamview/kid' >DETAIL</Link>

                            </div>
                            
                            <div class="row">
                                <div class="col-12">

                                      {/*   <ul class="pagination">
                                            
                                                <li>
                                                    @Html.ActionLink("New Posts", "teamview", new { team = ViewBag.team == null ? "Asc" : ViewBag.team, SortBy = " ", PageNumber = ViewBag.PageNumber })
                                                   
                                                </li>
                                           
                                                <li>
                                                    @Html.ActionLink("New Posts", "teamview", new { team = ViewBag.team == null ? "Asc" : ViewBag.team, SortBy = " ", PageNumber = ViewBag.PageNumber - 1 })
                                                   
                                                </li>
                                            

                                           
                                                
                                                    <li class="active">
                                                        @Html.ActionLink(i.ToString(), "teamview", new { team = ViewBag.team == null ? "Asc" : ViewBag.team, SortBy = " ", PageNumber = i })
                                                       </li>
                                               
                                                    <li>
                                                        @Html.ActionLink(i.ToString(), "teamview", new { team = ViewBag.team == null ? "Asc" : ViewBag.team, SortBy = " ", PageNumber = i })
                                                       
                                                    </li>
                                              
                                                <li>
                                                    @Html.ActionLink("Old Posts", "teamview", new { team = ViewBag.team == null ? "Asc" : ViewBag.team, SortBy = " ", PageNumber = ViewBag.PageNumber })
                                                   
                                                </li>
                                           
                                                <li>
                                                    @Html.ActionLink("Old Posts", "teamview", new { team = ViewBag.team == null ? "Asc" : ViewBag.team, SortBy = " ", PageNumber = ViewBag.PageNumber + 1 })
                                                   
                                                </li>
                                            

                                        </ul>

*/}
                                </div>
                            </div>
                            <h3>Tags</h3>
                            <div class="sidebar-tags"> <a href="javascript:void(0)">HTML5</a> <a href="javascript:void(0)">Bootstrap</a> <a href="javascript:void(0)">CSS3</a> <a href="javascript:void(0)">jquery</a> </div>
                            <hr/>
                            <div class="post-social-share"> <span>Share On</span> <a href="javascript:void(0)"><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></a> <a href="javascript:void(0)"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a> <a href="javascript:void(0)"><i class="fa fa-google-plus fa-2x" aria-hidden="true"></i></a> <a href="javascript:void(0)"><i class="fa fa-whatsapp fa-2x" aria-hidden="true"></i></a> <a href="javascript:void(0)"><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></a> </div>
                            <hr/>
                       
                            <ul class="pager">
                                <li class="prev"> <a href="javascript:void(0)">&larr; Prev</a> </li>
                                <li class="next"> <a href="javascript:void(0)">Next &rarr;</a> </li>
                            </ul>
                            <hr/>
                            <h3>Comments</h3>
                            <div class="post-footer">
                                <div class="input-group">
                                    <input class="form-control comment-btn" placeholder="Add a comment" type="text"></input>
                                    <span class="input-group-addon"> <a href="javascript:void(0)"><i class="fa fa-edit"></i></a> </span>
                                </div>
                                <ul class="comments-list">
                                    <li class="comment">
                                        <a class="pull-left" href="javascript:void(0)"> <img class="avatar" src="/Content/img/user.png" alt="avatar"/> </a>
                                        <div class="comment-body">
                                            <div class="comment-heading">
                                                <h4 class="user">Gestino</h4>
                                                <h5 class="time">5 minutes ago</h5>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et semper orci, vel vulputate tellus.</p>
                                        </div>
                                        <ul class="comments-list">
                                            <li class="comment">
                                                <a class="pull-left" href="javascript:void(0)"> <img class="avatar" src="/Content/img/user2.png" alt="avatar"/> </a>
                                                <div class="comment-body">
                                                    <div class="comment-heading">
                                                        <h4 class="user">David</h4>
                                                        <h5 class="time">3 minutes ago</h5>
                                                    </div>
                                                    <p>ok, we will make it</p>
                                                </div>
                                            </li>
                                            <li class="comment">
                                                <a class="pull-left" href="javascript:void(0)"> <img class="avatar" src="/Content/img/user3.png" alt="avatar"/> </a>
                                                <div class="comment-body">
                                                    <div class="comment-heading">
                                                        <h4 class="user">Thomos</h4>
                                                        <h5 class="time">3 minutes ago</h5>
                                                    </div>
                                                    <p>Ok, cool.</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                <div class="col-md-4 sidebar">

                    <div class="sidebar-social"> <a href="javascript:void(0)"><i class="fa fa-facebook" aria-hidden="true"></i></a> <a href="javascript:void(0)"><i class="fa fa-twitter" aria-hidden="true"></i></a> <a href="javascript:void(0)"><i class="fa fa-google-plus" aria-hidden="true"></i></a> <a href="javascript:void(0)"><i class="fa fa-whatsapp" aria-hidden="true"></i></a> <a href="javascript:void(0)"><i class="fa fa-linkedin" aria-hidden="true"></i></a> <a href="javascript:void(0)"><i class="fa fa-youtube" aria-hidden="true"></i></a> </div>
                    <hr/>
                    <h2>Popular Posts</h2>
                 
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

   
</body>
<KonnectSlider/>
<Footer/>
</>
    )
}
export default Team;