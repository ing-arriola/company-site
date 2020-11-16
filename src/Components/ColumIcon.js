import React from "react";
import { Col } from "react-bootstrap";
import * as icons from "react-icons/fa";

const ColumIcon = ({ icon, title }) => {
  return (
    <Col className="mb-4 text-center" md={4}>
      <div style={{ fontSize: 50 }}>{React.createElement(icons[icon])}</div>
      <h3>{title}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
        nesciunt?
      </p>
    </Col>
  );
};

export default ColumIcon;
