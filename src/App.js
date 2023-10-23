import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import OurBurritos from './pages/OurBurritos';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import Legal from './pages/Legal';
import './App.css';

function App() {
  return (
    <div className="App bg-[#1a1a1a] w-full h-screen">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ourburritos' element={<OurBurritos />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/legal' element={<Legal />} />
      </Routes>
    </div>
  );
}

export default App;
