import './css/styles.css';
import { React } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer';
import { Navbar, Nav } from 'react-bootstrap';
import { Routes, Route, Navigate } from 'react-router-dom';
import Strategy from './routes/Strategy';
import Races from './routes/Races';
import Home from './routes/Home';
import Combat from './routes/Combat';
import Tech from './routes/Tech';

function App() {
  document.body.style.background = '#282c34';
  return (
    <>
      <div className="App" lang="en">
        <Header />
        <Navbar className="navbar-container" bg="primary">
          <Nav>
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="strategy">Strategy Cards</Nav.Link>
            <Nav.Link href="races">Race Sheets</Nav.Link>
            <Nav.Link href="combat">Combat</Nav.Link>
            <Nav.Link href="tech">Tech</Nav.Link>
          </Nav>
        </Navbar>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/strategy" element={<Strategy />} />
          <Route path="/races" element={<Races />} />
          <Route path="/combat" element={<Combat />} />
          <Route path="/tech" element={<Tech />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
