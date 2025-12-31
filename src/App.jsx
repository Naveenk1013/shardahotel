import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import Home from './pages/Home';
import About from './pages/About';
import Rooms from './pages/Rooms';
import Amenities from './pages/Amenities';
import Gallery from './pages/Gallery';
import Policies from './pages/Policies';
import Location from './pages/Location';
import Contact from './pages/Contact';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/location" element={<Location />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;
