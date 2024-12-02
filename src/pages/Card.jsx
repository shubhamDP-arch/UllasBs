import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import img from '../assets/Bus.jpg';
import img2 from '../assets/Car.webp';
import img3 from '../assets/train.avif';

function TransportCards() {
  const [selectedTransport, setSelectedTransport] = useState(null); // State for selected transport card
  const [selectedHotel, setSelectedHotel] = useState(null); // State for selected hotel card
  const [city, setCity] = useState(''); // State for city input
  const [weather, setWeather] = useState(null); // State for weather information
  const [error, setError] = useState(null); // State for error handling

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const transports = [
    {
      title: 'Bus',
      price: '$50',
      description: 'Affordable and comfortable for short distances.',
      img: img,
    },
    {
      title: 'Car',
      price: '$500',
      description: 'Fast and convenient for long distances.',
      img: img2,
    },
    {
      title: 'Train',
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

  const fetchWeather = async () => {
    setError(null);
    setWeather(null);
    try {
      const apiKey = 'fc4550849ebb596595ba60f96b60828f'; // Replace with your OpenWeatherMap API key
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      if (!response.ok) throw new Error('City not found');
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleProceedToPayment = () => {
    if (selectedTransport === null || selectedHotel === null) {
      alert('Please select both a transport and a hotel.');
    } else {
      // Navigate to the payment route
      navigate('/payment');
    }
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
                  border: selectedTransport === index ? '5px solid gold' : 'none',
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
                  border: selectedHotel === index ? '5px solid gold' : 'none',
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

      <h2 className="text-center mt-5 mb-4">Check Weather</h2>
      <Form className="mb-4">
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Enter City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={fetchWeather}>
          Get Weather
        </Button>
      </Form>
      {error && <p className="text-danger text-center">{error}</p>}
      {weather && (
        <div className="text-center">
          <h5>Weather in {weather.name}</h5>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      )}

      <div className="text-center mt-5">
        <Button variant="success" onClick={handleProceedToPayment}>
          Proceed to Payment
        </Button>
      </div>
    </Container>
  );
}

export default TransportCards;
