import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

const Form = () => {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Card className="p-4">
            <Card.Body>
              <h4>Get in touch</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, illum.
              </p>
              <h4>Adress</h4>
              <p>550 Main st, Tenesse USA</p>
              <h4>Email</h4>
              <p>test@test.com</p>
              <h4>Phone</h4>
              <p>(555)5555-5555</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}></Col>
      </Row>
    </Container>
  );
};

export default Form;
