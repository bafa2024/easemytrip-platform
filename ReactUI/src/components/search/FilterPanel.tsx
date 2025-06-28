import React from 'react';
import { Card, Form } from 'react-bootstrap';

const FilterPanel: React.FC = () => {
  return (
    <Card>
      <Card.Header>
        <h6>Filters</h6>
      </Card.Header>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Stops</Form.Label>
            <Form.Check type="radio" label="All" name="stops" />
            <Form.Check type="radio" label="Non-stop" name="stops" />
            <Form.Check type="radio" label="1 Stop" name="stops" />
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default FilterPanel;