import React from "react";
import SectionHeader from "../Components/SectionHeader";
import image from "../Assets/about.jpg";
import TextImage from "../Components/About/TextImage";
import IconSection from "../Containers/IconSection";
import QuoteCarrousel from "../Components/QuouteCarrousel";
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
          {
            name: "FaRegBuilding",
            title: "We have the best location",
            background: "bg-danger",
          },
          {
            name: "FaBullhorn",
            title: "Awesome live music",
            background: "bg-dark",
          },
          {
            name: "FaCommentAlt",
            title: "Your opinion is valuable",
            background: "bg-danger",
          },
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
          {
            name: "FaCoffee",
            title: "The best coffee",
            background: "bg-dark",
          },
        ]}
        color="text-light"
      />
      <QuoteCarrousel />
    </div>
  );
};

export default About;
