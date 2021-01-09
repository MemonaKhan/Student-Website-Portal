import React from 'react';

import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
    <section class="main-footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-6  col-12">
                    <div class="footer-widget address">
                        <h3>Contact</h3>
                        <p>
                            <i class="fa fa-address-card-o" aria-hidden="true"></i> <span>
                                Suit# 52, Main Clifton Road <br/>
                                Karachi, Pakistan
                            </span>
                        </p>
                        <p><i class="fa fa-envelope-o" aria-hidden="true"></i> <span>info@learndigitaly.com</span></p>
                        <p>
                            <i class="fa fa-volume-control-phone" aria-hidden="true"></i> <span>
                                +92-306-2726234 <br/>
                                +92-300-2385534
                            </span>
                        </p>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 col-12">
                    <div class="footer-widget @*quicl-links*@">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><i class="fa  fa-angle-right"></i> <Link to="/Client/ViewTopic">Discussion Forum</Link></li>
                            
                            <li><i class="fa  fa-angle-right"></i> <Link to="/Client/team">Team</Link></li>
                            <li><i class="fa  fa-angle-right"></i> <Link to="/Client/AdvisoryBoardview">Advisory Board</Link></li>
                            <li><i class="fa  fa-angle-right"></i> <Link to="/Client/About">About Us</Link></li>
                            <li><i class="fa  fa-angle-right"></i> <Link to="/Client/Contact">Contact Us</Link></li>
                            <li><i class="fa  fa-angle-right"></i> <Link to="/Client/Events">Events</Link></li>
                            <li><i class="fa  fa-angle-right"></i> <Link to="/Client/Login">Login</Link></li>
                            <li><i class="fa  fa-angle-right"></i> <Link to="/Client/Register">Sign Up</Link></li>
                            <li><i class="fa  fa-angle-right"></i> <Link to="/Client/Termscondition">Terms And Conditions</Link></li>
                            <li><i class="fa  fa-angle-right"></i> <Link to="/Client/Privacy">Privacy Policy</Link></li>
                            <li><i class="fa  fa-angle-right"></i> <Link to="/Client/Help">Help</Link></li>
                            <li><i class="fa  fa-angle-right"></i> <Link to="/Client/donar">Donar</Link></li>
                            <li><i class="fa  fa-angle-right"></i> <Link to="/Client/blog">Blog</Link></li>
                            <li><i class="fa  fa-angle-right"></i> <Link to="/Client/Collaborations">Collaborations</Link></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 col-12">
                    <div class="footer-widget">
                        <h3>News Letter</h3>
                        <p>Don't Miss the Latest News, Information, Offerings &amp; Articles sent Straight to your Inbox.</p>
                        <p>Subscribe to Our Newsletter</p>
                        <form>
                            <div class="input-container">

                                <input class="input-field" type="text" placeholder="Enter Email" name="psw"></input>
                                <a href="#">
                               <button class="btn btn-success"><i class="fa fa-key icon"></i></button>     
                                </a>

                            </div>



                        </form>
                    </div>                   
                </div>



            </div>
        </div>
    </section>
    
      {/*</Main footer>*/}

      {/*</copyright footer>*/}
      <footer>
        <div class='container'>
          <div class='row'>
            <div class='col-md-6 col-sm-6 text-left'>
              {/* Footer Social Icons */}
              <div class='contact-social'>
                <p>
                  <a href='#'>
                    {' '}
                    <i class='fa fa-twitter'></i>{' '}
                  </a>{' '}
                  <a href='#'>
                    {' '}
                    <i class='fa fa-facebook'></i>{' '}
                  </a>{' '}
                  <a href='#'>
                    {' '}
                    <i class='fa fa-google-plus'></i>{' '}
                  </a>{' '}
                  <a href='#'>
                    {' '}
                    <i class='fa fa-rss'></i>{' '}
                  </a>{' '}
                  <a href='#'>
                    {' '}
                    <i class='fa fa-instagram'></i>{' '}
                  </a>
                </p>
              </div>
            </div>

            {/*Footer Copy rights-->*/}
            <div class='col-md-6 col-sm-6 text-right'>
              <p> &copy;  Copyright 2020 Be Software Solutions </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
