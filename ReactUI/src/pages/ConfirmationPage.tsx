import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ConfirmationPage: React.FC = () => {
  const { bookingId } = useParams();

  return (
    <Container className="py-4">
      <h1>Booking Confirmed!</h1>
      <p>Booking ID: {bookingId}</p>
      {/* Add confirmation details */}
    </Container>
  );
};

export default ConfirmationPage;