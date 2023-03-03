import React from 'react';

const FooterWebsite = () => {
  return (
    <>
      <footer className="footer-main">
  <div className="footer-top">
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="about-widget">
            <div className="footer-logo">
              <figure>
                <a href="index.html">
                  <img src="images/logo-2.png" alt="" />
                </a>
              </figure>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, temporibus?</p>
            <ul className="location-link">
              <li className="item">
                <i className="fa fa-map-marker"></i>
                <p>Modamba, NY 80021, United States</p>
              </li>
              <li className="item">
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                <a href="#">
                  <p>Support@medic.com</p>
                </a>
              </li>
              <li className="item">
                <i className="fa fa-phone" aria-hidden="true"></i>
                <p>(88017) +123 4567</p>
              </li>
            </ul>
            <ul className="list-inline social-icons">
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
              <li><a href="#"><i className="fa fa-vimeo"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <h6>Services</h6>
          <ul className="menu-link">
            <li>
              <a href="#">
                <i className="fa fa-angle-right" aria-hidden="true"></i>Orthopadic Liabilities</a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-angle-right" aria-hidden="true"></i>Dental Clinic</a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-angle-right" aria-hidden="true"></i>Dormamu Clinic</a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-angle-right" aria-hidden="true"></i>Psycological Clinic</a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-angle-right" aria-hidden="true"></i>Gynaecological Clinic</a>
            </li>
          </ul>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <div className="social-links">
            <h6>Recent Posts</h6>
            <ul>
              <li className="item">
                <div className="media">
                  <div className="media-left">
                    <a href="#">
                      <img className="media-object" src="images/blog/post-thumb-small.jpg" alt="post-thumb" />
                    </a>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading"><a href="#">Post Title</a></h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolorem.</p>
                  </div>
                </div>
              </li>
              <li className="item">
                <div className="media">
                  <div className="media-left">
                    <a href="#">
                      <img className="media-object" src="images/blog/post-thumb-small.jpg" alt="post-thumb" />
                    </a>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">
                      <a href="#">Post Title</a>
                    </h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolorem.</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <div className="container clearfix">
      <div className="copyright-text">
        <p>&copy; Copyright 2018. BEYOND'S HEALTHARE. All Rights Reserved . Developer:
          <a href="">ICA Specs Ltd</a>
        </p>
      </div>
      <ul className="footer-bottom-link">
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="about.html">About</a>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</footer>
    </>
  )
}

export default FooterWebsite
