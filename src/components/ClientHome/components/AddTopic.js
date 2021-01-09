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
    
    
        

       <div class="container" style={{marginTop:"8%"}}>-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
       
            <div class="row">
                <h1 class="text-center font-weight-bold" style={{textAlign:"center",position: "relative",outline: "0!important",
                padding:" 0",
                margin: ".67em 0",
                fontWeight: "300",
                lineHeight: "1.1",
                color: "inherit",
                marginBottom: "10px",
                fontSize: "36px",}}><Link to="/AddTopic">Add Topic</Link></h1>
                <div class="template-space"></div>
                <div class="panel-body">
                    <div class="form-horizontal">

                        <div class="form-column col-lg-12 col-md-12 col-sm-12">

                            <div class="form-group">
                                
        <div class="form-group">

                                        <label class="col-sm-2 control-label">Subject</label>
                                        <div class="col-sm-10">

                                            <input class="form-control" id="Message_Subject" name="Message.Subject" type="text" value=""></input>
                                            <span class="field-validation-valid" data-valmsg-for="Message.Subject" data-valmsg-replace="true"></span>

                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label">Message</label>
                                        <div class="col-sm-10">
                                            <textarea class="form-control" cols="20" id="Message_MessageToPost" name="Message.MessageToPost" rows="8"></textarea>
                                            <span class="field-validation-valid" data-valmsg-for="Message.MessageToPost" data-valmsg-replace="true"></span>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label"></label>
                                        <div class="col-sm-10">
                                            <input type="submit" class="btn btn btn-success" value="Post Message"></input>
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