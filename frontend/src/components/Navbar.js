import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import FooterWebsite from './FooterWebsite';

const Navbar = () => {
  return (
    <>
      <div class="super_container">
        <header className="header trans_200">
            <div className="top_bar">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="top_bar_content d-flex flex-row align-items-center justify-content-start">
                                <div className="top_bar_item"><Link to="/">FAQ</Link></div>
                                <div className="top_bar_item"><Link to="/">Request an Appointment</Link></div>
                                <div className="emergencies  d-flex flex-row align-items-center justify-content-start ml-auto">For Emergencies: +563 47558 623</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header_container">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="header_content d-flex flex-row align-items-center justify-content-start">
                                <nav className="main_nav ml-auto">
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/about">About</Link></li>
                                        <li><Link to="/services">Services</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                        <li><Link to="/login">Login</Link></li>
                                        <li><Link to="/register">Register</Link></li>
                                    </ul>
                                </nav>
                                <div className="hamburger ml-auto"><i className="fa fa-bars" aria-hidden="true"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="logo_container_outer">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="logo_container">
                                <a href="#">
                                    <div className="logo_content d-flex flex-column align-items-start justify-content-center">
                                        <div className="logo_line"></div>
                                        <div className="logo d-flex flex-row align-items-center justify-content-center">
                                            <div className="logo_text">Care<span>Med</span></div>
                                            <div className="logo_box">+</div>
                                        </div>
                                        <div className="logo_sub">Health Care Center</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>	
            </div>
        </header>
        <div className="menu_container menu_mm">
            <div className="menu_close_container">
                <div className="menu_close"></div>
            </div>
            <div className="menu_inner menu_mm">
                <div className="menu menu_mm">
                    <ul className="menu_list menu_mm">
                        <li className="menu_item menu_mm"><Link to="/">Home</Link></li>
                        <li className="menu_item menu_mm"><Link to="/about">About</Link></li>
                        <li className="menu_item menu_mm"><Link to="/services">Services</Link></li>
                        <li className="menu_item menu_mm"><Link to="/contact">Contact</Link></li>
                        <li className="menu_item menu_mm"><Link to="/login">Login</Link></li>
                        <li className="menu_item menu_mm"><Link to="/register">Register</Link></li>
                    </ul>
                </div>
                <div className="menu_extra">
                    <div className="menu_appointment"><Link to="/">Request an Appointment</Link></div>
                    <div className="menu_emergencies">For Emergencies: +563 47558 623</div>
                </div>
            </div>
        </div>

        <Outlet />
        <FooterWebsite />
      </div>
    </>
  )
}
export default Navbar
