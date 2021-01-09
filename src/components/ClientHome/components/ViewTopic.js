import React from 'react'

import TopBar from './TopBar';
import Nav from './Nav';
import KonnectSlider from './KonnectSlider';
import Footer from './Footer';
import { Link } from 'react-router-dom';
 const ViewTopic=()=>{
     return(
         <>
    <TopBar/>
    <Nav/>
    
    
        
            
                <div class="list-container post">

                <header class="inner" style={{marginTop:"8%"}}>
                <div class="header-content">
                   <div class="container">
                       <div class="row">
                           <div class="col-sm-12">
                               <h1 id="homeHeading"><Link to="/">Home</Link> / <span>Discussion Forum</span></h1>
                           </div>
                       </div>
                   </div>
               </div>
           </header>
                   
                        
                            <div class="row-fluid">
                                <div class="container">
                           
                                    <div class="card shadow mb-4">
                                       
                                        <div class="card-body">
                                      
                                            <div class="panel panel-default">
                                                <div class="panel-heading">
                                                    <h3>
                                                        <span>Current Messages</span>

                                                    </h3>
                                                </div>

                                                <div class="panel-body">
                                                    <div class="card-header py-3">
                                                        <p>
                                                      <Link to='/AddTopic'> Post New Topic</Link>      
                                                        </p>
                                                    </div>

                                                    <div class="form-horizontal">

                                                        <div class="form-column col-lg-12 col-md-12 col-sm-12">

                                                            <div class="form-group">
                                                               
                                                                    <div class="table-responsive">

                                                                        <table id="table-message-reply" class="table table-bordered table-striped table-message-reply">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th class="tbl-subject">Subject</th>
                                                                                    <th class="tbl-from">From</th>
                                                                                    <th class="tbl-date">Date Posted</th>
                                                                                    <th>Messages</th>
                                                                                    <th></th>
                                                                                    <th></th>
                                                                                </tr>
                                                                            </thead>

                            

                                                                                <tr class="@selectedRow">
                                                                                    <td>
                                                                                        <div class="text">Subject</div>
                                                                                    </td>

                                                                                    <td>
                                                                                        <div class="text">From</div>
                                                                                    </td>
                                                                                    <td>
                                                                                        <div class="text">dd/MM/yyyy</div>
                                                                                    </td>
                                                                                    <td>
                                                                                        <div class="text">
                                                                                        <Link>View Discussion</Link></div>
                                                                                    </td>

                                                                                    <td>
                                                                                        <div class="text edit">
                                                                                            <Link class="delete" href="#" title="delete" onclick="messageDelete(@m.Id)">X</Link>
                                                                                        </div>
                                                                                    </td>
                                                                                    <td><input type="hidden" id="messageId" name="messageId" value="@m.Id"></input></td>
                                                                                </tr>

                                                                            
                                                                        </table>
                                                                      
                                                                    </div>
                                                                
                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                
                            </div>
                        </div>

                    

                </div>

            <KonnectSlider/>
            <Footer/>
    
       

         </>
     )
 }
 export default ViewTopic 