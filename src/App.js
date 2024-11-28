import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero'; 
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground'; // Import ParticlesBackground

function App() {
  return (
    <Router>
      <div id="root" style={{ position: 'relative', height: '100%' }}> {/* Ensure this is the main wrapper */}
        
        {/* Particles Background - make sure it's rendered above other content */}
        <ParticlesBackground />

        <Header />  

        <main> {/* Main content wrapper */}
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Projects />
                <Contact />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />  {/* Footer is outside of main to stick at the bottom */}
      </div>
    </Router>
  );
}

export default App;
