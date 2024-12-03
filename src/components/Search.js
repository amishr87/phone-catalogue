import React, { useEffect, useState } from "react";
import api from "../services/api";
import { Container, Card, Spinner } from "react-bootstrap";
import "./PhoneDetails.css";

function Search(props) {
  // Get the id prop directly
  const { id } = props;
  const [phone, setPhone] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch phone details using the id prop

    api
      .get(`/specifications/${id}`) // Fetch specifications for the selected phone
      .then((response) => {
        setPhone(response.data[0]); // Assume the API returns an array of specifications
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching phone details:", error));
  }, [id]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center full-height">
        <Spinner animation="border" variant="primary" />
        <span className="ms-3"></span>
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
              src={phone.image}
              alt={phone.modelname}
              className="details-img"
            />
          </div>
          <div className="details-grid">
            <p>
              <strong>Screen Size:</strong> {phone.screensize} inches
            </p>
            <p>
              <strong>Battery Size:</strong> {phone.batterysize} mAh
            </p>
            <p>
              <strong>Processor:</strong> {phone.processor}
            </p>
            <p>
              <strong>RAM:</strong> {phone.ram} GB
            </p>
            <p>
              <strong>Storage:</strong> {phone.storage} GB
            </p>
            <p>
              <strong>Number of Cameras:</strong> {phone.noofcameras}
            </p>
            <p>
              <strong>Camera Size:</strong> {phone.camerasize} MP
            </p>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Search;
