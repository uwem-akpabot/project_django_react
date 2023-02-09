import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Outlet, Link } from 'react-router-dom';
import Header from './Header';
import Breadcrumb from './Breadcrumb';
import OffsetArea from './OffsetArea';
import Footer from './Footer';
import logo from './../images/logo.png'

const Sidebar = () => {
  let {authTokens, logoutUser} = useContext(AuthContext)
  let {user} = useContext(AuthContext);
  
  return (
    <>
    <div class="page-container">
        <div className="sidebar-menu">
            <div className="sidebar-header">
                <div className="logo">
                    <a href=""><img src={logo} alt="logo" style={{ width:"89%" }} /></a>
                </div>
            </div>
            <div className="main-menu">
                <div className="menu-inner">
                    <nav>
                        <ul id="menu">
                            <div id="accordion4" class="according accordion-s3">
                                <div class="card-header nosign">
                                    <Link to="/dash" href="#accordion40">
                                    <i className="fa fa-tachometer"></i> &nbsp; Dashboard</Link>
                                </div>
                                <div class="card-header">
                                    <a class="card-link" data-toggle="collapse" href="#accordion41">
                                    <i className="fa fa-ambulance"></i> &nbsp; Patients</a>
                                </div>
                                <div id="accordion41" class="collapse show" data-parent="#accordion4">
                                    <div class="card-body">
                                        <ul>
                                            <li><Link to="/add-patient" className="otherlinks">Add Patient</Link></li>
                                            <li><Link to="/manage-patients" className="otherlinks">Manage Patients</Link></li>
                                            <li><Link to="/" className="otherlinks">Appointment</Link></li>
                                            <li><Link to="/" className="otherlinks">Medical Records</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="card-header">
                                    <a class="collapsed card-link" data-toggle="collapse" href="#accordion42">
                                    <i className="ti-palette"></i> &nbsp; Nursing</a>
                                </div>
                                <div id="accordion42" class="collapse" data-parent="#accordion4">
                                    <div class="card-body">
                                        <ul>
                                            <li><Link to="/" className="otherlinks">Patient Vitals</Link></li>
                                            <li><Link to="/" className="otherlinks">Order LabTests</Link></li>
                                            <li><Link to="/" className="otherlinks">Refer Patient</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="card-header">
                                    <a class="collapsed card-link" data-toggle="collapse" href="#accordion43">
                                    <i className="fa fa-flask"></i> &nbsp; Laboratory</a>
                                </div>
                                <div id="accordion43" class="collapse" data-parent="#accordion4">
                                    <div class="card-body">
                                        <ul>
                                            <li><Link to="/" className="otherlinks">Lab Results</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="card-header">
                                    <a class="collapsed card-link" data-toggle="collapse" href="#accordion44">
                                    <i className="fa fa-medkit"></i> &nbsp; Pharmacy</a>
                                </div>
                                <div id="accordion44" class="collapse" data-parent="#accordion4">
                                    <div class="card-body">
                                        <ul>
                                            <li><Link to="/" className="otherlinks">Patient Medication</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="card-header">
                                    <a class="collapsed card-link" data-toggle="collapse" href="#accordion45">
                                    <i className="fa fa-stethoscope"></i> &nbsp; Doctor</a>
                                </div>
                                <div id="accordion45" class="collapse" data-parent="#accordion4">
                                    <div class="card-body">
                                        <ul>
                                            <li><Link to="/" className="otherlinks">Prescriptions</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        
        <div class="main-content">
            <Header />
            <Breadcrumb />
            
                <Outlet />

            {/* <Footer /> */}
            <OffsetArea />
        </div>
        <Footer />
    </div>
    </>
  )
}

export default Sidebar
