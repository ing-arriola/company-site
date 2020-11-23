import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../Assets/carrousel/img-1.jpg";
import img2 from "../Assets/carrousel/img-2.jpg";
import img3 from "../Assets/carrousel/img-3.jpg";

const Carrousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 header-images "
          src={img1}
          height="500"
          alt="First slide"
        />

        <Carousel.Caption className="d-none d-lg-block">
          <h3 className="display-3">Visit us today!</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 header-images"
          src={img2}
          height="500"
          alt="Third slide"
        />

        <Carousel.Caption className="d-none d-lg-block">
          <h3 className="display-3">A great experience is waiting for you</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 header-images"
          src={img3}
          height="500"
          alt="Third slide"
        />

        <Carousel.Caption className="d-none d-lg-block">
          <h3 className="display-3">We have the best food</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrousel;
