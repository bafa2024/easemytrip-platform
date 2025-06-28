import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const TrustBadges: React.FC = () => {
  return (
    <section className="py-4 bg-light">
      <Container>
        <Row className="text-center">
          <Col md={3}>
            <h5>✅ Best Price Guarantee</h5>
          </Col>
          <Col md={3}>
            <h5>🔒 Secure Payments</h5>
          </Col>
          <Col md={3}>
            <h5>⭐ 4.5/5 Rating</h5>
          </Col>
          <Col md={3}>
            <h5>📞 24/7 Support</h5>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TrustBadges;