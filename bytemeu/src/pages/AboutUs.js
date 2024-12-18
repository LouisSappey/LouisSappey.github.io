import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import funnyCow from "./assets/funny-cow.jpg";
import "./css/Container.css";

const AboutUs = () => {
  return (
    <Container className="pages-container my-5">
      <header className="header text-center">
        <h1>About Us</h1>
        <p>Learn more about Bytemeuh and our mission.</p>
        <Image src={funnyCow} alt="Funny cow" width={"300px"} roundedCircle />
      </header>

      <main>
        <section className="our-mission">
          <h2>Our Mission</h2>
          <p>
            At Bytemeuh, we aim to bring byte-sized entertainment to everyone.
            We believe in spreading joy and fun through the digital world.
          </p>
        </section>

        <section className="our-story">
          <h2>Our Story</h2>
          <p>
            Founded in 2024, Bytemeuh started as a small passion project to make
            the internet a little more fun. Today, we are proud to have a
            growing community of users worldwide.
          </p>
        </section>

        <Button
          variant="primary"
          className="mt-3"
          onClick={() => alert("Learn more about us!")}
        >
          Learn More
        </Button>
      </main>
    </Container>
  );
};

export default AboutUs;
