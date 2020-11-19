import React from "react";
import { Container, Row } from "react-bootstrap";
import ColumIcon from "../Components/ColumIcon";

const IconSection = (props) => {
  return (
    <section id="home-icons" className={props.padding}>
      <Container>
        <Row>
          {props.icons.map((icon) => (
            <ColumIcon
              icon={icon.name}
              title={icon.title}
              background={icon.background}
              color={props.color}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default IconSection;
