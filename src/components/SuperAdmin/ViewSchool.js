import React, { Component } from 'react';

import AddSchool from './AddSchool';
import { render } from 'react-dom';
export default class ViewSchool extends Component {
    constructor(props){
       super(props);
 
       this.state = {
        myName: '',
        myNumber:'',
        myAddress:'',
        email: '' ,
        myPassword:''
       };
     }
 
     handleParentData = (formModel) => {
       console.log(formModel);
 
       this.setState({...formModel});
     }
 
 
   render() {
    return(
<>
<body id="page-top">



    <div id="wrapper">
    <div class="container-fluid">

    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">School</h6>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Address</th>
                            <th>Email</th>

                            <th>Contact No</th>

                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody handleData={this.handleParentData}>
                               
                                    <tr>
                                        <td>
  <p>{this.state.myName}</p> 
                                        </td>
                                        <td>
                                            <img src="/Content/img/user.png" width="150" height="150" />
                                        </td>
                                        <td>
                               <p>        { this.state.myNumber}</p>
                                        </td>
                                        <td>
                                   <p> {this.state.email}</p>     </td>
                                        <td>
                                    <p>  {this.state.myAddress}</p>
                                          </td>
                                        <td>
                                          

                                            <a href="#" class="btn btn-danger" >Delete</a>
                                            |
                                          
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
   }