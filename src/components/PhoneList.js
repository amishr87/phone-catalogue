import React, { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";
import { Card, Container, Spinner, Button } from "react-bootstrap";
import "./PhoneList.css"; // Custom CSS file

function PhoneList() {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/phones")
      .then((response) => {
        setPhones(response.data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching phones:", error));
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center full-height">
        <Spinner animation="border" variant="primary" />
        <span className="ms-3">Loading phones...</span>
      </div>
    );
  }

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4 title">📱 Phone Catalog</h1>
      <div className="two-column-grid"> {/* Use custom CSS class */}
        {phones.map((phone) => (
          <Card key={phone.modelid} className="phone-card shadow">
            <div className="card-header">
              <Card.Img
                variant="top"
                src={`/${phone.image}`}
                className="card-img"
              />
            </div>
            <Card.Body>
              <Card.Title className="card-title">
                {phone.modelname}
              </Card.Title>
              <Card.Text className="card-text">
                <strong>Year:</strong> {phone.year}
                <br />
                <strong>Price:</strong> ${phone.startingprice}
              </Card.Text>
              <Link to={`/phones/${phone.modelid}`}>
                <Button variant="info" className="btn-block text-white">
                  View Details
                </Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default PhoneList;
