import React from "react";
import { CardColumns, Card, Col, Row, Container } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import img from "../Assets/blog.jpg";
const CardsContainer = () => {
  const cosa = (
    <span style={{ background: "red", height: "300", width: "200" }}>
      Loading...
    </span>
  );

  return (
    <section className="py-4">
      <Container>
        <Row>
          <Col>
            <CardColumns>
              <Card>
                <LazyLoadImage
                  alt={"whaterever"}
                  effect="blur"
                  src="https://source.unsplash.com/random/300x200/?pizza"
                  height={200}
                  width={300}
                  placeholderSrc={img}
                />

                <Card.Body>
                  <Card.Title>Card title that wraps to a new line</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="p-3">
                <blockquote className="blockquote mb-0 card-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer className="blockquote-footer">
                    <small className="text-muted">
                      Someone famous in{" "}
                      <cite title="Source Title">Source Title</cite>
                    </small>
                  </footer>
                </blockquote>
              </Card>

              <Card>
                <LazyLoadImage
                  alt={"whaterever"}
                  effect="blur"
                  placeholder={cosa}
                  src="https://source.unsplash.com/random/300x200/?cake"
                  height={200}
                  width={300}
                  placeholderSrc={img}
                />

                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{" "}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card bg="primary" text="white" className="text-center p-3">
                <blockquote className="blockquote mb-0 card-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer className="blockquote-footer">
                    <small className="text-muted">
                      Someone famous in{" "}
                      <cite title="Source Title">Source Title</cite>
                    </small>
                  </footer>
                </blockquote>
              </Card>
              <Card className="text-center">
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{" "}
                  </Card.Text>
                  <Card.Text>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <LazyLoadImage
                  alt={"whaterever"}
                  effect="blur"
                  src="https://source.unsplash.com/random/300x200/?hamburger"
                  height={200}
                  width={300}
                  placeholderSrc={img}
                />
              </Card>
              <Card className="text-right">
                <blockquote className="blockquote mb-0 card-body">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <footer className="blockquote-footer">
                    <small className="text-muted">
                      Someone famous in{" "}
                      <cite title="Source Title">Source Title</cite>
                    </small>
                  </footer>
                </blockquote>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                  <Card.Text>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardColumns>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CardsContainer;
