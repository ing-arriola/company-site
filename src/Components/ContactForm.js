import React from "react";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";

const ContactForm = () => {
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
        <Col md={8}>
          <Card className="p-4">
            <Card.Body>
              <h3 className="text-center">
                Please fill out the form to contact us
              </h3>
              <hr></hr>
              <Row>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>className</Form.Label>
                    <Form.Control type="text" placeholder="Name" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Phone Number" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Company</Form.Label>
                    <Form.Control type="text" placeholder="Company" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="textarea" placeholder="Message" />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group>
                    <Button variant="outline-danger btn-block">Submit</Button>
                  </Form.Group>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
