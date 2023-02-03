import React, { useState, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import logo from './../images/logo.png';
import Footer from '../components/Footer';
import Header from '../components/Header';
import OffsetArea from '../components/OffsetArea';
import Breadcrumb from '../components/Breadcrumb';
import Dashboard from './Dashboard';
import PatientsList from '../pages/patients/PatientsList';
import LabResults from '../pages/patients/LabResults';
import Prescriptions from '../pages/patients/Prescriptions';
import BookAppointment from '../pages/patients/BookAppointment';
import MedicalRecords from '../pages/patients/MedicalRecords';

const Sidebar = () => {
    let {user, logoutUser} = useContext(AuthContext);

    const [check, setCheck] = useState(null);

    const dashboard = () => {
        setCheck(<Dashboard />);
    } 
    const patientList = () => {
        setCheck(<PatientsList />);
    }
    const labResults = () => {
        setCheck(<LabResults />);
    } 
    const prescriptions = () => {
        setCheck(<Prescriptions />);
    }
    const bookAppointment = () => {
        setCheck(<BookAppointment />);
    } 
    const medicalRecords = () => {
        setCheck(<MedicalRecords />);
    }

    return (
    <>
    <div className="sidebar-menu">
        <div className="sidebar-header">
            <div className="logo">
                <a href=""><img src={logo} alt="logo" style={{ width:"89%" }} /></a> 
            </div>
        </div>
        <div className="main-menu">
            <div className="menu-inner">
                <nav>
                    <ul className="metismenu" id="menu">
                        <li className="">
                            <a onClick={dashboard} className="otherlinks"> <i className="ti-map-alt"></i> <span>Dashboard</span></a>
                        </li>

                        <li><a onClick={patientList} className="otherlinks">Patient Info</a></li>
                     
                        <li>
                            <a href="javascript:void(0)" aria-expanded="true"><i className="fa fa-ambulance"></i> 
                            <span>Patients' Management</span></a>
                            <ul className="collapse">
                                <li><a href="javascript:void(0)" aria-expanded="true">
                                    <i className="fa fa-user"></i><span>Patients Portal</span></a>
                                    <ul className="collapse">
                                        <li><a onClick={patientList} className="otherlinks">Patient Info</a></li>
                                        <li><a onClick={labResults} className="otherlinks">Lab Results</a></li>
                                        <li><a onClick={prescriptions} className="otherlinks">Prescriptions</a></li>
                                        <li><a onClick={bookAppointment} className="otherlinks">Appointment</a></li>
                                        <li><a onClick={medicalRecords} className="otherlinks">Medical Records</a></li>
                                    </ul>
                                </li>
                                <li>
                                <a href="javascript:void(0)" aria-expanded="true"><i className="ti-layout-sidebar-left"></i><span>
                                    Nursing </span></a>
                                    <ul className="collapse">
                                        <li><Link to="/track-patient-vitals">Patient Vitals</Link></li>
                                        <li><Link to="/order-lab-tests">Order LabTests</Link></li>
                                        <li><Link to="/patient-medication">Patient Medication</Link></li>
                                        <li><Link to="/refer-patient">Refer Patient</Link></li>
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
                            <a onClick={dashboard} className="otherlinks"> <i className="ti-settings"></i> <span>Settings</span></a>
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
        
        {check}

        <Footer />
        <OffsetArea />
    </div>
    </>
  )
}

export default Sidebar
