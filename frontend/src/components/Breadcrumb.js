import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Breadcrumb = () => {
  let {user, logoutUser} = useContext(AuthContext);

  return (
    <>
    <div className="page-title-area">
        <div className="row align-items-center">
            <div className="col-sm-6">
                <div className="breadcrumbs-area clearfix">
                    <h4 className="page-title pull-left"><strong>Beyond's Healthcare</strong></h4>
                    <ul className="breadcrumbs pull-left">
                        <li><a href="index.html">Home</a></li>
                        <li><span>Dashboard</span></li>
                    </ul>
                </div>
            </div>
            <div className="col-sm-6 clearfix">
                <div className="user-profile pull-right bg-indigo">
                    <img className="avatar user-thumb" src="assets/images/author/avatar.png" alt="avatar" />
                    <h4 className="user-name dropdown-toggle text-capitalize" data-toggle="dropdown">
                    
                       {user && <>Hello, {user.username}</>} <i className="fa fa-angle-down"></i></h4>

                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Message</a>
                        <a className="dropdown-item" href="#">Settings</a>
                        {user ? (
                            <button onClick={logoutUser} className="btn btn-danger ml-4 mt-3">Log Out</button>
                            ) : (
                            <Link to="/login" className="btn btn-secondary-outline">Login</Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Breadcrumb
