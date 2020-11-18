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
        outline="outline-primary"
      />
      <SectionBody image={lapImage} title="Lorem Ipsum" />
    </section>
  );
};

export default HomeSection;
