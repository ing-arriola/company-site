import React from "react";
import SectionHeader from "../Components/SectionHeader";
import image from "../Assets/image1.jpg";
const About = () => {
  return (
    <div>
      <SectionHeader
        background={image}
        title="Are you ready to get started?"
        outline="outline-primary"
      />
    </div>
  );
};

export default About;
