import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
    <NavLink to="/" className="home-page-link">Home</NavLink>
    <NavLink to="/Actors" className="actors-page-link">Actors</NavLink>
    <NavLink to="/Directors" className="directors-page-link">Directors</NavLink>
    </nav>
    );
};

export default NavBar;
