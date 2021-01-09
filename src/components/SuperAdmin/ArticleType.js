import React from "react"
import Sidebar from "./Sidebar"
const ArticleType =()=>{
    return(
        <>
        <Sidebar/>
        <div ng-controller="headerCtrl">
    <div class="container" style={{backgroundColor:"white" , width:"80% "}}>
        <h2 style={{color:"black", textAlign:"center"}}><b>ARTICLE TYPE</b></h2>
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
                                    <label class="control-label col-md-4">Type</label>
                                    <div class="col-md-12">
                                    <input class="form-control input-sm" placeholder="Enter Article Type"></input>
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
export default ArticleType;