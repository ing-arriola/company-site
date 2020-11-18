import React from "react";

import { Container, Col, Row } from "react-bootstrap";
const SectionHeader = ({ background, title }) => {
  return (
    <div
      style={{
        backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${background})`,
      }}
      className="text-light header "
    >
      <Container>
        <Row>
          <Col className="text-center py-5">
            <h1 className="display-4">{title}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum non
              temporibus impedit natus, possimus molestias excepturi officiis
              libero iure cupiditate voluptatem ullam quod sequi delectus?
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SectionHeader;
