import React from 'react'

import TopBar from './TopBar';
import Nav from './Nav';
import KonnectSlider from './KonnectSlider';
import Footer from './Footer';
const Donar=()=>{
    return(

        <>
        <TopBar/>
        <Nav/>
        <section class="section-bottom-border">
    <div className="container-fluid">
        <div className="row">
            <div className="login-main template-form">



                
                    <div className="form-group">
                       <label>Category</label>

<select className = "form-control" placeholder="--Select Donar Type--"></select>
                               </div>
                    <div className="form-group">

                    <label>Name</label>
                 <input type="text" className = "form-control input-sm" placeholder ="Enter Name"></input>
                      </div>

                    <div className="form-group">
                    <label>Father Name</label>
                    <input type="text" className = "form-control input-sm" placeholder ="Enter Father Name"></input>
                            </div>

                    <div className="form-group">
                    <label>NIC</label>
                    <input type="email" className = "form-control input-sm" placeholder ="Enter NIC"></input>
                       </div>

                  

                    <div className="form-group">
                    <label>Comment</label>
                    <textarea style={{width: "100%", maxWidth: "100%"}} type="text" className = "form-control input-sm" placeholder ="Enter Comment"></textarea>
                   
                        

                    </div>


                    <div className="form-group">

                        <input type="submit" className="btn btn btn-success active" value="Save Comment" name=" SaveComment">
</input>
                    </div>

                

            </div>


        </div>
    </div>


</section>
<KonnectSlider/>
<Footer/>
        </>
    )
}
export default Donar