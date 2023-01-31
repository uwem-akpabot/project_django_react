import { Outlet, Link } from 'react-router-dom';

const Header = () => {
  let {user, logoutUser} = '';
//   let {user, logoutUser} = useContext(AuthContext);
  return (
    <>
    <div className="header-area">
        <div className="row align-items-center">
            <div className="col-md-6 col-sm-8 clearfix">
                <div className="nav-btn pull-left">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="search-box pull-left">
                    <form action="#">
                        <input type="text" name="search" placeholder="Search..." required />
                        <i className="ti-search"></i>
                    </form>
                </div>
            </div>
            <div className="col-md-6 col-sm-4 clearfix">
                <ul className="notification-area pull-right">
                    <li id="full-view"><i className="ti-fullscreen"></i></li>
                    <li id="full-view-exit"><i className="ti-zoom-out"></i></li>
                    <li className="dropdown">
                        <i className="ti-bell dropdown-toggle" data-toggle="dropdown">
                            <span>2</span>
                        </i>
                        <div className="dropdown-menu bell-notify-box notify-box">
                            <span className="notify-title">You have 3 new notifications <a href="#">view all</a></span>
                            <div className="nofity-list">
                                <a href="#" className="notify-item">
                                    <div className="notify-thumb"><i className="ti-key btn-danger"></i></div>
                                    <div className="notify-text">
                                        <p>You have Changed Your Password</p>
                                        <span>Just Now</span>
                                    </div>
                                </a>
                                <a href="#" className="notify-item">
                                    <div className="notify-thumb"><i className="ti-comments-smiley btn-info"></i></div>
                                    <div className="notify-text">
                                        <p>New Commetns On Post</p>
                                        <span>30 Seconds ago</span>
                                    </div>
                                </a>
                                <a href="#" className="notify-item">
                                    <div className="notify-thumb"><i className="ti-key btn-primary"></i></div>
                                    <div className="notify-text">
                                        <p>Some special like you</p>
                                        <span>Just Now</span>
                                    </div>
                                </a>
                                <a href="#" className="notify-item">
                                    <div className="notify-thumb"><i className="ti-comments-smiley btn-info"></i></div>
                                    <div className="notify-text">
                                        <p>New Commetns On Post</p>
                                        <span>30 Seconds ago</span>
                                    </div>
                                </a>
                                <a href="#" className="notify-item">
                                    <div className="notify-thumb"><i className="ti-key btn-primary"></i></div>
                                    <div className="notify-text">
                                        <p>Some special like you</p>
                                        <span>Just Now</span>
                                    </div>
                                </a>
                                <a href="#" className="notify-item">
                                    <div className="notify-thumb"><i className="ti-key btn-danger"></i></div>
                                    <div className="notify-text">
                                        <p>You have Changed Your Password</p>
                                        <span>Just Now</span>
                                    </div>
                                </a>
                                <a href="#" className="notify-item">
                                    <div className="notify-thumb"><i className="ti-key btn-danger"></i></div>
                                    <div className="notify-text">
                                        <p>You have Changed Your Password</p>
                                        <span>Just Now</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="dropdown">
                        <i className="fa fa-envelope-o dropdown-toggle" data-toggle="dropdown"><span>3</span></i>
                        <div className="dropdown-menu notify-box nt-enveloper-box">
                            <span className="notify-title">You have 3 new notifications <a href="#">view all</a></span>
                            <div className="nofity-list">
                                <a href="#" className="notify-item">
                                    <div className="notify-thumb">
                                        <img src="assets/images/author/author-img1.jpg" alt="image" />
                                    </div>
                                    <div className="notify-text">
                                        <p>Aglae Mayer</p>
                                        <span className="msg">Hey I am waiting for you...</span>
                                        <span>3:15 PM</span>
                                    </div>
                                </a>
                                <a href="#" className="notify-item">
                                    <div className="notify-thumb">
                                        <img src="assets/images/author/author-img2.jpg" alt="image" />
                                    </div>
                                    <div className="notify-text">
                                        <p>Aglae Mayer</p>
                                        <span className="msg">When you can connect with me...</span>
                                        <span>3:15 PM</span>
                                    </div>
                                </a>
                                <a href="#" className="notify-item">
                                    <div className="notify-thumb">
                                        <img src="assets/images/author/author-img3.jpg" alt="image" />
                                    </div>
                                    <div className="notify-text">
                                        <p>Aglae Mayer</p>
                                        <span className="msg">I missed you so much...</span>
                                        <span>3:15 PM</span>
                                    </div>
                                </a>
                                <a href="#" className="notify-item">
                                    <div className="notify-thumb">
                                        <img src="assets/images/author/author-img4.jpg" alt="image" />
                                    </div>
                                    <div className="notify-text">
                                        <p>Aglae Mayer</p>
                                        <span className="msg">Your product is completely Ready...</span>
                                        <span>3:15 PM</span>
                                    </div>
                                </a>
                                <a href="#" className="notify-item">
                                    <div className="notify-thumb">
                                        <img src="assets/images/author/author-img2.jpg" alt="image" />
                                    </div>
                                    <div className="notify-text">
                                        <p>Aglae Mayer</p>
                                        <span className="msg">Hey I am waiting for you...</span>
                                        <span>3:15 PM</span>
                                    </div>
                                </a>
                                <a href="#" className="notify-item">
                                    <div className="notify-thumb">
                                        <img src="assets/images/author/author-img1.jpg" alt="image" />
                                    </div>
                                    <div className="notify-text">
                                        <p>Aglae Mayer</p>
                                        <span className="msg">Hey I am waiting for you...</span>
                                        <span>3:15 PM</span>
                                    </div>
                                </a>
                                <a href="#" className="notify-item">
                                    <div className="notify-thumb">
                                        <img src="assets/images/author/author-img3.jpg" alt="image" />
                                    </div>
                                    <div className="notify-text">
                                        <p>Aglae Mayer</p>
                                        <span className="msg">Hey I am waiting for you...</span>
                                        <span>3:15 PM</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="settings-btn">
                        <i className="ti-settings"></i>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" data-navbar-on-scroll="light">
      <div className="container"><a className="navbar-brand" href=""><img src="" height="35" alt="logo" /> 9jaCodeKids</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto pt-2 pt-lg-0 font-base align-items-center">
            <li className="nav-item"><Link to="/" className="nav-link px-3">Home</Link></li>
            <li className="nav-item"><Link to="/" className="nav-link px-3">How It Works</Link></li>
            <li className="nav-item"><Link to="/" className="nav-link px-3">Explore</Link></li>
          </ul>
          {user ? (
              <button onClick={logoutUser} className="btn btn-danger">Logout</button>
            ) : (
            <Link to="/login" className="btn btn-secondary-outline">Login</Link>
            )}
            
            <Link to="/register" className="btn btn-primary">Sign Up</Link>
        </div>
      </div>
          
      <Outlet />
    </nav> */}
  </>
  )
}

export default Header
