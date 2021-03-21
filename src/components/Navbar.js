import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="navbar-brand"> Photo Gallery</div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" exact className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/myphotos" exact className="nav-link">
            My Photos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
