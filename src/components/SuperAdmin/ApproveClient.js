import React from "react"
import Sidebar from "./Sidebar"
const ApproveClient =()=>{
    return(
        <>
        
        <Sidebar/>

<div ng-controller="headerCtrl">
    <div class="container" style={{backgroundColor:"white" , width:"80% "}}>
        <h2 style={{color:"Black", textAlign:"center"}}><b>Approve Client</b></h2>
        <div class="panel-group" id="accordion">
            <div class="panel panel-default">
                <div class="panel-body">
                    <section>
                        <div class="row">
                            <div class="col-md-10 offset-md-1">

                               
                                    <div class="form-horizontal">
                                        <hr />
                                    
                                    </div>
                                   

                                    <div class="form-group">
                                        <img src="/Content/img/img_avatar.png" height="135" width="135" />
                                    </div>
                                    <div class="form-group">
                                       <label>Name</label>
                                       <input placeholder="Name" class = "form-control input-sm" readonly = "readonly" >
                                       </input>
                                                          </div>
                                    
                                       <div class="form-group">

                                       <label>Email</label>
                                       <input placeholder="Email" class = "form-control input-sm" readonly = "readonly" >
                                       </input>
                         </div>
                                    <div class="form-group">
                                    <label>Password</label>
                                    <input placeholder="Password" class = "form-control input-sm" readonly = "readonly" >
                                    </input>                                      </div>
                                    
                                 
                                    <div class="form-group">
                                    <label>CNIC</label>
                                    <input placeholder="CNIC" class = "form-control input-sm" readonly = "readonly" >
                                    </input>
                                       </div>
                                    <div class="form-group">
                                    <label>Contact_No</label>
                                    <input placeholder="Conact_No" class = "form-control input-sm" readonly = "readonly" >
                                    </input>
                                       </div>






                                    <div class="form-group ">
                                        <div class="col-md-4">
                                            
                                                <input name="submit" type="submit" id="process" value="Reject" class="btn btn-sm btn-success" ></input>
                                                <input name="submit" type="submit" id="process" value="Approve" class="btn btn-sm btn-success" ></input>


                                            

                                        </div>
                                    </div>

                                    </div>
                                  
                                    </div>
                                    </section>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                     </div>
           
        
        </>
        )
}
export default ApproveClient