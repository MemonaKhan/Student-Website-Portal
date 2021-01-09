import React from "react"
import Sidebar from "./Sidebar"
const AddArticle=()=>{
    return(
<>

<Sidebar/>



<div ng-controller="headerCtrl">
    <div class="container" style={{backgroundColor:"white" ,width:"80% "}}>
        <h2 style={{color:"black", textAlign:"center"}}><b>ARTICLE FORM</b></h2>
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
                              <label class="control-label col-md-4">ArticleType</label>
                              <div class="col-md-12">
                              <input type="option"></input>
                                       
                                        </div>
                                    </div>
                                    <div class="form-group">
                                    <label class="control-label col-md-4">Title</label>
                                    <div class="col-md-12">
                                    <input class="form-control input-sm" placeholder="Enter Title"></input>
                                           </div>
                                    </div>
                                    <div class="form-group">
                                    <label class="control-label col-md-4">Image</label>
                                    <div class="col-md-12">
                                        <input type = "file" class = "form-control input-sm"></input>
                                           
                                        </div>
                                    </div>
                                    <div class="form-group">
                                    <label class="control-label col-md-4">Short Description</label>
                                    <div class="col-md-12">
                                    <textarea class = "form-control input-sm" type="Text" placeholder="Enter Short Description"></textarea>  
                                        </div>
                                    </div>
                                    <div class="form-group">
                                    <label class="control-label col-md-4">Long Description</label>
                                    <div class="col-md-12">
                                    <textarea class = "form-control input-sm" type="Text" placeholder="Enter Long Description"></textarea>  
                                     
                                           


                                        </div>
                                    </div>


                                   


                                    <div class="form-group ">
                                        <div class="col-md-4">
                                            <button type="submit" id ="btnSave" class="btn btn btn-success"> ADD </button>
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
export default AddArticle