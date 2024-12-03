import React, { useEffect, useState } from "react";
import api from "../services/api";
import { Container, Card, Spinner } from "react-bootstrap";
import "./PhoneDetails.css";

function Search({ modelName }) {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // Handle component unmounts safely

    if (modelName) {
      setLoading(true);
      setError(null); // Reset error state
      setResult(null); // Reset result state

      const apiUrl = `/search-specifications?modelname=${encodeURIComponent(
        modelName
      )}`;

      // Set a timeout for fallback
      const timeout = setTimeout(() => {
        if (isMounted && loading) {
          setError("Request timed out. Please try again.");
          setLoading(false);
        }
      }, 10000); // 10 seconds

      api
        .get(apiUrl)
        .then((response) => {
          if (isMounted) {
            clearTimeout(timeout); // Clear timeout on success
            setResult(response.data);
            setLoading(false);
          }
        })
        .catch((err) => {
          if (isMounted) {
            clearTimeout(timeout); // Clear timeout on error
            setError(err.response?.data?.error || "An error occurred");
            setLoading(false);
          }
        });

      return () => {
        isMounted = false;
        clearTimeout(timeout); // Clear timeout on unmount
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

  if (!result || !result.specifications || result.specifications.length === 0) {
    return (
      <Container className="my-5">
        <h1 className="text-center">No details found for this phone.</h1>
      </Container>
    );
  }

  const phone = result.specifications[0];

  return (
    <Container className="my-5">
      <Card className="phone-details-card shadow">
        <Card.Header className="text-center card-header">
          <h1>{modelName}</h1>
        </Card.Header>
        <Card.Body>
          <div className="text-center mb-4">
            <img src={phone.image} alt={modelName} className="details-img" />
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
