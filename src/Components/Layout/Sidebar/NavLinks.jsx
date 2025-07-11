import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
    <nav className="nav flex-column">
      <NavLink to="/orders" className="nav-link">
        ПРИХОД
      </NavLink>
      <NavLink to="/groups" className="nav-link">
        ГРУППЫ
      </NavLink>
      <NavLink to="/products" className="nav-link">
        ПРОДУКТЫ
      </NavLink>
      <NavLink to="/users" className="nav-link">
        ПОЛЬЗОВАТЕЛИ
      </NavLink>
      <NavLink to="/settings" className="nav-link">
        НАСТРОЙКИ
      </NavLink>
    </nav>
  );
}

export default NavLinks;
