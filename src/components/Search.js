import React, { useEffect, useState } from "react";
import api from "../services/api";
import { Container, Card, Spinner } from "react-bootstrap";
import "./PhoneDetails.css";

function Search({ modelName }) {
  const [phoneDetails, setPhoneDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    if (modelName) {
      setLoading(true);
      setError(null);

      const apiUrl = `/search-specifications?modelname=${encodeURIComponent(
        modelName
      )}`;

      api
        .get(apiUrl)
        .then((response) => {
          if (isMounted) {
            setPhoneDetails(response.data.phoneDetails);
            setLoading(false);
          }
        })
        .catch((err) => {
          if (isMounted) {
            setError(err.response?.data?.error || "An error occurred");
            setLoading(false);
          }
        });

      return () => {
        isMounted = false;
      };
    } else {
      setError("Please provide a valid phone name.");
      setLoading(false);
    }
  }, [modelName]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center full-height">
        <Spinner animation="border" variant="primary" />
        <span className="ms-3">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <Container className="my-5">
        <h1 className="text-center">{error}</h1>
      </Container>
    );
  }

  if (!phoneDetails) {
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
          <h1>{phoneDetails.modelname}</h1>
        </Card.Header>
        <Card.Body>
          <div className="text-center mb-4">
            <img
              src={`/${phoneDetails.image}`}
              className="details-img"
              alt={phoneDetails.modelname}
            />
          </div>
          <div className="details-grid">
            <div>
              <p><strong>Screen Size:</strong> {phoneDetails.screensize} inches</p>
              <p><strong>Battery Size:</strong> {phoneDetails.batterysize} mAh</p>
            </div>
            <div>
              <p><strong>Processor:</strong> {phoneDetails.processor}</p>
              <p><strong>RAM:</strong> {phoneDetails.ram} GB</p>
            </div>
            <div>
              <p><strong>Storage:</strong> {phoneDetails.storage} GB</p>
              <p><strong>Number of Cameras:</strong> {phoneDetails.noofcameras}</p>
            </div>
            <div>
              <p><strong>Camera Size:</strong> {phoneDetails.camerasize} MP</p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Search;