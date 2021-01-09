import React from "react"
const ViewCourse=()=>{
    return(

        <>

        <body id="page-top">
        <input type="hidden" id="hiddenSchoolId" >
        </input>
    
        <div class="modal fade" id="myModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title">Delete</h3>
                        <button type="button" class="close " data-dismiss="modal">&times;</button>
    
                    </div>
    
    
                    <div class="modal-body">
                        <h4>Are You sure? you want to delete this</h4>
                        </div>

                        <div class="modal-footer">
                            <a href="#" class="btn btn-default" data-dismiss="modal">Cancel</a>
                            <a href="#" class="btn btn-success" onclick="DeleteSchool()">Conform</a>
                        </div>
        
        
                    </div>
                </div>
        
            </div>
        
        
        
        
        
        
            <div id="wrapper">


            <div class="container-fluid">
    
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Learn Online</h6>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Image</th>
                                        <th>Type</th>
                                        <th>Code</th>
                                        <th>Description</th>
                                        <th>Long Description</th>
                                        <th></th>
                                   
                                    </tr>
                                </thead>        


                                <tbody>
                               
                                    <tr id="row_@item.courseId">
                                        <td>
                                           Eng
                                        </td>

                                      
                                        <td>
                                            Easy
                                        </td>
                                        <td>
                                         1234
                                        </td>
                                        <td>
                                        basic and easy course
                                        </td>
                                        <td>
                                            
                                        basic and easy course
                                        basic and easy course
                                        basic and easy course
                                        </td>



                                        <td>
                                             <a href="#" class="btn btn-danger" >Delete</a>
                                            <a  class="btn btn-success">Edit</a>

                                        </td>

                                    </tr>

                                

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>

    </div>
</body>
        </>
    )

}
export default ViewCourse;