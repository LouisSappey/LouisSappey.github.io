import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./css/Container.css";
import funnyCow from "./assets/funny-cow.jpg";

const HomePage = () => {
  return (
    <Container className="pages-container my-5">
      <header className="header mb-4">
        <h1>Welcome to Bytemeuh!</h1>
        <Image src={funnyCow} alt="Funny cow" width={"300px"} roundedCircle />
      </header>
      <main>
        <Row className="text-center w-100 mb-4">
          <Col className="text-center">
            <h2>Fun Facts</h2>
            <ul className="list-unstyled">
              <li>
                Did you know that the average person spends 6 hours a day
                online?
              </li>
              <li>More than 4.5 billion people use the internet!</li>
              <li>
                There are over 1.7 billion websites on the World Wide Web!
              </li>
              <li>Every minute, 500 hours of video are uploaded to YouTube!</li>
            </ul>
          </Col>
        </Row>

        <Row className="call-to-action">
          <Col className="text-center">
            <h2>Join the Bytemeuh Community!</h2>
            <p>Sign up now and never miss a byte of fun!</p>
            <Button
              variant="info"
              className="mt-3"
              onClick={() => alert("Join us today!")}
            >
              Join Now
            </Button>
          </Col>
        </Row>
      </main>
    </Container>
  );
};

export default HomePage;
