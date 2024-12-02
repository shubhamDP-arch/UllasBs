import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';

function PaymentPage() {
  const [amount, setAmount] = useState(null); // State for the random amount
  const [qrCodeUrl, setQrCodeUrl] = useState(''); // State for QR code image URL

  // Function to generate a random amount between 10 and 500
  const generateRandomAmount = () => {
    const randomAmount = (Math.random() * (500 - 10) + 10).toFixed(2); // Random amount between 10 and 500
    return randomAmount;
  };

  useEffect(() => {
    const randomAmount = generateRandomAmount(); // Generate a random amount
    setAmount(randomAmount);
    setQrCodeUrl(`https://api.qrserver.com/v1/create-qr-code/?data=payment://pay?amount=${randomAmount}&size=256x256`); // QR code image URL
  }, []);

  const handlePayClick = () => {
    // Simulate the payment process
    alert(`Proceeding to pay $${amount}`);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="text-center">
            <Card.Body>
              <h2>Payment Page</h2>
              <h5 className="my-3">Amount to Pay: ${amount}</h5>

              {/* Display the QR Code as an image */}
              <img src={qrCodeUrl} alt="QR Code" className="img-fluid" />

              <div className="mt-4">
                <Button variant="success" onClick={handlePayClick}>
                  Pay Now
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default PaymentPage;
