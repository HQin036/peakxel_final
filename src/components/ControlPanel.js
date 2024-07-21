import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Form, Modal } from 'react-bootstrap';
import './ControlPanel.css';

const ControlPanel = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const navigate = useNavigate();

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleLogin = () => {
    setUsername(inputUsername);
    setIsLoggedIn(true);
    setShowLoginModal(false);
  };

  const handleSignupClick = () => {
    navigate('/plans');
  };

  const handleSignoutClick = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  const handleGoToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <Container className="mt-5 control-panel-container">
      <Row>
        <Col sm={3}>
          <Button variant="primary" onClick={handleLoginClick} className="cta-button">
            Login
          </Button>
          <Button variant="secondary" onClick={handleSignupClick} className="cta-button">
            Signup
          </Button>
          {isLoggedIn && (
            <>
              <Button variant="danger" onClick={handleSignoutClick} className="cta-button">
                Signout
              </Button>
              <Button variant="info" onClick={handleGoToDashboard} className="cta-button">
                Go to Dashboard
              </Button>
            </>
          )}
        </Col>
        <Col sm={9}>
          {isLoggedIn ? (
            <div className="logged-in-message">
              Logged in as {username}
            </div>
          ) : (
            <div className="default-message">
              Please log in or sign up to access the control panel.
            </div>
          )}
        </Col>
      </Row>

      <Modal show={showLoginModal} onHide={handleCloseLoginModal}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={inputUsername}
                onChange={(e) => setInputUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleLogin} className="cta-button">
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ControlPanel;