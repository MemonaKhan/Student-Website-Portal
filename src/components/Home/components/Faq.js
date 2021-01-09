import React from 'react';


import { Link } from 'react-router-dom';
import TopBar from './TopBar';
import Nav from './Nav';
import KonnectSlider from './KonnectSlider';
import Footer from './Footer';
const Faq=()=>
{
    return(
        <>
        <TopBar/>
        <Nav/>
       
      
      <section>
        <div className="container">
        <header className="inner"> 

  <div className="header-content">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <h1 id="homeHeading"><Link to="/">Home</Link> / <span>Faq</span></h1>
      </div>
    </div>
  </div>
  </div>
</header>
          <div className="row"> 
            <div className="col-md-12">
              <h2 className="para-heading ">Frequently Asked Questions</h2>
              <div className="panel-group" id="accordion">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-expanded="true">Question 1</a> </h4>
                  </div>
                  <div id="collapse1" className="panel-collapse collapse in">
                    <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, lorem velefficitur interdum, massa lacus hendrerit mi.Duis feugiat metus quis nunc rutrum, sit amet sagittis eros varius. Proin nulla dolor, porta id vestibulum nec, tempus id purus. In viverra commodo tellus, vitae iaculis dui rutrum eu. Cum sociis natoque penatibus et magnis dis parturient montes.</div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">Question 2</a> </h4>
                  </div>
                  <div id="collapse2" className="panel-collapse collapse">
                    <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, lorem velefficitur interdum, massa lacus hendrerit mi.Duis feugiat metus quis nunc rutrum, sit amet sagittis eros varius. Proin nulla dolor, porta id vestibulum nec, tempus id purus. In viverra commodo tellus, vitae iaculis dui rutrum eu. Cum sociis natoque penatibus et magnis dis parturient montes.</div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title"> <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">Question 3</a> </h4>
                  </div>
                  <div id="collapse3" className="panel-collapse collapse">
                    <div className="panel-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, lorem velefficitur interdum, massa lacus hendrerit mi.Duis feugiat metus quis nunc rutrum, sit amet sagittis eros varius. Proin nulla dolor, porta id vestibulum nec, tempus id purus. In viverra commodo tellus, vitae iaculis dui rutrum eu. Cum sociis natoque penatibus et magnis dis parturient montes.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <aside className="dark-bg aside-cta">
        <div className="container text-center">
          <div className="row">
            <div className="col-sm-12 col-xs-12">
              <h3 className="margin-10 text-white cta-heading">Are you Looking for good Trainer?</h3>
              <a href="javascript:void(0)" className="template-button"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Contact Now</a> </div>
          </div>
        </div>
      </aside>
      <KonnectSlider/>
      <Footer/>
        </>
    )
}
export default Faq;