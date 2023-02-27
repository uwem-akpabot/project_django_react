import React from 'react';

const FooterWebsite = () => {
  return (
    <>
      <footer className="footer-area section-padding">
        <div className="footer-widget">
            <div className="container">
                <div className="row">
                    <div className="col-xl-2 col-lg-3">
                        <div className="single-widget-home mb-5 mb-lg-0">
                            <h3 className="mb-4">top products</h3>
                            <ul>
                                <li className="mb-2"><a href="#">managed website</a></li>
                                <li className="mb-2"><a href="#">managed reputation</a></li>
                                <li className="mb-2"><a href="#">power tools</a></li>
                                <li><a href="#">marketing service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-5 offset-xl-1 col-lg-6">
                        <div className="single-widget-home mb-5 mb-lg-0">
                            <h3 className="mb-4">newsletter</h3>
                            <p className="mb-4">You can trust us. we only send promo offers, not a single.</p>  
                            <form action="#">
                                <input type="email" placeholder="Your email here" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your email here'" required />
                                <button type="submit" className="template-btn">subscribe now</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-3 offset-xl-1 col-lg-3">
                        <div className="single-widge-home">
                            <h3 className="mb-4">instagram feed</h3>
                            <div className="feed">
                                <img src="assets/images/feed1.jpg" alt="feed" />
                                <img src="assets/images/feed2.jpg" alt="feed" />
                                <img src="assets/images/feed3.jpg" alt="feed" />
                                <img src="assets/images/feed4.jpg" alt="feed" />
                                <img src="assets/images/feed5.jpg" alt="feed" />
                                <img src="assets/images/feed6.jpg" alt="feed" />
                                <img src="assets/images/feed7.jpg" alt="feed" />
                                <img src="assets/images/feed8.jpg" alt="feed" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-6">
                        <span>
Copyright &copy; BEYOND'S HEALTHCARE<script>document.write(new Date().getFullYear());</script> All rights reserved.
</span>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="social-icons">
                            <ul>
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                <li><a href="#"><i className="fa fa-behance"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default FooterWebsite
