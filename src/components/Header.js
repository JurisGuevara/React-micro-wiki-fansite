import { Link, useLocation } from "react-router-dom";
import scrollToTop from "../customHooks/scrollToTop";

const Header = () => {
  const location = useLocation()
  const toTop = () => scrollToTop()
  
  return (
    <header id="header">
      <nav>
        <ul>
          <li>
            <Link
              to="/"
              className={location.pathname === '/' ? "active" : null}
              onClick={() => toTop()}
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="planets"
              className={location.pathname === '/planets' ? "active" : null}
              onClick={() => toTop()}
            >
              Planets
            </Link>
          </li>
          <li>
            <Link to="spaceships"
              className={location.pathname === '/spaceships' ? "active" : null}
              onClick={() => toTop()}
            >
              Spaceships
            </Link>
          </li>
          <li>
            <Link to="vehicles"
              className={location.pathname === '/vehicles' ? "active" : null}
              onClick={() => toTop()}
            >
              Vehicles
            </Link>
          </li>
          <li>
            <Link to="people"
              className={location.pathname === '/people' ? "active" : null}
              onClick={() => toTop()}
            >
              People
            </Link>
          </li>
          <li>
            <Link to="films"
              className={location.pathname === '/films' ? "active" : null}
              onClick={() => toTop()}
            >
              Films
            </Link>
          </li>
          <li>
            <Link to="species"
              className={location.pathname === '/species' ? "active" : null}
              onClick={() => toTop()}
            >
              Species
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
 
export default Header;