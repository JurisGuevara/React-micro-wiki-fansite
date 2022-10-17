import { Route, Routes } from 'react-router-dom';
import './App.css';
import scrollToTop from './customHooks/scrollToTop';
import Header from './components/Header';
import Films from './components/tabs/Films';
import Home from './components/tabs/Home';
import People from './components/tabs/People';
import Planets from './components/tabs/Planets';
import Spaceships from './components/tabs/Spaceships';
import Species from './components/tabs/Species';
import Vehicles from './components/tabs/Vehicles';

function App() {
  window.addEventListener('scroll', function() {
    const header = this.document.getElementById('header')
    const toTopBtn = this.document.getElementsByClassName('to-top-btn')[0]

    header.classList.toggle('sticky', window.scrollY > 300)
    toTopBtn.classList.toggle('active', window.scrollY > 700)
  })

  const toTop = () => scrollToTop()

  return (
    <div className="App">
      <div className="backdrop"></div>
      <h1>Starwars <i>wiki</i></h1>
      <Header />
      <div className="container">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/spaceships" element={<Spaceships />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/people" element={<People />} />
          <Route path="/films" element={<Films />} />
          <Route path="/species" element={<Species />} />
        </Routes>
      </div>
      <button className="to-top-btn" onClick={toTop}>To top</button>
      <footer>
        &#169;Starwars Wiki is a FANDOM Anime Community.
      </footer>
    </div>
  );
}

export default App;
