import React from "react"
import Sidebar from "./Sidebar"
const ApproveCourse =()=>{
    return(
        <>
        
        <Sidebar/>

<div ng-controller="headerCtrl">
    <div class="container" style={{backgroundColor:"white" , width:"80% "}}>
        <h2 style={{color:"Black", textAlign:"center"}}><b>Approve Course</b></h2>
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

                                       <label>Course Type</label>
                                       <input placeholder="Type" class = "form-control input-sm" readonly = "readonly" >
                                       </input>
                         </div>
                                    <div class="form-group">
                                    <label>Date</label>
                                    <input placeholder="Date" class = "form-control input-sm" readonly = "readonly" >
                                    </input>                                      </div>
                                    
                                 
                                    <div class="form-group">
                                    <label>Course</label>
                                    <input placeholder="Course" class = "form-control input-sm" readonly = "readonly" >
                                    </input>
                                       </div>
                                    <div class="form-group">
                                    <label>Duration</label>
                                    <input placeholder="Duration " class = "form-control input-sm" readonly = "readonly" >
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
export default ApproveCourse