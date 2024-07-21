import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import './Support.css';

const Support = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [issue, setIssue] = useState('');
  const [confirmationNumber, setConfirmationNumber] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const confirmation = Math.floor(Math.random() * 1000000);
    setConfirmationNumber(confirmation);
  };

  return (
    <Container className="mt-5 support-container">
      <h2>Support Ticket</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter your name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </Form.Group>
        <Form.Group controlId="formIssue">
          <Form.Label>Issue</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            placeholder="Describe your issue" 
            value={issue} 
            onChange={(e) => setIssue(e.target.value)} 
            required 
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="cta-button">
          Submit
        </Button>
      </Form>
      {confirmationNumber && (
        <Alert variant="success" className="mt-4">
          Your ticket has been submitted. Your confirmation number is <strong>{confirmationNumber}</strong>.
        </Alert>
      )}
    </Container>
  );
};

export default Support;
