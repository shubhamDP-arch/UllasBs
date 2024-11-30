import React, { useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import img from '../assets/Bus.jpg';
import img2 from '../assets/Car.webp';
import img3 from '../assets/train.avif';

function TransportCards() {
  const [selectedTransport, setSelectedTransport] = useState(null); // State for selected transport card
  const [selectedHotel, setSelectedHotel] = useState(null); // State for selected hotel card

  const transports = [
    {
      title: 'Bus',
      price: '$50',
      description: 'Affordable and comfortable for short distances.',
      img: img,
    },
    {
      title: 'Aeroplane',
      price: '$500',
      description: 'Fast and convenient for long distances.',
      img: img2,
    },
    {
      title: 'Car',
      price: '$100',
      description: 'Flexible and private for personalized travel.',
      img: img3,
    },
  ];

  const hotels = [
    {
      title: 'Cheap',
      price: '$150/night',
      description: 'Experience luxury and comfort in the heart of the city.',
      img: '',
    },
    {
      title: 'Affordable',
      price: '$200/night',
      description: 'Relax by the beach with stunning ocean views.',
      img: '',
    },
    {
      title: 'Expensive',
      price: '$120/night',
      description: 'Escape to the serene beauty of the mountains.',
      img: '',
    },
  ];

  const handleTransportBookNowClick = (index) => {
    setSelectedTransport(index); // Set selected transport card
  };

  const handleHotelBookNowClick = (index) => {
    setSelectedHotel(index); // Set selected hotel card
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Travel Charges</h2>
      <Row>
        {transports.map((transport, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={transport.img}
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  border: selectedTransport === index ? '5px solid gold' : 'none', // Apply border to transport
                }}
              />
              <Card.Body>
                <Card.Title>{transport.title}</Card.Title>
                <Card.Text>{transport.description}</Card.Text>
                <h5 className="text-primary">{transport.price}</h5>
                <Button variant="primary" onClick={() => handleTransportBookNowClick(index)}>
                  Book Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <h2 className="text-center mt-5 mb-4">Hotel Recommendations</h2>
      <Row>
        {hotels.map((hotel, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={hotel.img}
                style={{
                  height: '200px',
                  objectFit: 'cover',
                  border: selectedHotel === index ? '5px solid gold' : 'none', // Apply border to hotel
                }}
              />
              <Card.Body>
                <Card.Title>{hotel.title}</Card.Title>
                <Card.Text>{hotel.description}</Card.Text>
                <h5 className="text-primary">{hotel.price}</h5>
                <Button variant="primary" onClick={() => handleHotelBookNowClick(index)}>
                  Book Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default TransportCards;
