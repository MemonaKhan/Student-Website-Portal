import React from "react"
import Sidebar from "./Sidebar"
const AddSupportForm=()=>{
    return(
        <>
<Sidebar/>
<div ng-controller="headerCtrl">
        <div class="container" style={{backgroundColor:"white" , width:"80% "}}>
            <h2 style={{color:"black", textAlign:"center"}}><b>SUPPORT FORM</b></h2>
            <div class="panel-group" id="accordion">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <section>
                            <div class="row">
                                <div class="col-md-10 offset-md-1">
                                    <div class="form-horizontal">


                                       
                                        <div class="form-group">
                                            <div class="col-md-12  col-sm-12">
                                            <label class="control-label col-md-6">Response</label>
                                            <textarea class="form-control input-sm" cols="40" data-val="true" data-val-required="The Short Description field is required" id="shortDes" name="shortDes" placeholder="Enter Announcement" rows="5" style={{width: "100%", maxWidth: "100%"}}></textarea>
                                               </div>


                                        </div>

                                        <div class="form-group ">
                                            <div class="col-md-4">
                                                <button type="submit" class="btn btn btn-success"> ADD </button>
                                            </div>
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
export default AddSupportForm