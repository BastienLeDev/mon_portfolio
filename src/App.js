
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar'
import About from './Components/About.docs/About';
import Accueil from './Components/Accueil.docs/Accueil';
import ScrollToTop from './Components/ScrollToTop';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import "./Style.css";


function App() {
  return (
    <main>
      <Router>
        <NavBar />
        <ScrollToTop />
        <Routes>

          <Route path="/" element={<Accueil />} />
          <Route path="/About" element={<About />} />


        </Routes>


      </Router>
    </main>
  );
}

export default App;

