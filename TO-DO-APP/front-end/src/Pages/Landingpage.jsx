// LandingPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const LandingPage = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <h1>Welcome to My ToDo App</h1>
          <p>
            Organize your tasks and boost your productivity with our simple and intuitive ToDo app.
          </p>
          <Link to="/app">
            <Button variant="primary">Get Started</Button>
          </Link>
        </Col>
        <Col md={6}>
          {/* You can add an image or illustration here */}
          <img
            src="https://via.placeholder.com/400"
            alt="ToDo App Illustration"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
