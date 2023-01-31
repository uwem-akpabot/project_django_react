import React, { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Sidebar = (props) => {
  let {user, logoutUser} = useContext(AuthContext);

  return (
	<nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="text-center sidebar-brand-wrapper d-flex align-items-center">
		<a class="sidebar-brand brand-logo" href="index.html"><img src="assets/images/logo.svg" alt="logo" /></a>
          <a class="sidebar-brand brand-logo-mini pl-4 pt-3" href="index.html"><img src="assets/images/logo-mini.svg" alt="logo" /></a>
        </div>
        <ul className="nav">
          <li className="nav-item nav-profile">
            <a href="#" className="nav-link">
              <div className="nav-profile-image">
                <img src="assets/images/faces/face1.jpg" alt="profile" />
                <span className="login-status online"></span>
              </div>
              <div className="nav-profile-text d-flex flex-column pr-3">
                <span className="font-weight-medium mb-2">Henry Klein</span>
                <span className="font-weight-normal">$8,753.00</span>
              </div>
              <span className="badge badge-danger text-white ml-3 rounded">3</span>
            </a>
          </li>
          <li className="nav-item">
			<Link to="/" className="nav-link">
              <i className="mdi mdi-home menu-icon"></i>
              <span className="menu-title">Dashboard</span>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
              <i className="mdi mdi-crosshairs-gps menu-icon"></i>
              <span className="menu-title">ID Finder</span>
              <i className="menu-arrow"></i>
            </a>
            <div className="collapse" id="ui-basic">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  <a className="nav-link" href="pages/ui-features/buttons.html">Buttons</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/ui-features/dropdowns.html">Dropdowns</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="pages/ui-features/typography.html">Typography</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="pages/icons/mdi.html">
              <i className="mdi mdi-contacts menu-icon"></i>
              <span className="menu-title">Icons</span>
            </a>
          </li>
          <li className="nav-item sidebar-actions">
            <div className="nav-link">
              <div className="mt-4">
                <div className="border-none">
                  <p className="text-black">Notification</p>
                </div>
                <ul className="mt-4 pl-0">
				{user ? (
					<li className="mt-4 pl-0">
						<button onClick={logoutUser} className="sidebar-link">
						<i className="align-middle" data-feather="align-left"></i> Log out</button>
					</li>
				) : (
					<li className="sidebar-item">
						<Link to="/login" className="sidebar-link">
							<i className="align-middle" data-feather="align-left"></i> Login
						</Link>
					</li>
				)}
                </ul>
				
              </div>
            </div>
          </li>
        </ul>
		<Outlet />
      </nav>
  )
}

export default Sidebar
