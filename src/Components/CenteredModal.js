import React from "react";
import { Modal, Button } from "react-bootstrap";

const CenteredModal = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      color="text-muted"
      className="text-dark"
    >
      <Modal.Body>
        <iframe
          title="video"
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/4bc2V8GVaB4?autoplay=1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="embed-video"
        ></iframe>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CenteredModal;
