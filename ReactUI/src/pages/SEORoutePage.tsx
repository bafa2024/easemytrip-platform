import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const SEORoutePage: React.FC = () => {
  const { origin, destination } = useParams();

  return (
    <Container className="py-4">
      <h1>Flights from {origin} to {destination}</h1>
      {/* Add SEO content and search widget */}
    </Container>
  );
};

export default SEORoutePage;