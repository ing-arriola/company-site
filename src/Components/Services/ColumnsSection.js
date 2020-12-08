import React from "react";

import { Container, Col, Row, Button, Card, ListGroup } from "react-bootstrap";
const ColumnsSection = ({ features }) => {
  return (
    <Container className="py-5">
      <Row>
        {features.map((feature) => (
          <Col md={4}>
            <Card className="text-center">
              <Card.Header className="bg-dark text-light ">
                <h3>Service Plan</h3>
              </Card.Header>
              <h4 className="mt-1">$9.99/ person</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
                blanditiis?
              </p>
              <Card.Body>
                <ListGroup>
                  <ListGroup.Item>Feature 1</ListGroup.Item>
                  <ListGroup.Item>Feature 2</ListGroup.Item>
                  <ListGroup.Item>Feature 3</ListGroup.Item>
                  <ListGroup.Item>Feature 4</ListGroup.Item>
                  <ListGroup.Item>Feature 5</ListGroup.Item>
                </ListGroup>
                <Button variant="danger mt-3 btn-block">Get it</Button>
              </Card.Body>

              <Card.Footer className="text-muted">1 Year plan</Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ColumnsSection;
