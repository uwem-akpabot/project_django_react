import React from 'react';

const Pagetitle = () => {
//   let {user, logoutUser} = useContext(AuthContext);

  return (
    <>
    <div className="page-title-area">
      <div className="row align-items-center">
          <div className="col-sm-6">
              <div className="breadcrumbs-area clearfix">
                  <h4 className="page-title pull-left">Dashboard</h4>
                  <ul className="breadcrumbs pull-left">
                      <li><a href="index.html">Home</a></li>
                      <li><span>Dashboard</span></li>
                  </ul>
              </div>
          </div>
          <div className="col-sm-6 clearfix">
              <div className="user-profile pull-right">
                  <img className="avatar user-thumb" src="assets/images/author/avatar.png" alt="avatar" />
                  <h4 className="user-name dropdown-toggle" data-toggle="dropdown">Name<i className="fa fa-angle-down"></i></h4>
                  <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">Message</a>
                      <a className="dropdown-item" href="#">Sengs</a>
                      {/* {user ? (
                        <a className="dropdown-item" href="#">Log Out</a>
                        ) : (
                        <Link to="/login" className="btn btn-secondary-outline">Login</Link>
                      )} */}
                  </div>
              </div>
          </div>
      </div>
  </div>
  </>
  )
}

export default Pagetitle
