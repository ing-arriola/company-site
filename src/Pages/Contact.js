import React from "react";
import SectionHeader from "../Components/SectionHeader";
import servicesImage from "../Assets/contact.jpg";
import FormContainer from "../Containers/FormContainer";
import StaffContainer from "../Containers/StaffContainer";
const Services = () => {
  return (
    <div className="mt-5">
      <SectionHeader
        background={servicesImage}
        title="Contact Us"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, soluta."
        outline="outline-primary"
      />
      <FormContainer />
      <StaffContainer />
    </div>
  );
};

export default Services;
