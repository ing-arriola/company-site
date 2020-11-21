import React from "react";
import { Carousel } from "react-bootstrap";

const QuoteCarrousel = () => {
  return (
    <div className=" bg-dark text-white text-center ">
      <p className="display-4">Testimonials</p>
      <Carousel className="pb-4">
        <Carousel.Item>
          <blockquote className="blockquote">
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <footer className="blockquote-footer">
              Jhon D.
              <cite>Company 1</cite>
            </footer>
          </blockquote>
        </Carousel.Item>
        <Carousel.Item>
          <blockquote className="blockquote">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <footer className="blockquote-footer">
              Raul G.
              <cite>Company 2</cite>
            </footer>
          </blockquote>
        </Carousel.Item>
        <Carousel.Item>
          <blockquote className="blockquote">
            <p>
              Vitae natus magnam alias harum nemo exercitationem asperiores
              dolorum.
            </p>
            <footer className="blockquote-footer">
              Jacqueline A.
              <cite>Company 3</cite>
            </footer>
          </blockquote>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default QuoteCarrousel;
