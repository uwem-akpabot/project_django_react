import React, { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
// import logo from '../media/assets/img/android-chrome-512x512.png';

const Header = () => {
  let {user, logoutUser} = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" data-navbar-on-scroll="light">
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
            
            <Link to="/login" className="btn btn-primary">Sign Up</Link>
        </div>
      </div>
          
      <Outlet />
    </nav>
  )
}

export default Header


          

// App.js

//import { Outlet, Link } from "react-router-dom";
// // import PrivateRoute from './utils/PrivateRoute'
// import './App.css';

// function App() {
//   const appname = '9jaCodeKids';

//   return (
//     <div className="App">
//       <h1>{appname}</h1>
//       <nav>
//         <Link to="/">Home</Link> |{" "}
//         <Link to="/login">Login</Link>
//       </nav>
//       <Outlet />
//     </div>
//   );
// }

// export default App;
