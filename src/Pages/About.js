import React from "react";
import SectionHeader from "../Components/SectionHeader";
import image from "../Assets/image1.jpg";
import TextImage from "../Components/About/TextImage";
import IconSection from "../Containers/IconSection";
const About = () => {
  return (
    <div className="mt-5">
      <SectionHeader
        background={image}
        title="About Us"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, soluta."
        outline="outline-primary"
      />
      <TextImage />
      <IconSection
        icons={[
          { name: "FaRegBuilding", title: "Working", background: "bg-danger" },
          { name: "FaBullhorn", title: "Storage", background: "bg-dark" },
          { name: "FaCommentAlt", title: "Buying", background: "bg-danger" },
        ]}
        color="text-light"
      />
      <IconSection
        icons={[
          { name: "FaBox", title: "Delivery", background: "bg-dark" },
          {
            name: "FaCreditCard",
            title: "Affordable",
            background: "bg-danger",
          },
          { name: "FaCoffee", title: "Take it easy", background: "bg-dark" },
        ]}
        color="text-light"
      />
    </div>
  );
};

export default About;
