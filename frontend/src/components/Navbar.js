import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import FooterWebsite from './FooterWebsite'
import logo from '../images_website/logo.png';
// t feature1 from '../images_website/images/feature1.png';

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div id="logo">
        <a href="index.html"><img src={logo} alt="" title="" style={{width:"80px"}} /> BEYOND'S</a>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

{/* <header className="header-area">
        <div className="header-top clearfix">
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
        </div>
        <div id="header home">
            <div className="container">
                <div className="row align-items-center justify-content-between d-flex">
                <div id="logo">
                    <a href="index.html"><img src={logo} alt="" title="" style={{width:"32px"}} /></a>
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
        </div>
    </header> */}

    <Outlet />
    <FooterWebsite />
    </>
  )
}
export default Navbar
