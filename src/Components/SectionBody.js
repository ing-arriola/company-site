import React from "react";
import { Container, Col, Row, Button, Image } from "react-bootstrap";
const SectionBody = ({ title, image }) => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={6} className="align-self-center">
            <h3 className="display-4">{title}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum non
              temporibus impedit natus, possimus molestias excepturi officiis
              libero iure cupiditate voluptatem ullam quod sequi delectus?{" "}
            </p>
            <Button variant="outline-danger">Learn More</Button>
          </Col>
          <Col md={6}>
            <Image src={image} fluid />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SectionBody;
