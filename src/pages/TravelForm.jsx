import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TravelForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    fromAddress: '',
    destination: '',
    travelDate: '',
    returnDate: '',
    travelers: 1,
    specialRequests: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form data", formData);

    const response = await fetch('http://localhost:4000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert('Email sent successfully!');
    } else {
      alert('Failed to send email');
    }
    navigate('/card');
  };

  return (
    <div className="container mt-5">
      <h2>Travel Details Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            className="form-control"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="fromAddress" className="form-label">From Address</label>
          <input
            type="text"
            id="fromAddress"
            name="fromAddress"
            className="form-control"
            value={formData.fromAddress}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="destination" className="form-label">Destination</label>
          <input
            type="text"
            id="destination"
            name="destination"
            className="form-control"
            value={formData.destination}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="travelDate" className="form-label">Travel Date</label>
          <input
            type="date"
            id="travelDate"
            name="travelDate"
            className="form-control"
            value={formData.travelDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="returnDate" className="form-label">Return Date</label>
          <input
            type="date"
            id="returnDate"
            name="returnDate"
            className="form-control"
            value={formData.returnDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="travelers" className="form-label">Number of Travelers</label>
          <input
            type="number"
            id="travelers"
            name="travelers"
            className="form-control"
            value={formData.travelers}
            onChange={handleChange}
            min="1"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="specialRequests" className="form-label">Special Requests</label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            className="form-control"
            value={formData.specialRequests}
            onChange={handleChange}
            rows="3"
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default TravelForm;
