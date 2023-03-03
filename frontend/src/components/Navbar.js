import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import FooterWebsite from './FooterWebsite';
import logo from '../images_website/logo.png';
import HeaderTop from './HeaderTop';
import Slider from './Slider';
// t feature1 from '../images_website/images/feature1.png';

const Navbar = () => {
  return (
    <>
    <div class="page-wrapper">
        <HeaderTop />

        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                        aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <a href="index.html">Home</a>
                        </li>
                        <li>
                            <a href="about.html">About</a>
                        </li>
                        <li>
                            <a href="service.html">Service</a>
                        </li>
                        <li>
                            <a href="gallery.html">Gallery</a>
                        </li>
                        <li>
                            <a href="team.html">Team</a>
                        </li>
                        <li>
                            <a href="appointment.html">Appointment</a>
                        </li>
                        <li>
                            <a href="blog.html">Blog</a>
                        </li>
                        <li>
                            <a href="contact.html">Contact</a>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown
                                <span className="caret"></span>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                        <a href="#">Action</a>
                                </li>
                                <li>
                                        <a href="#">Another action</a>
                                </li>
                                <li>
                                        <a href="#">Something else here</a>
                                </li>
                                <li role="separator" className="divider"></li>
                                <li>
                                        <a href="#">Separated link</a>
                                </li>
                                <li role="separator" className="divider"></li>
                                <li>
                                        <a href="#">One more separated link</a>
                                </li>
                            </ul>
                        </li> 
                    </ul>
                </div>
            </div>
        </nav>

        <Slider />
        
        <Outlet />
        <FooterWebsite />
    </div>
    </>
  )
}
export default Navbar
