import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Home from './components/Home';
import ControlPanel from './components/ControlPanel';
import Support from './components/Support';
import FAQ from './components/FAQ';
import Plans from './components/Plans';
import Dashboard from './components/Dashboard';
import ChatBotWrapper from './components/ChatBotWrapper';
import './App.css';

function App() {
  useEffect(() => {
    const checkTranslateBar = () => {
      const translateBar = document.querySelector('.goog-te-banner-frame');
      if (translateBar) {
        document.body.classList.add('with-translate-bar');
        document.querySelector('.navbar').classList.add('with-translate-bar');
      } else {
        document.body.classList.remove('with-translate-bar');
        document.querySelector('.navbar').classList.remove('with-translate-bar');
      }
    };

    const observer = new MutationObserver(checkTranslateBar);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return (
    <Router>
      <div id="root">
        <Navbar expand="lg" fixed="top" className="navbar">
          <Container>
            <Navbar.Brand as={NavLink} to="/" className="brand">
              PEAKXEL
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto" style={{ marginLeft: 'auto' }}>
                <Nav.Link as={NavLink} exact to="/" activeClassName="active-nav-link">
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="/plans" activeClassName="active-nav-link">
                  Plans
                </Nav.Link>
                <Nav.Link as={NavLink} to="/faq" activeClassName="active-nav-link">
                  FAQ
                </Nav.Link>
                <Nav.Link as={NavLink} to="/support" activeClassName="active-nav-link">
                  Support
                </Nav.Link>
                <Nav.Link as={NavLink} to="/control-panel" activeClassName="active-nav-link">
                  Control Panel
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="main-content">
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/plans" element={<Plans />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/support" element={<Support />} />
              <Route path="/control-panel" element={<ControlPanel />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Container>
        </div>
        <footer className="footer">
          <Container>
            <p>&copy; 2024 PEAKXEL. All rights reserved.</p>
            <div id="google_translate_element" className="translate-widget"></div>
          </Container>
        </footer>
        <ChatBotWrapper />
      </div>
    </Router>
  );
}

export default App;
