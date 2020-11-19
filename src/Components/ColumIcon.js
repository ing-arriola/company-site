import React from "react";
import { Col } from "react-bootstrap";
import * as icons from "react-icons/fa";

const ColumIcon = ({ icon, title, background, color }) => {
  const stylesToApply = `mb-4 text-center mx-auto ${background} ${color}`;
  return (
    <Col className={stylesToApply} md={3}>
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
