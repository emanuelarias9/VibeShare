import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
export const Nav = () => {
  return (
    <nav className="navbar__container-lists">
      <ul className="container-lists__menu-list">
        <li className="menu-list__item">
          <a href="#" className="menu-list__link">
            <FontAwesomeIcon icon={faUser} />
            <span className="menu-list__title">Login</span>
          </a>
        </li>

        <li className="menu-list__item">
          <a href="#" className="menu-list__link">
            <FontAwesomeIcon icon={faUsers} />
            <span className="menu-list__title">Registro</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
