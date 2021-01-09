import React from "react"
import Sidebar from "./Sidebar"
const AddBlog =()=>{
    return(
        <>
        <Sidebar/>
        <div ng-controller="headerCtrl">
    <div class="container" style={{backgroundColor:"white" , width:"80% "}}>
        <h2 style={{color:"black", textAlign:"center"}}><b>BLOG FORM</b></h2>
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
                                    <label class="control-label col-md-4">BlogType</label>
                                    <div class="col-md-12"><select class="form-control" data-val="true" data-val-number="The field Blog_TypeId must be a number." data-val-required="Please select Type." id="Blog_TypeId" name="Blog_TypeId"><option value="">--Select Blog Type--</option>
                                    </select>
                                             
                                              </div>
                                          </div>
                                    <div class="form-group">
                                    <label class="control-label col-md-4">Title</label>
                                    <div class="col-md-12">
                                    <input class="form-control input-sm" placeholder="Enter Title"></input>
                                           </div>
                                    </div>      <div class="form-group">
                                    <label class="control-label col-md-4">Image</label>
                                    <div class="col-md-12">
                                        <input type = "file" class = "form-control input-sm"></input>
                                           
                                        </div>
                                    </div>                  

                                    <div class="form-group">
                                        <label class="control-label col-md-4" for="Short_Description">Short Description</label>
                                        <div class="col-md-12">
                                            <textarea cols="40" data-val="true" data-val-required="The Short Description field is required" id="shortDes" name="shortDes" placeholder="Enter Short Description" rows="5" style={{width: "100%", maxWidth: "100%"}}></textarea>
                                            <span class="field-validation-valid text-danger" data-valmsg-for="shortDes" data-valmsg-replace="true"></span>
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <label class="control-label col-md-4" for="Long_Description">Long Description</label>
                                        <div class="col-md-12">
                                        <textarea cols="40" data-val="true" data-val-required="The Short Description field is required" id="shortDes" name="shortDes" placeholder="Enter Short Description" rows="5" style={{width: "100%", maxWidth: "100%"}}></textarea>
                                        <span class="field-validation-valid text-danger" data-valmsg-for="shortDes" data-valmsg-replace="true"></span>
                                    </div>
                                </div>


                                    <div class="form-group ">
                                        <div class="col-md-4">
                                            <button type="submit" id="btnSave" class="btn btn btn-success"> ADD </button>
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
export default AddBlog;