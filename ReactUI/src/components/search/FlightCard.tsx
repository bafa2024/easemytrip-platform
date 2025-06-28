import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Flight } from '@types/flight.types';

interface FlightCardProps {
  flight: Flight;
}

const FlightCard: React.FC<FlightCardProps> = ({ flight }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h5>{flight.airline}</h5>
            <p>{flight.flightNumber}</p>
          </div>
          <div>
            <h4>₹{flight.price}</h4>
            <Button variant="primary">Book Now</Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default FlightCard;