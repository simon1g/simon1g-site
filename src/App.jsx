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

const FooterMessage = () => {
  const messages = [
    "hello",
    "how you doing?",
    "remember to drink water",
    "hope you're having a great day!",
    "stay hydrated",
    "you are awesome!",
    "take a break if you need to",
    "keep being you",
    "smile it looks good on you",
    "u're doing great!",
    "take a shower ok?",
    "i love you",
    "lowkey need a gf",
    "still single",
    "you are enough",
  ];

  const [currentMessage, setCurrentMessage] = React.useState("");
  const [key, setKey] = React.useState(0);

  React.useEffect(() => {
    const showNextMessage = () => {
      const randomMsg = messages[Math.floor(Math.random() * messages.length)];
      setCurrentMessage(randomMsg);
      setKey(prev => prev + 1);
    };

    showNextMessage();
    const interval = setInterval(showNextMessage, 10000); // Change every 10s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="footer-message-container">
      <div key={key} className="footer-message-text">
        {currentMessage}
      </div>
    </div>
  );
};

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
      <FooterMessage />
      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
        borderTop: '1px solid var(--border-color)',
        marginTop: '2rem',
        position: 'relative',
        zIndex: 1
      }}>
        © {new Date().getFullYear()} simon1g. Built with React. And some love hehehehe ❤️
      </footer>
    </>
  );
}

export default App;
