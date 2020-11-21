import React from "react";
import { Container, Col, Row, Accordion, Card } from "react-bootstrap";

const FAQ = ({ questions }) => {
  return (
    <section className="p-5 bg-dark text-white">
      <Container className="text-center">
        <h2>Frequently asked questions</h2>
        <hr />
        <Row>
          {questions.map((question) => (
            <Col md={6}>
              {question.map((el) => (
                <Accordion>
                  <Card className="bg-primary">
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                      {el.name}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body className="bg-light text-dark ">
                        {el.Question}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              ))}
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FAQ;
