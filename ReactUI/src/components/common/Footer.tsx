import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white mt-5 py-4">
      <Container>
        <Row>
          <Col md={3}>
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><Link to="/about" className="text-white-50">About Us</Link></li>
              <li><Link to="/careers" className="text-white-50">Careers</Link></li>
              <li><Link to="/contact" className="text-white-50">Contact</Link></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li><Link to="/faq" className="text-white-50">FAQ</Link></li>
              <li><Link to="/support" className="text-white-50">Customer Support</Link></li>
              <li><Link to="/terms" className="text-white-50">Terms & Conditions</Link></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li><Link to="/flights" className="text-white-50">Flights</Link></li>
              <li><Link to="/hotels" className="text-white-50">Hotels</Link></li>
              <li><Link to="/holidays" className="text-white-50">Holidays</Link></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Connect</h5>
            <p className="text-white-50">Follow us on social media</p>
          </Col>
        </Row>
        <hr className="bg-white-50" />
        <p className="text-center text-white-50 mb-0">
          © 2024 EaseMyTrip. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;