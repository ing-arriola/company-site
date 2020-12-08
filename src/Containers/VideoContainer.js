import React from "react";
import { FaPlay } from "react-icons/fa";
import { Container, Col, Row } from "react-bootstrap";
import CenteredModal from "../Components/CenteredModal";
import background from "../Assets/media.jpg";
const VideoContainer = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <section
      style={{
        backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${background})`,
      }}
      className="text-center text-light header"
    >
      <Row>
        <Col>
          <Container className="py-5">
            <a onClick={() => setModalShow(true)}>
              <FaPlay size={45} />
            </a>
            <CenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            <h2 className="mt-2">See what we do</h2>
          </Container>
        </Col>
      </Row>
    </section>
  );
};

export default VideoContainer;
