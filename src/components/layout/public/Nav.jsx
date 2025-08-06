import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
export const Nav = () => {
  return (
    <nav className="navbar__container-lists">
      <ul className="container-lists__menu-list">
        <li className="menu-list__item">
          <NavLink to="/login" className="menu-list__link">
            <FontAwesomeIcon icon={faUser} />
            <span className="menu-list__title">iniciar sesión</span>
          </NavLink>
        </li>

        <li className="menu-list__item">
          <NavLink to="/registro" className="menu-list__link">
            <FontAwesomeIcon icon={faUsers} />
            <span className="menu-list__title">Registro</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
