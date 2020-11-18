import React from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";

const NewsLetter = () => {
  return (
    <section className="bg-dark p-5 text-light text-center ">
      <Container>
        <Row>
          <Col>
            <h2>Sign up for our NewsLetter</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium quaerat labore voluptatum voluptatibus optio esse
              ducimus error minus debitis architecto.
            </p>

            <Form>
              <Form.Row className=" justify-content-center ">
                <Col md={3} className="my-2">
                  <Form.Control placeholder="First name" />
                </Col>
                <Col md={3} className="my-2">
                  <Form.Control placeholder="Last name" />
                </Col>
                <Col md={1} className="my-2">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Col>
              </Form.Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsLetter;
