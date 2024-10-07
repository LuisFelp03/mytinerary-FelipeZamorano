import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import CitiesPage from './components/CitiesPage';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/cities" element={<CitiesPage />} />
        </Routes>
        <CallToAction />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
