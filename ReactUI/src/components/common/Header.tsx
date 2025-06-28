import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Dropdown, Offcanvas } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Plane, User, Menu } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user.currentUser);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <Navbar bg="white" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <Plane className="me-2 text-primary" size={28} />
          <span className="fw-bold fs-4 text-primary">EaseMyTrip</span>
        </Navbar.Brand>

        <Navbar.Toggle onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <Menu size={24} />
        </Navbar.Toggle>

        <Navbar.Offcanvas
          show={showMobileMenu}
          onHide={() => setShowMobileMenu(false)}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="ms-auto align-items-lg-center">
              <Nav.Link as={Link} to="/flights">Flights</Nav.Link>
              <Nav.Link as={Link} to="/hotels">Hotels</Nav.Link>
              <Nav.Link as={Link} to="/holidays">Holidays</Nav.Link>
              <Nav.Link as={Link} to="/manage-booking">Manage Booking</Nav.Link>
              
              {user ? (
                <Dropdown align="end" className="ms-lg-3">
                  <Dropdown.Toggle variant="outline-primary" size="sm">
                    <User size={18} className="me-1" />
                    {user.firstName}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/profile">My Profile</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/bookings">My Bookings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => console.log('Logout')}>
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Button 
                  variant="outline-primary" 
                  size="sm" 
                  className="ms-lg-3"
                  onClick={() => navigate('/login')}
                >
                  Login
                </Button>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;