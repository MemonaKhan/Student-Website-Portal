import React from 'react';
import {Link} from 'react-router-dom'
import './style.css';

class TopCard extends React.Component {
  render(){
   return(<>
    


  <header class="inner" style={{marginTop:"5%"}}>
  <div class="header-content">
      <div class="container">
          <div class="row">
              <div class="col-sm-12">
                    <h1 id="homeHeading"><Link to="/">Home</Link> / <span>{this.props.pagename} </span></h1>
              </div>
          </div>
      </div>
  </div>
</header>
        </>);
    }
  }

   
  export default TopCard;