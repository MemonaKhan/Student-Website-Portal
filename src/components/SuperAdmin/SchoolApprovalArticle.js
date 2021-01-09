import React from "react"

import { Link, useLocation } from 'react-router-dom';
import Sidebar from "./Sidebar"
const ClientApproval=()=>{
    return(
        <>
        <Sidebar/>
        <div id="wrapper">

        <div class="container-fluid">

            <h1 class="h3 mb-2 text-gray-800">Tables</h1>
            <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the <a target="_blank" href="https://datatables.net">official DataTables documentation</a>.</p>

            <div class="card shadow mb-4">
                <div class="card-header py-3">
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>School Name</th> 
                                    <th>Type</th>
                                    <th>Status</th>
                                    <th>Action</th>

                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                <th>Date</th>
                                <th>School Name</th> 
                                <th>Type</th>
                                <th>Status</th>
                                <th>Action</th>

                                </tr>
                            </tfoot>
                            <tbody>
                               
                                    <tr>
                                        <td>klklk
                                        </td>
                                        <td>
                                        jkjj
                                        </td>
                                        <td>nhjhj
                                         </td>
                                         <td>nhjhj
                                         </td>
                                         
                                        <td>
                                            <Link to="/Dashboard/ApproveClient" type="submit" name="SubmitButton" value="2" class="btn btn-sm btn-success">Details</Link>
                                            </td>


                                    </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>

    </div>
    <footer class="sticky-footer bg-white">
        <div class="container my-auto">
            <div class="copyright text-center my-auto">
                <span>Copyright &copy; Your Website 2019</span>
            </div>
        </div>
    </footer>
    
        </>
    )
}
export default ClientApproval