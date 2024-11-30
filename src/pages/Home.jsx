import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import img from '../assets/goa.avif';
import img2 from '../assets/goa2.avif';
import img3 from '../assets/goa3.avif';

function Home() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top"> {/* Add sticky="top" */}
        <Container>
          <Navbar.Brand as={Link} to="/">TravelBreeze</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto"> {/* Use ms-auto to align items to the right */}
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/destinations">Destinations</Nav.Link>
              <Nav.Link as={Link} to="/about">About Us</Nav.Link>
              <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/contact">Contact</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/blog">Blog</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ height: '100vh', overflow: 'hidden' }}> {/* Full-screen height */}
        <Carousel data-bs-theme="dark" style={{ height: '100%' }}>
          <Carousel.Item style={{ height: '100%' }}>
            <img
              className="d-block w-100"
              src={img}
              alt="First slide"
              style={{ objectFit: 'cover', height: '100%' }}
            />
            <Carousel.Caption>
              <h3>Explore Goa</h3>
              <p>Discover the beauty of Goa with us.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: '100%' }}>
            <img
              className="d-block w-100"
              src={img2}
              alt="Second slide"
              style={{ objectFit: 'cover', height: '100%' }}
            />
            <Carousel.Caption>
              <h3>Relax by the Beach</h3>
              <p>Experience serenity like never before.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: '100%' }}>
            <img
              className="d-block w-100"
              src={img3}
              alt="Third slide"
              style={{ objectFit: 'cover', height: '100%' }}
            />
            <Carousel.Caption>
              <h3>Adventure Awaits</h3>
              <p>Embark on a thrilling journey in Goa.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Home;
