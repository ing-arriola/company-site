import React, { useState, useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Lightbox from "lightbox-react";
import "lightbox-react/style.css";
import im1 from "../Assets/gallery/1.jpg";
import im2 from "../Assets/gallery/2.jpg";
import im3 from "../Assets/gallery/3.jpg";
import im4 from "../Assets/gallery/4.jpg";
import im5 from "../Assets/gallery/5.jpg";
import im6 from "../Assets/gallery/6.jpg";

const images = [im1, im2, im3, im4, im5, im6];

const Gallery = () => {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(0);
  const [previous, setPrevious] = useState(0);
  const [open, setOpen] = useState(false);

  const getNext = () => {
    let nextIndex = 0;
    let guess = current + 1;
    if (guess === images.length) {
      nextIndex = 0;
    } else {
      nextIndex = current + 1;
    }
    setCurrent(nextIndex);
    setNext(current + 1 === images.length ? 0 : current + 1);
    setPrevious(current - 1 > 0 ? current - 1 : images.length - 1);
    console.log("sume");
    console.log("siguiente es:" + nextIndex);
  };

  const getPrevious = () => {
    let previousIndex = 0;
    let guess = current - 1;
    if (guess > 0) {
      previousIndex = current - 1;
    } else {
      previousIndex = images.length - 1;
    }
    setCurrent(previousIndex);
    setNext(current + 1 === images.length ? 0 : current + 1);
    setPrevious(current - 1 > 0 ? current - 1 : images.length - 1);
    console.log("reste");
    console.log("previousIndex es: " + previousIndex);
  };

  const setImage = (index) => {
    setCurrent(index);
    setOpen(true);
  };

  useEffect(() => {
    getPrevious();
    getNext();
    // eslint-disable-next-line
  }, []);

  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center">Photo Gallery</h2>
        <p className="text-center">Check our awesome pictures</p>
        <Row>
          {images.map((image, index) => (
            <Col md={4} className="mb-4">
              <a onClick={() => setImage(index)}>
                <Image src={image} fluid />
              </a>
            </Col>
          ))}
        </Row>
        {open && (
          <Lightbox
            mainSrc={images[current]}
            nextSrc={images[next]}
            prevSrc={images[previous]}
            onCloseRequest={() => setOpen(false)}
            onMovePrevRequest={() => getPrevious()}
            onMoveNextRequest={() => getNext()}
          />
        )}
      </Container>
    </section>
  );
};

export default Gallery;

/*

*/
