import React from "react";
import lights from "../Assets/lights.jpg";
import lapImage from "../Assets/enjoy.jpg";
import SectionHeader from "../Components/SectionHeader";
import SectionBody from "../Components/SectionBody";
const HomeSection = () => {
  return (
    <section>
      <SectionHeader
        background={lights}
        title="We're open 24/7 "
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum non
        temporibus impedit natus, possimus molestias excepturi officiis
        libero iure cupiditate voluptatem ullam quod sequi delectus?"
        outline="outline-primary"
      />
      <SectionBody image={lapImage} title="Enjoy the best service" />
    </section>
  );
};

export default HomeSection;
