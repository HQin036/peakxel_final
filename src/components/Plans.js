import React, { useState } from 'react';
import { Container, Row, Col, Form, Table, Modal, Button } from 'react-bootstrap';
import './Plans.css';

const Plans = () => {
  const initialPlans = [
    { id: 1, name: 'Air', ram: '2GB', vcpu: 2, storage: '10GB', bandwidth: '1Mbps', features: 'Basic Support', price: 3.99 },
    { id: 2, name: 'Plastic', ram: '4GB', vcpu: 4, storage: '20GB', bandwidth: '5Mbps', features: '24/7 Uptime', price: 6.99 },
    { id: 3, name: 'Iron', ram: '6GB', vcpu: 6, storage: '25GB', bandwidth: '10Mbps', features: 'Custom Plugins', price: 9.99 },
    { id: 4, name: 'Bronze', ram: '8GB', vcpu: 8, storage: '50GB', bandwidth: '10Mbps', features: 'Mod Support', price: 12.99 },
    { id: 5, name: 'Silver', ram: '10GB', vcpu: 10, storage: '100GB', bandwidth: '25Mbps', features: 'Custom Port', price: 15.99 },
    { id: 6, name: 'Gold', ram: '12GB', vcpu: 12, storage: '100GB', bandwidth: '25Mbps', features: 'SSD Storage', price: 18.99 },
    { id: 7, name: 'Platinum', ram: '14GB', vcpu: 14, storage: '200GB', bandwidth: '50Mbps', features: 'Unlimited Slots', price: 21.99 },
    { id: 8, name: 'Diamond', ram: '16GB', vcpu: 16, storage: '200GB', bandwidth: '50Mbps', features: 'Dedicated IP', price: 24.99 },
    { id: 9, name: 'Titanium', ram: '20GB', vcpu: 16, storage: '500GB', bandwidth: '100Mbps', features: 'Free Backups', price: 27.99 },
    { id: 10, name: 'Ultimate', ram: '24GB', vcpu: 16, storage: '500GB', bandwidth: '100Mbps', features: 'Priority Support', price: 30.99 },
  ];

  const [plans, setPlans] = useState(initialPlans);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [filters, setFilters] = useState({
    ram: 'All',
    vcpu: 'All',
    storage: 'All',
    bandwidth: 'All',
    price: 'All',
  });

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  const handlePurchaseClick = () => {
    if (selectedPlan) {
      setShowModal(true);
    } else {
      alert('Please select a plan first.');
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleClearFilters = () => {
    setFilters({
      ram: 'All',
      vcpu: 'All',
      storage: 'All',
      bandwidth: 'All',
      price: 'All',
    });
  };

  const filteredPlans = plans.filter(plan => {
    return (
      (filters.ram === 'All' || plan.ram === filters.ram) &&
      (filters.vcpu === 'All' || plan.vcpu === parseInt(filters.vcpu)) &&
      (filters.storage === 'All' || plan.storage === filters.storage) &&
      (filters.bandwidth === 'All' || plan.bandwidth === filters.bandwidth) &&
      (filters.price === 'All' || (
        (filters.price === '$0-$5' && plan.price <= 5) ||
        (filters.price === '$5-$10' && plan.price > 5 && plan.price <= 10) ||
        (filters.price === '$10-$15' && plan.price > 10 && plan.price <= 15) ||
        (filters.price === '$15-$20' && plan.price > 15 && plan.price <= 20) ||
        (filters.price === '$20-$25' && plan.price > 20 && plan.price <= 25) ||
        (filters.price === '$25-$30' && plan.price > 25 && plan.price <= 30) ||
        (filters.price === '$30+' && plan.price > 30)
      ))
    );
  });

  return (
    <Container className="mt-5 plans-container">
      <h2>Plans & Pricing</h2>
      <Row>
        <Col sm={3}>
          <Form.Group controlId="formFilterRAM">
            <Form.Label>Filter RAM</Form.Label>
            <Form.Control as="select" name="ram" value={filters.ram} onChange={handleFilterChange}>
              <option>All</option>
              <option>2GB</option>
              <option>4GB</option>
              <option>6GB</option>
              <option>8GB</option>
              <option>10GB</option>
              <option>12GB</option>
              <option>14GB</option>
              <option>16GB</option>
              <option>20GB</option>
              <option>24GB</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formFiltervCPU">
            <Form.Label>Filter vCPU</Form.Label>
            <Form.Control as="select" name="vcpu" value={filters.vcpu} onChange={handleFilterChange}>
              <option>All</option>
              <option>2</option>
              <option>4</option>
              <option>6</option>
              <option>8</option>
              <option>10</option>
              <option>12</option>
              <option>14</option>
              <option>16</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formFilterStorage">
            <Form.Label>Filter Storage</Form.Label>
            <Form.Control as="select" name="storage" value={filters.storage} onChange={handleFilterChange}>
              <option>All</option>
              <option>10GB</option>
              <option>20GB</option>
              <option>25GB</option>
              <option>50GB</option>
              <option>100GB</option>
              <option>200GB</option>
              <option>500GB</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formFilterBandwidth">
            <Form.Label>Filter Bandwidth</Form.Label>
            <Form.Control as="select" name="bandwidth" value={filters.bandwidth} onChange={handleFilterChange}>
              <option>All</option>
              <option>1Mbps</option>
              <option>5Mbps</option>
              <option>10Mbps</option>
              <option>25Mbps</option>
              <option>50Mbps</option>
              <option>100Mbps</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formFilterPrice">
            <Form.Label>Filter Price</Form.Label>
            <Form.Control as="select" name="price" value={filters.price} onChange={handleFilterChange}>
              <option>All</option>
              <option>$0-$5</option>
              <option>$5-$10</option>
              <option>$10-$15</option>
              <option>$15-$20</option>
              <option>$20-$25</option>
              <option>$25-$30</option>
              <option>$30+</option>
            </Form.Control>
          </Form.Group>
          <div className="text-center mt-4">
            <Button className="cta-button clear-filter-button" onClick={handleClearFilters}>Clear Filters</Button>
            <Button className="cta-button" onClick={handlePurchaseClick}>Purchase Now</Button>
          </div>
        </Col>
        <Col sm={9}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th></th>
                <th>Plan</th>
                <th>RAM</th>
                <th>vCPU</th>
                <th>Storage</th>
                <th>Bandwidth</th>
                <th>Features</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {filteredPlans.map(plan => (
                <tr key={plan.id} onClick={() => handleSelectPlan(plan)} className="plan-row">
                  <td>
                    <Form.Check type="radio" name="plan" checked={selectedPlan?.id === plan.id} readOnly />
                  </td>
                  <td>{plan.name}</td>
                  <td>{plan.ram}</td>
                  <td>{plan.vcpu}</td>
                  <td>{plan.storage}</td>
                  <td>{plan.bandwidth}</td>
                  <td>{plan.features}</td>
                  <td>{plan.price}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Login Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Plan:</strong> {selectedPlan?.name}</p>
          <p><strong>Username:</strong> user@{selectedPlan?.name.toLowerCase()}.com</p>
          <p><strong>Password:</strong> password123</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Plans;
