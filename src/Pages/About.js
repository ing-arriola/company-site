import React from "react";
import SectionHeader from "../Components/SectionHeader";
import image from "../Assets/image1.jpg";
const About = () => {
  return (
    <div className="mt-5">
      <SectionHeader
        background={image}
        title="About Us"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, soluta."
        outline="outline-primary"
      />
    </div>
  );
};

export default About;
