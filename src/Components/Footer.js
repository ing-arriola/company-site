import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <section>
      <Container className="text-center p-4">
        <Row>
          <Col>
            <p>Copyright &copy; {new Date().getFullYear()} Jarriola </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
