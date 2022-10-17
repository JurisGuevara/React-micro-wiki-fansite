import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import scrollToTop from "../customHooks/scrollToTop";
import { setActiveTab } from "../store/tabSlice";

const Header = () => {
  const count = useSelector(state => state.tab.activeTab)
  const dispatch = useDispatch()
  const toTop = () => scrollToTop()
  
  return (
    <header id="header">
      <nav>
        <ul>
          <li>
            <Link
              to="/"
              className={count === 'home' ? "active" : null}
              onClick={() => {dispatch(setActiveTab('home')); toTop()}}
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="planets"
              className={count === 'planets' ? "active" : null}
              onClick={() => {dispatch(setActiveTab('planets')); toTop()}}
            >
              Planets
            </Link>
          </li>
          <li>
            <Link to="spaceships"
              className={count === 'spaceships' ? "active" : null}
              onClick={() => {dispatch(setActiveTab('spaceships')); toTop()}}
            >
              Spaceships
            </Link>
          </li>
          <li>
            <Link to="vehicles"
              className={count === 'vehicles' ? "active" : null}
              onClick={() => {dispatch(setActiveTab('vehicles')); toTop()}}
            >
              Vehicles
            </Link>
          </li>
          <li>
            <Link to="people"
              className={count === 'people' ? "active" : null}
              onClick={() => {dispatch(setActiveTab('people')); toTop()}}
            >
              People
            </Link>
          </li>
          <li>
            <Link to="films"
              className={count === 'films' ? "active" : null}
              onClick={() => {dispatch(setActiveTab('films')); toTop()}}
            >
              Films
            </Link>
          </li>
          <li>
            <Link to="species"
              className={count === 'species' ? "active" : null}
              onClick={() => {dispatch(setActiveTab('species')); toTop()}}
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