import { Outlet, Link } from 'react-router-dom';

const Frontpage = () => {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      
        <h2>Welcome to website</h2>

      <Outlet />
    </div>
  )
}

export default Frontpage
