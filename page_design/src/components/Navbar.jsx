
import './Navbar.css'; // Importing the CSS file for styles
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/user';

const Navbar = () => {
  const {current, logout} = useUser()
  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleLogout = async () => {
    await logout()
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="logo" className="logo-image" />
        <span className="logo-text">AI Ally</span>
      </div>
      <ul className="navbar-links">
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Testimonials</li>
      </ul>
      {current ? (
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <>
          <Link to="/signup">
            <button className="sign-in-btn">Signup</button>
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
