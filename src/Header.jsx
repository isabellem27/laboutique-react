import { NavLink, Outlet } from "react-router";
import './assets/css/Header.css'

function Header() {
  return (
    <>
    <nav>
      <div className="menu">
        <div className="logo" id="logo"> <span>La</span>Boutique</div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/categories">Categories</NavLink>
        <NavLink to="/produits">Produits</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
    <Outlet />
    </>
  );
}

export default Header