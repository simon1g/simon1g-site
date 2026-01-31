import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PreMiD from './components/PreMiD';
import Home from './components/Home';
import PixelArt from './components/PixelArt';
import Photography from './components/Photography';
import Astrophotography from './components/Astrophotography';
import About from './components/About';
import Games from './components/Games';

function App() {
  return (
    <>
      <Navbar />
      <PreMiD />
      <main style={{ minHeight: 'calc(100vh - 70px - 60px)' }}> {/* Adjust min height including premid bar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pixelart" element={<PixelArt />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/astropics" element={<Astrophotography />} />
          <Route path="/about" element={<About />} />
          <Route path="/games" element={<Games />} />
        </Routes>
      </main>
      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
        borderTop: '1px solid var(--border-color)',
        marginTop: '2rem'
      }}>
        © {new Date().getFullYear()} simon1g. Built with React. And some love hehehehe ❤️
      </footer>
    </>
  );
}

export default App;
