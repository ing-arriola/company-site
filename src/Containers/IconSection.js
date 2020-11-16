import React from "react";
import { Container, Row } from "react-bootstrap";
import ColumIcon from "../Components/ColumIcon";

const IconSection = () => {
  return (
    <section id="home-icons" className="py-5">
      <Container>
        <Row>
          <ColumIcon icon="FaCog" title="Working" />
          <ColumIcon icon="FaCloud" title="Storage" />
          <ColumIcon icon="FaCartPlus" title="Buying" />
        </Row>
      </Container>
    </section>
  );
};

export default IconSection;
