import './App.css';
import { Route, Routes } from 'react-router-dom';
import scrollToTop from './customHooks/scrollToTop';
import Header from './components/Header';
import Films from './components/tabs/Films';
import Home from './components/tabs/Home';
import People from './components/tabs/People';
import Planets from './components/tabs/Planets';
import Spaceships from './components/tabs/Spaceships';
import Species from './components/tabs/Species';
import Vehicles from './components/tabs/Vehicles';
import Loading from './components/Loading';
import { useSelector } from 'react-redux';
import Modal from './components/Modal';
import NotFound from './components/tabs/NotFound';

function App() {
  window.addEventListener('scroll', function() {
    const header = this.document.getElementById('header')
    const toTopBtn = this.document.getElementsByClassName('to-top-btn')[0]

    header.classList.toggle('sticky', window.scrollY > 300)
    toTopBtn.classList.toggle('active', window.scrollY > 700)
  })

  const loading = useSelector(state => state.loading.isLoading)
  const modalState = useSelector(state => state.modal.modalState)
  const modalName = useSelector(state => state.modal.modalName)
  const modalImage = useSelector(state => state.modal.modalImage)

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
          <Route path="/planets" element={<Planets />} />
          <Route path="/spaceships" element={<Spaceships />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/people" element={<People />} />
          <Route path="/films" element={<Films />} />
          <Route path="/species" element={<Species />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <button className="to-top-btn" onClick={toTop}>To top</button>
      {loading && <Loading />}
      {modalState && <Modal modalName={modalName} modalImage={modalImage} />}
      <footer>
        &#169;Starwars Wiki is a FANDOM Anime Community.
      </footer>
    </div>
  );
}

export default App;
