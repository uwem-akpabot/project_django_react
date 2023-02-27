import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import FooterWebsite from './FooterWebsite'
import logo from '../images_website/logo.png';
// t feature1 from '../images_website/images/feature1.png';

const Navbar = () => {
  return (
    <>
    <div className="container-fluid bg-light p-0 wow fadeIn" data-wow-delay="0.1s">
        <div className="row gx-0 d-none d-lg-flex">
            <div className="col-lg-7 px-5 text-start">
                <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                    <small className="fa fa-map-marker-alt text-primary me-2"></small>
                    <small>Plot 123 Street Abc, Karu, Abuja, Nigeria &nbsp; </small>
                </div>
                <div className="h-100 d-inline-flex align-items-center py-3">
                    <small className="far fa-clock text-primary me-2"></small>
                    <small> &middot; &nbsp; Mon - Fri : 09.00 AM - 09.00 PM</small>
                </div>
            </div>
            <div className="col-lg-5 px-5 text-end">
                <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                    <small className="fa fa-phone-alt text-primary me-2"></small>
                    <small>+234 (0)801 234 678</small>
                </div>
                <div className="h-100 d-inline-flex align-items-center">
                    <a className="btn btn-sm-square text-primary me-1" href=""><i className="fa fa-facebook-f"></i></a>
                    <a className="btn btn-sm-square text-primary me-1" href=""><i className="fa fa-twitter"></i></a>
                    <a className="btn btn-sm-square text-primary me-1" href=""><i className="fa fa-linkedin"></i></a>
                    <a className="btn btn-sm-square text-primary me-0" href=""><i className="fa fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>
    
    <nav className="navbar navbar-expand-lg navbar-light sticky-top p-0 wow fadeIn" data-wow-delay="0.1s">
    <div className="container">
        <img src={logo} alt="" title="" style={{width:"70px" }} /> &nbsp; 
        <a class="navbar-brand" href="#" style={{ color:"purple"}}><strong>Beyond's </strong>Healthcare</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link text-dark" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-dark" href="#">Features</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-dark" href="#">Pricing</a>
            </li>
            </ul>
            <span class="navbar-text text-dark">
                <button className="btn btn-primary btn-lg">Take action</button>
            </span>
        </div>
    </div>
  
  {/* <a href="" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h2 className="m-0 text-primary">
            <img src={logo} alt="" title="" style={{width:"70px" }} /> <strong>BEYOND'S</strong></h2>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <Link to="/" className="nav-item active">Home</Link>
                <Link to="/about" className="nav-item">About</Link>
                <Link to="/service" className="nav-item">Service</Link>
                <div className="nav-item dropdown">
                    <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu rounded-0 rounded-bottom m-0">
                    <Link to="/" className="dropdown-item">Feature</Link>
                    </div>
                </div>
                <Link to="/contact" className="nav-item">Contact</Link>
            </div>
            <a href="" className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block float-right">Appointment<i className="fa fa-arrow-right ms-3"></i></a>
        </div> */}
    </nav>

    <header className="header-area">
        {/* <div className="header-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 d-md-flex">
                        <h6 className="mr-3"><span className="mr-2"><i className="fa fa-mobile"></i></span> call us now! +1 305 708 2563</h6>
                        <h6 className="mr-3"><span className="mr-2"><i className="fa fa-envelope-o"></i></span> medical@example.com</h6>
                        <h6><span className="mr-2"><i className="fa fa-map-marker"></i></span> Find our Location</h6>
                    </div>
                    <div className="col-lg-3">
                        <div className="social-links">
                            <ul>
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fa fa-vimeo"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        
        {/* <div id="header" id="home"> */}

        {/* <div id="header home"> 
            <div className="container">
                <div className="row align-items-center justify-content-between d-flex">
                <div id="logo">
                    <a href="index.html"><img src="assets/images/logo/logo.png" alt="" title="" /></a>
                </div>
                <nav id="nav-menu-container">
                    <ul className="nav-menu">
                        <li className="menu-active"><a href="index.html">Home</a></li>
                        <li><a href="departments.html">departments</a></li>
                        <li><a href="doctors.html">doctors</a></li>
                        <li className="menu-has-children"><a href="">Pages</a>
                            <ul>
                                <li><a href="about.html">about us</a></li>
                                <li><a href="elements.html">elements</a></li>
                            </ul>
                        </li>
                        <li className="menu-has-children"><a href="">blog</a>
                            <ul>
                                <li><a href="blog-home.html">blog home</a></li>
                                <li><a href="blog-details.html">blog details</a></li>
                            </ul>
                        </li>
                        <li><a href="contact.html">Contact</a></li>			          				          
                    </ul>
                </nav>	    		
                </div>
            </div>
        </div> */}
    </header>
    <Outlet />
    <FooterWebsite />
    </>
  )
}
export default Navbar
