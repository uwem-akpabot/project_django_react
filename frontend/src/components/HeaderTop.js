import React from 'react';
import logo from '../assets_website/images/logo.png';

const HeaderTop = () => {
  return (
    <>
      <div className="header-top">
      <div className="container clearfix">
            <div className="top-left">
                  <h6>Opening Hours : Saturday to Tuesday - 8am to 10pm</h6>
            </div>
            <div className="top-right">
                  <ul className="social-links">
                        <li>
                              <a href="#">
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                              </a>
                        </li>
                        <li>
                              <a href="#">
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                              </a>
                        </li>
                        <li>
                              <a href="#">
                                    <i className="fa fa-google-plus" aria-hidden="true"></i>
                              </a>
                        </li>
                        <li>
                              <a href="#">
                                    <i className="fa fa-instagram" aria-hidden="true"></i>
                              </a>
                        </li>
                        <li>
                              <a href="#">
                                    <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                              </a>
                        </li>
                  </ul>
            </div>
      </div>
</div>
<section className="header-uper">
      <div className="container clearfix">
            <div className="logo">
                  <figure>
                        <a href="index.html">
                              <img src={logo} alt="" width="130" />
                        </a>
                  </figure>
            </div>
            <div className="right-side">
                  <ul className="contact-info">
                        <li className="item">
                              <div className="icon-box">
                                    <i className="fa fa-envelope-o"></i>
                              </div>
                              <strong>Email</strong>
                              <br />
                              <a href="#">
                                    <span>info@medic.com</span>
                              </a>
                        </li>
                        <li className="item">
                              <div className="icon-box">
                                    <i className="fa fa-phone"></i>
                              </div>
                              <strong>Call Now</strong>
                              <br />
                              <span>+ (88017) - 123 - 4567</span>
                        </li>
                  </ul>
                  <div className="link-btn">
                        <a href="#" className="btn-style-one">Appoinment</a>
                  </div>
            </div>
      </div>
</section>
    </>
  )
}

export default HeaderTop
