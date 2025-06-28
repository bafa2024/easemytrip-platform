import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const DealsSection: React.FC = () => {
  const deals = [
    { id: 1, route: 'Delhi → Mumbai', price: '₹3,999', discount: '25% OFF' },
    { id: 2, route: 'Bangalore → Goa', price: '₹2,999', discount: '30% OFF' },
  ];

  return (
    <section className="py-5">
      <Container>
        <h2>Hot Deals</h2>
        <Row>
          {deals.map(deal => (
            <Col md={4} key={deal.id} className="mb-3">
              <Card>
                <Card.Body>
                  <h5>{deal.route}</h5>
                  <p>{deal.price}</p>
                  <span className="badge bg-danger">{deal.discount}</span>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default DealsSection;