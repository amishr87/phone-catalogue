import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Spinner } from 'react-bootstrap';
import api from '../services/api';
import './PhoneDetails.css';

function PhoneDetails() {
  const { id } = useParams(); // Get the phone ID from the URL
  const [phone, setPhone] = useState(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchPhoneDetails = async () => {
    try {
      const [specifications, generalDetails] = await Promise.all([
        api.get(`/specifications/${id}`),
        api.get(`/phones/${id}`), // Fetch phone details (including image URL)
      ]);
      // Extract the first objects from the response arrays
      const specificationsData = specifications.data[0];
      const generalDetailsData = generalDetails.data[0];

      // Merge the data into the phone object
      setPhone({
        ...specificationsData,
        ...generalDetailsData, // Merge general details, including image
      });
      setLoading(false);
    } catch (error) {
      console.error('Error fetching phone details:', error);
    }
  };

  fetchPhoneDetails();
}, [id]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center full-height">
        <Spinner animation="border" variant="primary" />
        <span className="ms-3">Loading phone details...</span>
      </div>
    );
  }

  if (!phone) {
    return (
      <Container className="my-5">
        <h1 className="text-center">No details found for this phone.</h1>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Card className="phone-details-card shadow">
        <Card.Header className="text-center card-header">
          <h1>{phone.modelname}</h1>
        </Card.Header>
        <Card.Body>
          <div className="text-center mb-4">
            <img
                src={`/${phone.image}`}
                className="details-img"
            />
          </div>
          <div className="details-grid">
          <div>
            <p><strong>Screen Size:</strong> {phone.screensize} inches</p>
            <p><strong>Battery Size:</strong> {phone.batterysize} mAh</p>
          </div>
          <div>
            <p><strong>Processor:</strong> {phone.processor}</p>
            <p><strong>RAM:</strong> {phone.ram} GB</p>
          </div>
          <div>
            <p><strong>Storage:</strong> {phone.storage} GB</p>
            <p><strong>Number of Cameras:</strong> {phone.noofcameras}</p>
          </div>
          <div>
            <p><strong>Camera Size:</strong> {phone.camerasize} MP</p>
          </div>
        </div>

        </Card.Body>
      </Card>
    </Container>
  );
}

export default PhoneDetails;
