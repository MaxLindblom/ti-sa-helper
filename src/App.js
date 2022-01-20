import './css/styles.css';
import { React } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer';
import StrategyCarousel from './components/StrategyCarousel';
import { Navbar, Nav } from 'react-bootstrap';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Navbar className="navbar-container" bg="primary" variant="light">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar>
        <StrategyCarousel />
        <Footer />
      </div>
    </>
  );
}

export default App;
