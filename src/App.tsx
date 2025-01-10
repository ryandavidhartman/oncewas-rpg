import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Footer/Footer';
import Footer from './components/Header/Header';
import Home from './pages/Home';
import Characters from './pages/Characters';
import About from './pages/About';
import AddCharacter from "./pages/AddCharacter";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/about" element={<About />} />
          <Route path="/add-character" element={<AddCharacter />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
