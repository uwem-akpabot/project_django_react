import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Outlet, Link } from 'react-router-dom';
import Header from './Header';
import Breadcrumb from './Breadcrumb';
import OffsetArea from './OffsetArea';
import Footer from './Footer';

const Sidebar = () => {
  let {authTokens, logoutUser} = useContext(AuthContext)
  let {user} = useContext(AuthContext);
  
  return (
    <>
    <div className="sidebar-menu">
        <div className="sidebar-header">
            <div className="logo">
                {/* <a href=""><img src={logo} alt="logo" style={{ width:"89%" }} /></a>  */}
            </div>
        </div>
        <div className="main-menu">
            <div className="menu-inner">
                <nav>
                    <ul className="metismenu" id="menu">
                        <li className="">
                            <Link to="/dash" className="otherlinks"><i className="ti-map-alt"></i> <span>Dashboard</span></Link>
                        </li>
                        <li><Link to="/add-patient" className="otherlinks"><i className="fa fa-ambulance"></i><span> Add Patient</span></Link></li>
                        <li><Link to="/manage-patients" className="otherlinks"><i className="ti-palette"></i><span> Manage Patients</span></Link></li>                 
                        <li>
                            <a href="javascript:void(0)" aria-expanded="true"><i className="fa fa-ambulance"></i> 
                            <span>Patients' Management</span></a>
                            <ul className="collapse">
                                <li><a href="javascript:void(0)" aria-expanded="true">
                                    <i className="fa fa-user"></i><span>Patients Portal</span></a>
                                    <ul className="collapse">
                                        <li><Link to="/add-patient" className="otherlinks">Add Patient</Link></li>
                                        <li><Link to="/manage-patients" className="otherlinks">Manage Patients</Link></li>
                                        <li><Link to="/" className="otherlinks">Lab Results</Link></li>
                                        <li><Link to="/" className="otherlinks">Prescriptions</Link></li>
                                        <li><Link to="/" className="otherlinks">Appointment</Link></li>
                                        <li><Link to="/" className="otherlinks">Medical Records</Link></li>
                                    </ul>
                                </li>
                                <li>
                                <a href="javascript:void(0)" aria-expanded="true"><i className="ti-layout-sidebar-left"></i><span>
                                    Nursing </span></a>
                                    <ul className="collapse">
                                        <li><Link to="/" className="otherlinks">Patient Vitals</Link></li>
                                        <li><Link to="/" className="otherlinks">Order LabTests</Link></li>
                                        <li><Link to="/" className="otherlinks">Patient Medication</Link></li>
                                        <li><Link to="/" className="otherlinks">Refer Patient</Link></li>
                                    </ul>
                                </li>
                                <li><a href="javascript:void(0)" aria-expanded="true"><i className="ti-palette"></i><span>Laboratory</span></a>
                                    <ul className="collapse">
                                        <li><a href="" className="otherlinks">Item One</a></li>
                                    </ul>
                                </li>
                                <li><a href="javascript:void(0)" aria-expanded="true">
                                    <i className="fa fa-table"></i><span>Pharmacy</span></a>
                                    <ul className="collapse">
                                        <li><a href="" className="otherlinks">Item One</a></li>
                                    </ul>
                                </li>
                                <li><a href="javascript:void(0)" aria-expanded="true">
                                    <i className="ti-pie-chart"></i><span>Doctor</span></a>
                                    <ul className="collapse">
                                        <li><a href="" className="otherlinks">Item One</a></li>
                                    </ul>
                                </li>
                                <li><a href="javascript:void(0)" aria-expanded="true">
                                    <i className="ti-slice"></i><span>Administrator</span></a>
                                    <ul className="collapse">
                                        <li><a href="" className="otherlinks">Item One</a></li>
                                    </ul>
                                </li>            
                                
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:void(0)" aria-expanded="true"><i className="ti-layers-alt"></i> <span>Inventory</span></a>
                            <ul className="collapse">
                                <li><Link to="/">Item level (1)</Link></li>
                                <li><Link to="/">Item level (1)</Link></li>
                                <li><Link to="/" aria-expanded="true">Item level (1)</Link>
                                    <ul className="collapse">
                                        <li><Link to="/">Item level (2)</Link></li>
                                        <li><Link to="/">Item level (2)</Link></li>
                                        <li><Link to="/">Item level (2)</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/">Item level (1)</Link></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:void(0)" aria-expanded="true"><i className="fa fa-calculator"></i> <span>Billing</span></a>
                            <ul className="collapse">
                                <li><Link to="/">Item level (1)</Link></li>
                                <li><Link to="/">Item level (1)</Link></li>
                                <li><Link to="/" aria-expanded="true">Item level (1)</Link>
                                    <ul className="collapse">
                                        <li><Link to="/">Item level (2)</Link></li>
                                        <li><Link to="/">Item level (2)</Link></li>
                                        <li><Link to="/">Item level (2)</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/">Item level (1)</Link></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:void(0)" aria-expanded="true"><i className="fa fa-globe"></i> 
                            <span>More Tools</span></a>
                            <ul className="collapse">
                                <li><Link to="/">Item level (1)</Link></li>
                                <li><Link to="/">Item level (1)</Link></li>
                                <li><Link to="/" aria-expanded="true">Item level (1)</Link>
                                    <ul className="collapse">
                                        <li><Link to="/">Item level (2)</Link></li>
                                        <li><Link to="/">Item level (2)</Link></li>
                                        <li><Link to="/">Item level (2)</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/">Item level (1)</Link></li>
                            </ul>
                        </li>
                        <li className="">
                            <Link to="/" className="otherlinks"><i className="ti-settings"></i> <span>Settings</span></Link>
                        </li>
                        <li className="">
                            {user ? (
                            <button onClick={logoutUser} className="btn btn-danger ml-4 mt-3">Log Out</button>
                            ) : (
                            <Link to="/login" className="btn btn-secondary-outline">Login</Link>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    
    <div class="main-content">
        <Header />
        <Breadcrumb />
        
        <Outlet />

        <Footer />
        <OffsetArea />
    </div>
    
    </>
  )
}

export default Sidebar
