import React from "react";
import SectionHeader from "../Components/SectionHeader";
import servicesImage from "../Assets/image3.jpg";
import ColumnsSection from "../Components/Services/ColumnsSection";

const Services = () => {
  const features = [1, 2, 3];
  return (
    <div className="mt-5">
      <SectionHeader
        background={servicesImage}
        title="Our Services"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, soluta."
        outline="outline-primary"
      />
      <ColumnsSection features={features} />
    </div>
  );
};

export default Services;
