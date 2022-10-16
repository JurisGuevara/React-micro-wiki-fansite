import { useState } from "react";
import { Link } from "react-router-dom";
import scrollToTop from "./customHooks/scrollToTop";

const Header = () => {
  const [activeTab, setActiveTab] = useState('home')

  const toTop = () => scrollToTop()
  
  return (
    <header id="header">
      <nav>
        <ul>
          <li>
            <Link
              to="/"
              className={activeTab === 'home' ? "active" : null}
              onClick={() => {setActiveTab('home'); toTop()}}
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="planets"
              className={activeTab === 'planets' ? "active" : null}
              onClick={() => {setActiveTab('planets'); toTop()}}
            >
              Planets
            </Link>
          </li>
          <li>
            <Link to="spaceships"
              className={activeTab === 'spaceships' ? "active" : null}
              onClick={() => {setActiveTab('spaceships'); toTop()}}
            >
              Spaceships
            </Link>
          </li>
          <li>
            <Link to="vehicles"
              className={activeTab === 'vehicles' ? "active" : null}
              onClick={() => {setActiveTab('vehicles'); toTop()}}
            >
              Vehicles
            </Link>
          </li>
          <li>
            <Link to="people"
              className={activeTab === 'people' ? "active" : null}
              onClick={() => {setActiveTab('people'); toTop()}}
            >
              People
            </Link>
          </li>
          <li>
            <Link to="films"
              className={activeTab === 'films' ? "active" : null}
              onClick={() => {setActiveTab('films'); toTop()}}
            >
              Films
            </Link>
          </li>
          <li>
            <Link to="species"
              className={activeTab === 'species' ? "active" : null}
              onClick={() => {setActiveTab('species'); toTop()}}
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