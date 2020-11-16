import React from "react";
import SectionHeader from "../Components/SectionHeader";
import lights from "../Assets/lights.jpg";
const Home = () => {
  return (
    <section>
      <SectionHeader
        background={lights}
        title="Are you ready to get started?"
        outline="outline-primary"
      />
    </section>
  );
};

export default Home;
