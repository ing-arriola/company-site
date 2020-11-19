import React from "react";
import lights from "../Assets/lights.jpg";
import lapImage from "../Assets/laptop.png";
import SectionHeader from "../Components/SectionHeader";
import SectionBody from "../Components/SectionBody";
const HomeSection = () => {
  return (
    <section>
      <SectionHeader
        background={lights}
        title="Are you ready to get started?"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum non
        temporibus impedit natus, possimus molestias excepturi officiis
        libero iure cupiditate voluptatem ullam quod sequi delectus?"
        outline="outline-primary"
      />
      <SectionBody image={lapImage} title="Lorem Ipsum" />
    </section>
  );
};

export default HomeSection;
