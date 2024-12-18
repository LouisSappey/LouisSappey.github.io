import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import funnyCow from "./assets/funny-cow.jpg";
import "./css/Container.css";

const WhyChooseUs = () => {
  return (
    <Container className="pages-container my-5">
      <header className="header text-center mb-4">
        <h1>Why Choose Us?</h1>
        <p>Discover why Bytemeuh is the right choice for you!</p>
        <Image src={funnyCow} alt="Funny cow" width={"300px"} roundedCircle />
      </header>

      <main>
        <Row className="benefits mb-4">
          <Col className="text-center">
            <h2>Benefits of Joining Bytemeuh</h2>
            <ul className="list-unstyled">
              <li>Access to exclusive byte-sized content.</li>
              <li>Join a vibrant and supportive community.</li>
              <li>Stay updated with the latest internet trends.</li>
              <li>Fun and engaging activities for all ages.</li>
            </ul>
          </Col>
        </Row>

        <div className="text-center mt-4">
          <Button
            variant="success"
            className="mt-3"
            onClick={() => alert("Join us now!")}
          >
            Join Now
          </Button>
        </div>
      </main>
    </Container>
  );
};

export default WhyChooseUs;
