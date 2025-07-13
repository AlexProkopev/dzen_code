import { NavLink } from "react-router-dom";
import { ROUTES_NAV } from "../../../routes";

function NavLinks() {
  return (
    <nav className="nav flex-column">
      {ROUTES_NAV.filter(route => route.name).map(({ path, name }) => (
        <NavLink key={path} to={path} className="nav-link">
          {name}
        </NavLink>
      ))}
    </nav>
  );
}

export default NavLinks;
