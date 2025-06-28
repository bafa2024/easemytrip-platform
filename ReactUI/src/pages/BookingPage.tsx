import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const BookingPage: React.FC = () => {
  const { flightId } = useParams();

  return (
    <Container className="py-4">
      <h1>Book Your Flight</h1>
      <p>Flight ID: {flightId}</p>
      {/* Add booking implementation */}
    </Container>
  );
};

export default BookingPage;