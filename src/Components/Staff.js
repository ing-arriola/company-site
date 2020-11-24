import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Staff = ({ persons }) => {
  return (
    <div className="py-5 bg-dark text-white text-center">
      <Container>
        <h1>Our Staff</h1>
        <hr></hr>
        <Row>
          {persons.map((person) => (
            <Col md={3} className="mx-auto">
              <LazyLoadImage
                alt={"whaterever"}
                effect="blur"
                src={person.image}
                placeholderSrc={person.image}
                height={180}
                width={180}
                className=" img-fluid rounded-circle mb-2"
              />
              <h4>{person.name}</h4>
              <small> {person.position} </small>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Staff;
