import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const TextImage = () => {
  return (
    <section className="py-5 text-center ">
      <Container className="d-flex">
        <Row>
          <Col lg={6} className="text-center">
            <h2 className="display-4 mb-3">What we do</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto, doloremque, voluptatum officiis ut incidunt quam sed
              cupiditate nihil magni consequatur magnam earum ducimus eveniet
              sapiente dolorem molestias quibusdam. Enim ratione vero a quos,
              voluptatem perferendis autem eveniet mollitia tempore? Quisquam
              similique temporibus voluptas. Repellendus, numquam id sapiente
              voluptate et iure!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
              debitis non porro. Deleniti voluptatum illo in provident fuga
              earum architecto harum qui odit corrupti! Consequatur sit quasi
              odio et recusandae commodi aut labore voluptates dolorum iure,
              suscipit minus enim, magnam quibusdam, quam placeat laboriosam
              amet dicta reiciendis modi ad totam?
            </p>
          </Col>
          <Col lg={6} className="my-auto d-none d-lg-block ">
            <Image
              src="https://source.unsplash.com/random/300x300/?javascript"
              fluid
              className=" mx-auto"
              roundedCircle
            ></Image>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TextImage;
