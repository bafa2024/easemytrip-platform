import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { MessageCircle, X } from 'lucide-react';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <Button
        className="position-fixed bottom-0 end-0 m-4 rounded-circle"
        style={{ width: '60px', height: '60px', zIndex: 1000 }}
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle />
      </Button>
    );
  }

  return (
    <Card className="position-fixed bottom-0 end-0 m-4" style={{ width: '350px', zIndex: 1000 }}>
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h6 className="mb-0">Travel Assistant</h6>
        <Button variant="link" size="sm" onClick={() => setIsOpen(false)}>
          <X size={20} />
        </Button>
      </Card.Header>
      <Card.Body style={{ height: '400px', overflowY: 'auto' }}>
        <p>Hi! How can I help you today?</p>
      </Card.Body>
      <Card.Footer>
        <input type="text" className="form-control" placeholder="Type your message..." />
      </Card.Footer>
    </Card>
  );
};

export default ChatWidget;