import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const PopularDestinations: React.FC = () => {
  const destinations = [
    { id: 1, city: 'Goa', price: 'From ₹4,500' },
    { id: 2, city: 'Dubai', price: 'From ₹18,000' },
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <h2>Popular Destinations</h2>
        <Row>
          {destinations.map(dest => (
            <Col md={3} key={dest.id} className="mb-3">
              <Card className="text-center">
                <Card.Body>
                  <h5>{dest.city}</h5>
                  <p>{dest.price}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PopularDestinations;